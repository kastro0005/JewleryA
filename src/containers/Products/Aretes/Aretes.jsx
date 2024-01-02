import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect} from "react";
import { get_aretes, get_aretes_pages } from "redux/actions/Aretes/aretes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import Gallery from "components/Gallery/Gallery";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import HeaderProd from "components/Gallery/HeaderProd";


function Aretes({ get_aretes, get_aretes_pages,aretes, count, next, previous }) {
  useEffect(() => {
    get_aretes();
  }, [get_aretes,]);

  return (
    <Layout>
      <Helmet>
        <title>Yuyita's Jewelry | Earrings</title>
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
      <HeaderProd prod={"Earrings"} element={"Aretes"}/>
      <Gallery producto={aretes && aretes} />
      <SmallSetPagination list_page={get_aretes_pages} list={aretes && aretes} count={count&&count}/>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  aretes: state.aretes.aretes,
  count: state.aretes.count,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_aretes,
  get_aretes_pages,
})(Aretes);
