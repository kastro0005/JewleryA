import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_aretes_pureza,
  get_aretes_pureza_page,
} from "redux/actions/Aretes/aretes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";

function Anillos({ get_aretes_pureza,get_aretes_pureza_page,aretesPureza, count, next, previous }) {
  const param = useParams();
  const aretepureza = param.aretepureza;
 

  useEffect(() => {
    get_aretes_pureza(aretepureza);
  }, [get_aretes_pureza, aretepureza]);



  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Earrings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={aretepureza}/>
        {aretesPureza&&aretesPureza.length>0 ? 
        (
        <>
        <Gallery producto={aretesPureza && aretesPureza} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_aretes_pureza_page} list={aretesPureza && aretesPureza} count={count&&count} Prod={aretepureza}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  aretesPureza: state.aretes.aretesPureza,
  count: state.aretes.count,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_aretes_pureza,
  get_aretes_pureza_page,
})(Anillos);
