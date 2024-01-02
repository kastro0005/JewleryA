import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_cadenas_size,
  get_cadenas_size_page,
} from "redux/actions/Cadenas/cadenas";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Cadenas({ get_cadenas_size, get_cadenas_size_page,cadenasSize, count, next, previous }) {
  const param = useParams();
  const cadenasize = param.cadenasize;

  useEffect(() => {
    get_cadenas_size(cadenasize);
  }, [get_cadenas_size, cadenasize]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Chains</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={cadenasize}/>
        {cadenasSize&&cadenasSize.length>0 ? 
        (
        <>
        <Gallery producto={cadenasSize && cadenasSize} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_cadenas_size_page} list={cadenasSize && cadenasSize} count={count&&count} Prod={cadenasize}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  cadenasSize: state.cadenas.cadenasSize,
  count: state.cadenas.count,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_cadenas_size,
  get_cadenas_size_page,
})(Cadenas);
