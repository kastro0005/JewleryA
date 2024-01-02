import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_brazaletes_size,
  get_brazaletes_size_page,
} from "redux/actions/Brazaletes/brazaletes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Brazaletes({ get_brazaletes_size, get_brazaletes_size_page,brazaletesSize, count, next, previous }) {
  const param = useParams();
  const brazaletesize = param.brazaletesize;

  useEffect(() => {
    get_brazaletes_size(brazaletesize);
  }, [get_brazaletes_size, brazaletesize]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Bracelets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={brazaletesize}/>
        {brazaletesSize&&brazaletesSize.length>0 ? 
        (
        <>
        <Gallery producto={brazaletesSize && brazaletesSize} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_brazaletes_size_page} list={brazaletesSize && brazaletesSize} count={count&&count} Prod={brazaletesize}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  brazaletesSize: state.brazaletes.brazaletesSize,
  count: state.brazaletes.count,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_brazaletes_size,
  get_brazaletes_size_page,
})(Brazaletes);
