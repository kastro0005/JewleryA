import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_dijes_preciounidad,
  get_dijes_preciounidad_page,
} from "redux/actions/Dijes/dijes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Dijes({ get_dijes_preciounidad,get_dijes_preciounidad_page,dijesPrecio, count, next, previous }) {
  const param = useParams();
  const dijeprecio_unidad = param.dijeprecio_unidad;

  useEffect(() => {
    get_dijes_preciounidad(dijeprecio_unidad);
  }, [get_dijes_preciounidad, dijeprecio_unidad]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Charms</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={dijeprecio_unidad}/>
        {dijesPrecio&&dijesPrecio.length>0 ? 
        (
        <>
        <Gallery producto={dijesPrecio && dijesPrecio} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
       <SmallSetPaginationFil list_page={get_dijes_preciounidad_page} list={dijesPrecio && dijesPrecio} count={count&&count} Prod={dijeprecio_unidad}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  dijesPrecio: state.dijes.dijesPrecio,
  count: state.dijes.count,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_dijes_preciounidad,
  get_dijes_preciounidad_page,
})(Dijes);
