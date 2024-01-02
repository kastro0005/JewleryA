import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_tobilleras_size,
  get_tobilleras_size_page,
} from "redux/actions/Tobilleras/tobilleras";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Tobilleras({ get_tobilleras_size, get_tobilleras_size_page,tobillerasSize, count, next, previous }) {
  const param = useParams();
  const tobillerasize = param.tobillerasize;

  useEffect(() => {
    get_tobilleras_size(tobillerasize);
  }, [get_tobilleras_size, tobillerasize]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Anklets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={tobillerasize}/>
        {tobillerasSize&&tobillerasSize.length>0 ? 
        (
        <>
        <Gallery producto={tobillerasSize && tobillerasSize} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_tobilleras_size_page} list={tobillerasSize && tobillerasSize} count={count&&count} Prod={tobillerasize}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  tobillerasSize: state.tobilleras.tobillerasSize,
  count: state.tobilleras.count,
  next: state.tobilleras.next,
  previous: state.tobilleras.previous,
});
export default connect(mapStateToProps, {
  get_tobilleras_size,
  get_tobilleras_size_page,
})(Tobilleras);
