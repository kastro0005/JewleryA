import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_brazaletes_pureza,
  get_brazaletes_pureza_page,
} from "redux/actions/Brazaletes/brazaletes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Brazaletes({ get_brazaletes_pureza,get_brazaletes_pureza_page,brazaletesPureza, count, next, previous }) {
  const param = useParams();
  const brazaletepureza = param.brazaletepureza;
 

  useEffect(() => {
    get_brazaletes_pureza(brazaletepureza);
  }, [get_brazaletes_pureza, brazaletepureza]);



  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Bracelets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={brazaletepureza}/>
        {brazaletesPureza&&brazaletesPureza.length>0 ? 
        (
        <>
        <Gallery producto={brazaletesPureza && brazaletesPureza} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_brazaletes_pureza_page} list={brazaletesPureza && brazaletesPureza} count={count&&count} Prod={brazaletepureza}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  brazaletesPureza: state.brazaletes.brazaletesPureza,
  count: state.brazaletes.count,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_brazaletes_pureza,
  get_brazaletes_pureza_page,
})(Brazaletes);
