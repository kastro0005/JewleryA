import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_cadenas_pesoneto,
  get_cadenas_pesoneto_page,
} from "redux/actions/Cadenas/cadenas";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Cadenas({ get_cadenas_pesoneto,get_cadenas_pesoneto_page ,cadenasPeso, count, next, previous }) {
  const param = useParams();
  const cadenapeso = param.cadenapeso_neto;
  

  useEffect(() => {
    get_cadenas_pesoneto(cadenapeso);
  }, [get_cadenas_pesoneto, cadenapeso]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Chains</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={cadenapeso}/>
        {cadenasPeso&&cadenasPeso.length>0 ? 
        (
        <>
        <Gallery producto={cadenasPeso && cadenasPeso} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_cadenas_pesoneto_page} list={cadenasPeso && cadenasPeso} count={count&&count} Prod={cadenapeso}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  cadenasPeso: state.cadenas.cadenasPeso,
  count: state.cadenas.count,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_cadenas_pesoneto,
  get_cadenas_pesoneto_page,
})(Cadenas);
