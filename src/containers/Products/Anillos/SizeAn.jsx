import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_anillos_size,
  get_anillos_size_page,
} from "redux/actions/Anillos/anillos";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import HeaderFil from "components/Gallery/HeaderFil";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import AlertImage from "components/Gallery/AlertImage";

function Anillos({ get_anillos_size, get_anillos_size_page,anillosSize, count, next, previous }) {
  const param = useParams();
  const anillosize = param.anillosize;

  useEffect(() => {
    get_anillos_size(anillosize);
  }, [get_anillos_size, anillosize]);


  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Rings</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={anillosize}/>
        {anillosSize&&anillosSize.length>0 ? 
        (
        <>
        <Gallery producto={anillosSize && anillosSize} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_anillos_size_page} list={anillosSize && anillosSize} count={count&&count} Prod={anillosize}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  anillosSize: state.anillos.anillosSize,
  count: state.anillos.count,
  next: state.anillos.next,
  previous: state.anillos.previous,
});
export default connect(mapStateToProps, {
  get_anillos_size,
  get_anillos_size_page,
})(Anillos);
