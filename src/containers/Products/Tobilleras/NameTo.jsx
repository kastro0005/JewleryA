import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_tobilleras_name,
  get_tobilleras_name_page,
} from "redux/actions/Tobilleras/tobilleras";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Tobilleras({ get_tobilleras_name, get_tobilleras_name_page,tobillerasName, count, next, previous }) {
  const param = useParams();
  const tobilleraname = param.tobilleraname;
  

  useEffect(() => {
    get_tobilleras_name(tobilleraname);
  }, [get_tobilleras_name, tobilleraname]);

  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Anklets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={tobilleraname}/>
        {tobillerasName&&tobillerasName.length>0 ? 
        (
        <>
        <Gallery producto={tobillerasName && tobillerasName} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_tobilleras_name_page} list={tobillerasName && tobillerasName} count={count&&count} Prod={tobilleraname}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  tobillerasName: state.tobilleras.tobillerasName,
  count: state.tobilleras.count,
  next: state.tobilleras.next,
  previous: state.tobilleras.previous,
});
export default connect(mapStateToProps, {
  get_tobilleras_name,
  get_tobilleras_name_page,
})(Tobilleras);
