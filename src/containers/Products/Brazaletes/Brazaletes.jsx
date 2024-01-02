import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect} from "react";
import { get_brazaletes, get_brazaletes_pages } from "redux/actions/Brazaletes/brazaletes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import Gallery from "components/Gallery/Gallery";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import HeaderProd from "components/Gallery/HeaderProd";


function Brazaletes({ get_brazaletes, get_brazaletes_pages,brazaletes, count, next, previous }) {
  useEffect(() => {
    get_brazaletes();
  }, [get_brazaletes,]);

  return (
    <Layout>
      <Helmet>
        <title>Yuyita's Jewelry | Bracelets</title>
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
        <link rel="canonical" href={`${process.env.REACT_APP_API_URL}`}/>
        {/* en href va el link del sitio: https://www.example.com/ */}
      </Helmet>
      <Navbar />
      <HeaderProd prod={"Bracelets"} element={"Brazaletes"}/>
      <Gallery producto={brazaletes && brazaletes} />
      <SmallSetPagination list_page={get_brazaletes_pages} list={brazaletes && brazaletes} count={count&&count}/>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  brazaletes: state.brazaletes.brazaletes,
  count: state.brazaletes.count,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_brazaletes,
  get_brazaletes_pages,
})(Brazaletes);
