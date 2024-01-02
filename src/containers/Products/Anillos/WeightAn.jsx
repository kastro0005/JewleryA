import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_anillos_pesoneto,
  get_anillos_pesoneto_page,
} from "redux/actions/Anillos/anillos";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Anillos({ get_anillos_pesoneto,get_anillos_pesoneto_page ,anillosPeso, count, next, previous }) {
  const param = useParams();
  const anillopeso = param.anillopeso_neto;
  

  useEffect(() => {
    get_anillos_pesoneto(anillopeso);
  }, [get_anillos_pesoneto, anillopeso]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Rings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={anillopeso}/>
        {anillosPeso&&anillosPeso.length>0 ? 
        (
        <>
        <Gallery producto={anillosPeso && anillosPeso} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_anillos_pesoneto_page} list={anillosPeso && anillosPeso} count={count&&count} Prod={anillopeso}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  anillosPeso: state.anillos.anillosPeso,
  count: state.anillos.count,
  next: state.anillos.next,
  previous: state.anillos.previous,
});
export default connect(mapStateToProps, {
  get_anillos_pesoneto,
  get_anillos_pesoneto_page,
})(Anillos);
