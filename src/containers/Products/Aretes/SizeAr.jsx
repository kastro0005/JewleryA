import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_aretes_size,
  get_aretes_size_page,
} from "redux/actions/Aretes/aretes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Anillos({ get_aretes_size, get_aretes_size_page,aretesSize, count, next, previous }) {
  const param = useParams();
  const aretesize = param.aretesize;

  useEffect(() => {
    get_aretes_size(aretesize);
  }, [get_aretes_size, aretesize]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Earrings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={aretesize}/>
        {aretesSize&&aretesSize.length>0 ? 
        (
        <>
        <Gallery producto={aretesSize && aretesSize} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_aretes_size_page} list={aretesSize && aretesSize} count={count&&count} Prod={aretesize}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  aretesSize: state.aretes.aretesSize,
  count: state.aretes.count,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_aretes_size,
  get_aretes_size_page,
})(Anillos);
