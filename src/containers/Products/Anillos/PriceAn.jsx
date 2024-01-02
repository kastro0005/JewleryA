import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_anillos_preciounidad,
  get_anillos_preciounidad_page,
} from "redux/actions/Anillos/anillos";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Anillos({ get_anillos_preciounidad,get_anillos_preciounidad_page,anillosPrecio, count, next, previous }) {
  const param = useParams();
  const anilloprecio_unidad = param.anilloprecio_unidad;

  useEffect(() => {
    get_anillos_preciounidad(anilloprecio_unidad);
  }, [get_anillos_preciounidad, anilloprecio_unidad]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Rings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={anilloprecio_unidad}/>
        {anillosPrecio&&anillosPrecio.length>0 ? 
        (
        <>
        <Gallery producto={anillosPrecio && anillosPrecio} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
       <SmallSetPaginationFil list_page={get_anillos_preciounidad_page} list={anillosPrecio && anillosPrecio} count={count&&count} Prod={anilloprecio_unidad}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  anillosPrecio: state.anillos.anillosPrecio,
  count: state.anillos.count,
  next: state.anillos.next,
  previous: state.anillos.previous,
});
export default connect(mapStateToProps, {
  get_anillos_preciounidad,
  get_anillos_preciounidad_page,
})(Anillos);
