import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect} from "react";
import { get_pircings, get_pircings_pages } from "redux/actions/Pircings/pircings";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import Gallery from "components/Gallery/Gallery";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import HeaderProd from "components/Gallery/HeaderProd";


function Pircings({ get_pircings, get_pircings_pages,pircings, count, next, previous }) {
  useEffect(() => {
    get_pircings();
  }, [get_pircings,]);

  return (
    <Layout>
      <Helmet>
        <title>Yuyita's Jewelry | Pircings</title>
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
      <HeaderProd prod={"Pircings"} element={"Pircings"}/>
      <Gallery producto={pircings && pircings} />
      <SmallSetPagination list_page={get_pircings_pages} list={pircings && pircings} count={count&&count}/>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  pircings: state.pircings.pircings,
  count: state.pircings.count,
  next: state.pircings.next,
  previous: state.pircings.previous,
});
export default connect(mapStateToProps, {
  get_pircings,
  get_pircings_pages,
})(Pircings);
