import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_dijes_size,
  get_dijes_size_page,
} from "redux/actions/Dijes/dijes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Dijes({ get_dijes_size, get_dijes_size_page,dijesSize, count, next, previous }) {
  const param = useParams();
  const dijesize = param.dijesize;

  useEffect(() => {
    get_dijes_size(dijesize);
  }, [get_dijes_size, dijesize]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Charms</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={dijesize}/>
        {dijesSize&&dijesSize.length>0 ? 
        (
        <>
        <Gallery producto={dijesSize && dijesSize} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_dijes_size_page} list={dijesSize && dijesSize} count={count&&count} Prod={dijesize}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  dijesSize: state.dijes.dijesSize,
  count: state.dijes.count,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_dijes_size,
  get_dijes_size_page,
})(Dijes);
