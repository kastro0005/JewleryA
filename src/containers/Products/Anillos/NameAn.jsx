import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_anillos_name,
  get_anillos_name_page,
} from "redux/actions/Anillos/anillos";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Anillos({ get_anillos_name, get_anillos_name_page,anillosName, count, next, previous }) {
  const param = useParams();
  const anilloname = param.anilloname;
  

  useEffect(() => {
    get_anillos_name(anilloname);
  }, [get_anillos_name, anilloname]);

  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Rings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={anilloname}/>
        {anillosName&&anillosName.length>0 ? 
        (
        <>
        <Gallery producto={anillosName && anillosName} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_anillos_name_page} list={anillosName && anillosName} count={count&&count} Prod={anilloname}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  anillosName: state.anillos.anillosName,
  count: state.anillos.count,
  next: state.anillos.next,
  previous: state.anillos.previous,
});
export default connect(mapStateToProps, {
  get_anillos_name,
  get_anillos_name_page,
})(Anillos);
