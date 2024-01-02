import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_dijes_pesoneto,
  get_dijes_pesoneto_page,
} from "redux/actions/Dijes/dijes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";


function Dijes({ get_dijes_pesoneto,get_dijes_pesoneto_page ,dijesPeso, count, next, previous }) {
  const param = useParams();
  const dijepeso = param.dijepeso_neto;
  

  useEffect(() => {
    get_dijes_pesoneto(dijepeso);
  }, [get_dijes_pesoneto, dijepeso]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Charms</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={dijepeso}/>
        {dijesPeso&&dijesPeso.length>0 ? 
        (
        <>
        <Gallery producto={dijesPeso && dijesPeso} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_dijes_pesoneto_page} list={dijesPeso && dijesPeso} count={count&&count} Prod={dijepeso}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  dijesPeso: state.dijes.dijesPeso,
  count: state.dijes.count,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_dijes_pesoneto,
  get_dijes_pesoneto_page,
})(Dijes);
