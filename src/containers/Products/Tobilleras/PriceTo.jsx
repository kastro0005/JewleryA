import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_tobilleras_preciounidad,
  get_tobilleras_preciounidad_page,
} from "redux/actions/Tobilleras/tobilleras";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Tobilleras({ get_tobilleras_preciounidad,get_tobilleras_preciounidad_page,tobillerasPrecio, count, next, previous }) {
  const param = useParams();
  const tobillerasprecio_unidad = param.tobilleraprecio_unidad;

  useEffect(() => {
    get_tobilleras_preciounidad(tobillerasprecio_unidad);
  }, [get_tobilleras_preciounidad, tobillerasprecio_unidad]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Anklets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={tobillerasprecio_unidad}/>
        {tobillerasPrecio&&tobillerasPrecio.length>0 ? 
        (
        <>
        <Gallery producto={tobillerasPrecio && tobillerasPrecio} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
       <SmallSetPaginationFil list_page={get_tobilleras_preciounidad_page} list={tobillerasPrecio && tobillerasPrecio} count={count&&count} Prod={tobillerasprecio_unidad}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  tobillerasPrecio: state.tobilleras.tobillerasPrecio,
  count: state.tobilleras.count,
  next: state.tobilleras.next,
  previous: state.tobilleras.previous,
});
export default connect(mapStateToProps, {
  get_tobilleras_preciounidad,
  get_tobilleras_preciounidad_page,
})(Tobilleras);
