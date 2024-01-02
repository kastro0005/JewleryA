import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_dijes_pureza,
  get_dijes_pureza_page,
} from "redux/actions/Dijes/dijes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";


function Dijes({ get_dijes_pureza,get_dijes_pureza_page,dijesPureza, count, next, previous }) {
  const param = useParams();
  const dijepureza = param.dijepureza;
 

  useEffect(() => {
    get_dijes_pureza(dijepureza);
  }, [get_dijes_pureza, dijepureza]);



  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Charms</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={dijepureza}/>
        {dijesPureza&&dijesPureza.length>0 ? 
        (
        <>
        <Gallery producto={dijesPureza && dijesPureza} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_dijes_pureza_page} list={dijesPureza && dijesPureza} count={count&&count} Prod={dijepureza}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  dijesPureza: state.dijes.dijesPureza,
  count: state.dijes.count,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_dijes_pureza,
  get_dijes_pureza_page,
})(Dijes);
