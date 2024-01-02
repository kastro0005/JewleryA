import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_dijes_name,
  get_dijes_name_page,
} from "redux/actions/Dijes/dijes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Dijes({ get_dijes_name, get_dijes_name_page,dijesName, count, next, previous }) {
  const param = useParams();
  const dijename = param.dijename;
  

  useEffect(() => {
    get_dijes_name(dijename);
  }, [get_dijes_name, dijename]);

  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Charms</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={dijename}/>
        {dijesName&&dijesName.length>0 ? 
        (
        <>
        <Gallery producto={dijesName && dijesName} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_dijes_name_page} list={dijesName && dijesName} count={count&&count} Prod={dijename}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  dijesName: state.dijes.dijesName,
  count: state.dijes.count,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_dijes_name,
  get_dijes_name_page,
})(Dijes);
