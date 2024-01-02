import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_pircings_pesoneto,
  get_pircings_pesoneto_page,
} from "redux/actions/Pircings/pircings";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";


function Pircings({ get_pircings_pesoneto,get_pircings_pesoneto_page ,pircingsPeso, count, next, previous }) {
  const param = useParams();
  const pircingpeso = param.pircingpeso_neto;
  

  useEffect(() => {
    get_pircings_pesoneto(pircingpeso);
  }, [get_pircings_pesoneto, pircingpeso]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Pircings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={pircingpeso}/>
        {pircingsPeso&&pircingsPeso.length>0 ? 
        (
        <>
        <Gallery producto={pircingsPeso && pircingsPeso} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_pircings_pesoneto_page} list={pircingsPeso && pircingsPeso} count={count&&count} Prod={pircingpeso}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  pircingsPeso: state.pircings.pircingsPeso,
  count: state.pircings.count,
  next: state.pircings.next,
  previous: state.pircings.previous,
});
export default connect(mapStateToProps, {
  get_pircings_pesoneto,
  get_pircings_pesoneto_page,
})(Pircings);
