import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_brazaletes_preciounidad,
  get_brazaletes_preciounidad_page,
} from "redux/actions/Brazaletes/brazaletes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Brazaletes({ get_brazaletes_preciounidad,get_brazaletes_preciounidad_page,brazaletesPrecio, count, next, previous }) {
  const param = useParams();
  const brazaleteprecio_unidad = param.brazaleteprecio_unidad;

  useEffect(() => {
    get_brazaletes_preciounidad(brazaleteprecio_unidad);
  }, [get_brazaletes_preciounidad, brazaleteprecio_unidad]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Bracelets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={brazaleteprecio_unidad}/>
        {brazaletesPrecio&&brazaletesPrecio.length>0 ? 
        (
        <>
        <Gallery producto={brazaletesPrecio && brazaletesPrecio} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
       <SmallSetPaginationFil list_page={get_brazaletes_preciounidad_page} list={brazaletesPrecio && brazaletesPrecio} count={count&&count} Prod={brazaleteprecio_unidad}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  brazaletesPrecio: state.brazaletes.brazaletesPrecio,
  count: state.brazaletes.count,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_brazaletes_preciounidad,
  get_brazaletes_preciounidad_page,
})(Brazaletes);
