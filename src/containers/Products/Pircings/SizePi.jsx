import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_pircings_size,
  get_pircings_size_page,
} from "redux/actions/Pircings/pircings";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";


function Pircings({ get_pircings_size, get_pircings_size_page,pircingsSize, count, next, previous }) {
  const param = useParams();
  const pircingsize = param.pircingsize;

  useEffect(() => {
    get_pircings_size(pircingsize);
  }, [get_pircings_size, pircingsize]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Pircings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={pircingsize}/>
        {pircingsSize&&pircingsSize.length>0 ? 
        (
        <>
        <Gallery producto={pircingsSize && pircingsSize} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_pircings_size_page} list={pircingsSize && pircingsSize} count={count&&count} Prod={pircingsize}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  pircingsSize: state.pircings.pircingsSize,
  count: state.pircings.count,
  next: state.pircings.next,
  previous: state.pircings.previous,
});
export default connect(mapStateToProps, {
  get_pircings_size,
  get_pircings_size_page,
})(Pircings);
