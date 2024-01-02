import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_tobilleras_pesoneto,
  get_tobilleras_pesoneto_page,
} from "redux/actions/Tobilleras/tobilleras";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";


function Tobilleras({ get_tobilleras_pesoneto,get_tobilleras_pesoneto_page ,tobillerasPeso, count, next, previous }) {
  const param = useParams();
  const tobillerapeso = param.tobillerapeso_neto;
  

  useEffect(() => {
    get_tobilleras_pesoneto(tobillerapeso);
  }, [get_tobilleras_pesoneto, tobillerapeso]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Anklets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={tobillerapeso}/>
        {tobillerasPeso&&tobillerasPeso.length>0 ? 
        (
        <>
        <Gallery producto={tobillerasPeso && tobillerasPeso} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_tobilleras_pesoneto_page} list={tobillerasPeso && tobillerasPeso} count={count&&count} Prod={tobillerapeso}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  tobillerasPeso: state.tobilleras.tobillerasPeso,
  count: state.tobilleras.count,
  next: state.tobilleras.next,
  previous: state.tobilleras.previous,
});
export default connect(mapStateToProps, {
  get_tobilleras_pesoneto,
  get_tobilleras_pesoneto_page,
})(Tobilleras);
