import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_aretes_preciounidad,
  get_aretes_preciounidad_page,
} from "redux/actions/Aretes/aretes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Aretes({ get_aretes_preciounidad,get_aretes_preciounidad_page,aretesPrecio, count, next, previous }) {
  const param = useParams();
  const areteprecio_unidad = param.areteprecio_unidad;

  useEffect(() => {
    get_aretes_preciounidad(areteprecio_unidad);
  }, [get_aretes_preciounidad, areteprecio_unidad]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Earrings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={areteprecio_unidad}/>
        {aretesPrecio&&aretesPrecio.length>0 ? 
        (
        <>
        <Gallery producto={aretesPrecio && aretesPrecio} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
       <SmallSetPaginationFil list_page={get_aretes_preciounidad_page} list={aretesPrecio && aretesPrecio} count={count&&count} Prod={areteprecio_unidad}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  aretesPrecio: state.aretes.aretesPrecio,
  count: state.aretes.count,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_aretes_preciounidad,
  get_aretes_preciounidad_page,
})(Aretes);
