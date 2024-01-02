import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_brazaletes_pesoneto,
  get_brazaletes_pesoneto_page,
} from "redux/actions/Brazaletes/brazaletes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Brazaletes({ get_brazaletes_pesoneto,get_brazaletes_pesoneto_page ,brazaletesPeso, count, next, previous }) {
  const param = useParams();
  const brazaletespeso = param.brazaletespeso_neto;
  

  useEffect(() => {
    get_brazaletes_pesoneto(brazaletespeso);
  }, [get_brazaletes_pesoneto, brazaletespeso]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Bracelets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={brazaletespeso}/>
        {brazaletesPeso&&brazaletesPeso.length>0 ? 
        (
        <>
        <Gallery producto={brazaletesPeso && brazaletesPeso} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_brazaletes_pesoneto_page} list={brazaletesPeso && brazaletesPeso} count={count&&count} Prod={brazaletespeso}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  brazaletesPeso: state.brazaletes.brazaletesPeso,
  count: state.brazaletes.count,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_brazaletes_pesoneto,
  get_brazaletes_pesoneto_page,
})(Brazaletes);
