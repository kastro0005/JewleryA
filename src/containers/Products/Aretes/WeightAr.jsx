import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_aretes_pesoneto,
  get_aretes_pesoneto_page,
} from "redux/actions/Aretes/aretes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Aretes({ get_aretes_pesoneto,get_aretes_pesoneto_page ,aretesPeso, count, next, previous }) {
  const param = useParams();
  const aretepeso = param.aretepeso_neto;
  

  useEffect(() => {
    get_aretes_pesoneto(aretepeso);
  }, [get_aretes_pesoneto, aretepeso]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Earrings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={aretepeso}/>
        {aretesPeso&&aretesPeso.length>0 ? 
        (
        <>
        <Gallery producto={aretesPeso && aretesPeso} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_aretes_pesoneto_page} list={aretesPeso && aretesPeso} count={count&&count} Prod={aretepeso}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  aretesPeso: state.aretes.aretesPeso,
  count: state.aretes.count,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_aretes_pesoneto,
  get_aretes_pesoneto_page,
})(Aretes);
