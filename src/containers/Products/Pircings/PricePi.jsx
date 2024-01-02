import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_pircings_preciounidad,
  get_pircings_preciounidad_page,
} from "redux/actions/Pircings/pircings";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Pircings({ get_pircings_preciounidad,get_pircings_preciounidad_page,pircingsPrecio, count, next, previous }) {
  const param = useParams();
  const pircingprecio_unidad = param.pircingprecio_unidad;

  useEffect(() => {
    get_pircings_preciounidad(pircingprecio_unidad);
  }, [get_pircings_preciounidad, pircingprecio_unidad]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Pircings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={pircingprecio_unidad}/>
        {pircingsPrecio&&pircingsPrecio.length>0 ? 
        (
        <>
        <Gallery producto={pircingsPrecio && pircingsPrecio} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
       <SmallSetPaginationFil list_page={get_pircings_preciounidad_page} list={pircingsPrecio && pircingsPrecio} count={count&&count} Prod={pircingprecio_unidad}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  pircingsPrecio: state.pircings.pircingsPrecio,
  count: state.pircings.count,
  next: state.pircings.next,
  previous: state.pircings.previous,
});
export default connect(mapStateToProps, {
  get_pircings_preciounidad,
  get_pircings_preciounidad_page,
})(Pircings);
