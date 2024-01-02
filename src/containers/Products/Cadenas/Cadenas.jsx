import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect} from "react";
import { get_cadenas, get_cadenas_pages } from "redux/actions/Cadenas/cadenas";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import Gallery from "components/Gallery/Gallery";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import HeaderProd from "components/Gallery/HeaderProd";


function Cadenas({ get_cadenas, get_cadenas_pages,cadenas, count, next, previous }) {
  useEffect(() => {
    get_cadenas();
  }, [get_cadenas,]);

  return (
    <Layout>
      <Helmet>
        <title>Yuyita's Jewelry | Chains</title>
        <meta
          name="description"
          content="Sitio de ventas de joyas de oro del más alto nivel, elaboradas artesanalmente o profesionalmente con opciones únicas en el mercado."
        />
        {/* descripcion para el buscador de google */}
        <meta name="keywords" content="jewles, gold, golden,ring" />{" "}
        {/* palabras clave */}
        <meta name="robots" content="all" />
        {/* bots que escanean el sitio */}
        <meta name="author" content="Sierra-Esperanza Creations" />
        {/* bots que escanean el sitio */}
        <meta name="publisher" content="Sierra-Esperanza Creations" />
        {/* bots que escanean el sitio */}
        <link rel="canonical" href={`${process.env.REACT_APP_API_URL}`} />
        {/* en href va el link del sitio: https://www.example.com/ */}
      </Helmet>
      <Navbar />
      <HeaderProd prod={"Chains"} element={"Cadenas"}/>
      <Gallery producto={cadenas && cadenas} />
      <SmallSetPagination list_page={get_cadenas_pages} list={cadenas && cadenas} count={count&&count}/>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  cadenas: state.cadenas.cadenas,
  count: state.cadenas.count,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_cadenas,
  get_cadenas_pages,
})(Cadenas);
