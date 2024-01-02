import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect} from "react";
import { get_dijes, get_dijes_pages } from "redux/actions/Dijes/dijes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import Gallery from "components/Gallery/Gallery";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import HeaderProd from "components/Gallery/HeaderProd";


function Dijes({ get_dijes, get_dijes_pages,dijes, count, next, previous }) {
  useEffect(() => {
    get_dijes();
  }, [get_dijes,]);

  return (
    <Layout>
      <Helmet>
        <title>Yuyita's Jewelry | Charms</title>
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
      <HeaderProd prod={"Charms"} element={"Dijes"}/>
      <Gallery producto={dijes && dijes} />
      <SmallSetPagination list_page={get_dijes_pages} list={dijes && dijes} count={count&&count}/>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  dijes: state.dijes.dijes,
  count: state.dijes.count,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_dijes,
  get_dijes_pages,
})(Dijes);
