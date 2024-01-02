import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_cadenas_pureza,
  get_cadenas_pureza_page,
} from "redux/actions/Cadenas/cadenas";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Cadenas({ get_cadenas_pureza,get_cadenas_pureza_page,cadenasPureza, count, next, previous }) {
  const param = useParams();
  const cadenapureza = param.cadenapureza;
 

  useEffect(() => {
    get_cadenas_pureza(cadenapureza);
  }, [get_cadenas_pureza, cadenapureza]);



  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Chains</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={cadenapureza}/>
        {cadenasPureza&&cadenasPureza.length>0 ? 
        (
        <>
        <Gallery producto={cadenasPureza && cadenasPureza} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_cadenas_pureza_page} list={cadenasPureza && cadenasPureza} count={count&&count} Prod={cadenapureza}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  cadenasPureza: state.cadenas.cadenasPureza,
  count: state.cadenas.count,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_cadenas_pureza,
  get_cadenas_pureza_page,
})(Cadenas);
