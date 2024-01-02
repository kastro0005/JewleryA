import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_cadenas_preciounidad,
  get_cadenas_preciounidad_page,
} from "redux/actions/Cadenas/cadenas";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Cadenas({ get_cadenas_preciounidad,get_cadenas_preciounidad_page,cadenasPrecio, count, next, previous }) {
  const param = useParams();
  const cadenaprecio_unidad = param.cadenaprecio_unidad;

  useEffect(() => {
    get_cadenas_preciounidad(cadenaprecio_unidad);
  }, [get_cadenas_preciounidad, cadenaprecio_unidad]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Chains</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={cadenaprecio_unidad}/>
        {cadenasPrecio&&cadenasPrecio.length>0 ? 
        (
        <>
        <Gallery producto={cadenasPrecio && cadenasPrecio} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
       <SmallSetPaginationFil list_page={get_cadenas_preciounidad_page} list={cadenasPrecio && cadenasPrecio} count={count&&count} Prod={cadenaprecio_unidad}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  cadenasPrecio: state.cadenas.cadenasPrecio,
  count: state.cadenas.count,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_cadenas_preciounidad,
  get_cadenas_preciounidad_page,
})(Cadenas);
