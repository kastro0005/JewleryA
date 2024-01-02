import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_cadenas_name,
  get_cadenas_name_page,
} from "redux/actions/Cadenas/cadenas";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Cadenas({ get_cadenas_name, get_cadenas_name_page,cadenasName, count, next, previous }) {
  const param = useParams();
  const cadenaname = param.cadenaname;
  

  useEffect(() => {
    get_cadenas_name(cadenaname);
  }, [get_cadenas_name, cadenaname]);

  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Chains</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={cadenaname}/>
        {cadenasName&&cadenasName.length>0 ? 
        (
        <>
        <Gallery producto={cadenasName && cadenasName} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_cadenas_name_page} list={cadenasName && cadenasName} count={count&&count} Prod={cadenaname}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  cadenasName: state.cadenas.cadenasName,
  count: state.cadenas.count,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_cadenas_name,
  get_cadenas_name_page,
})(Cadenas);
