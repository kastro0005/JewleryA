import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_aretes_name,
  get_aretes_name_page,
} from "redux/actions/Aretes/aretes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Aretes({ get_aretes_name, get_aretes_name_page,aretesName, count, next, previous }) {
  const param = useParams();
  const aretename = param.aretename;
  

  useEffect(() => {
    get_aretes_name(aretename);
  }, [get_aretes_name, aretename]);

  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Earrings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={aretename}/>
        {aretesName&&aretesName.length>0 ? 
        (
        <>
        <Gallery producto={aretesName && aretesName} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_aretes_name_page} list={aretesName && aretesName} count={count&&count} Prod={aretename}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  aretesName: state.aretes.aretesName,
  count: state.aretes.count,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_aretes_name,
  get_aretes_name_page,
})(Aretes);
