import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_anillos_pureza,
  get_anillos_pureza_page,
} from "redux/actions/Anillos/anillos";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Anillos({ get_anillos_pureza,get_anillos_pureza_page,anillosPureza, count, next, previous }) {
  const param = useParams();
  const anillopureza = param.anillopureza;
 

  useEffect(() => {
    get_anillos_pureza(anillopureza);
  }, [get_anillos_pureza, anillopureza]);



  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Rings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={anillopureza}/>
        {anillosPureza&&anillosPureza.length>0 ? 
        (
        <>
        <Gallery producto={anillosPureza && anillosPureza} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_anillos_pureza_page} list={anillosPureza && anillosPureza} count={count&&count} Prod={anillopureza}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  anillosPureza: state.anillos.anillosPureza,
  count: state.anillos.count,
  next: state.anillos.next,
  previous: state.anillos.previous,
});
export default connect(mapStateToProps, {
  get_anillos_pureza,
  get_anillos_pureza_page,
})(Anillos);
