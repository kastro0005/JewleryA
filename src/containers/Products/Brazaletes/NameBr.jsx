import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_brazaletes_name,
  get_brazaletes_name_page,
} from "redux/actions/Brazaletes/brazaletes";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Brazaletes({ get_brazaletes_name, get_brazaletes_name_page,brazaletesName, count, next, previous }) {
  const param = useParams();
  const brazaletename = param.brazaletename;
  

  useEffect(() => {
    get_brazaletes_name(brazaletename);
  }, [get_brazaletes_name, brazaletename]);

  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Bracelets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={brazaletename}/>
        {brazaletesName&&brazaletesName.length>0 ? 
        (
        <>
        <Gallery producto={brazaletesName && brazaletesName} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_brazaletes_name_page} list={brazaletesName && brazaletesName} count={count&&count} Prod={brazaletename}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  brazaletesName: state.brazaletes.brazaletesName,
  count: state.brazaletes.count,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_brazaletes_name,
  get_brazaletes_name_page,
})(Brazaletes);
