import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_pircings_name,
  get_pircings_name_page,
} from "redux/actions/Pircings/pircings";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Pircings({ get_pircings_name, get_pircings_name_page,pircingsName, count, next, previous }) {
  const param = useParams();
  const pircingname = param.pircingname;
  

  useEffect(() => {
    get_pircings_name(pircingname);
  }, [get_pircings_name, pircingname]);

  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Pircings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={pircingname}/>
        {pircingsName&&pircingsName.length>0 ? 
        (
        <>
        <Gallery producto={pircingsName && pircingsName} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_pircings_name_page} list={pircingsName && pircingsName} count={count&&count} Prod={pircingname}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  pircingsName: state.pircings.pircingsName,
  count: state.pircings.count,
  next: state.pircings.next,
  previous: state.pircings.previous,
});
export default connect(mapStateToProps, {
  get_pircings_name,
  get_pircings_name_page,
})(Pircings);
