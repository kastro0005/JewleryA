import Navbar from "components/navegation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import {
  get_tobilleras_pureza,
  get_tobilleras_pureza_page,
} from "redux/actions/Tobilleras/tobilleras";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Gallery from "components/Gallery/Gallery";
import SmallSetPaginationFil from "components/Pagination/SmallSetPaginationFil";
import HeaderFil from "components/Gallery/HeaderFil";
import AlertImage from "components/Gallery/AlertImage";


function Tobilleras({ get_tobilleras_pureza,get_tobilleras_pureza_page,tobillerasPureza, count, next, previous }) {
  const param = useParams();
  const tobillerapureza = param.tobillerapureza;
 

  useEffect(() => {
    get_tobilleras_pureza(tobillerapureza);
  }, [get_tobilleras_pureza, tobillerapureza]);



  return (
    <>
      <Layout>
        <Helmet>
          <title>Yuyita's Jewelry | Anklets</title>
        </Helmet>
        <Navbar />
        <HeaderFil element={tobillerapureza}/>
        {tobillerasPureza&&tobillerasPureza.length>0 ? 
        (
        <>
        <Gallery producto={tobillerasPureza && tobillerasPureza} />
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
        <SmallSetPaginationFil list_page={get_tobilleras_pureza_page} list={tobillerasPureza && tobillerasPureza} count={count&&count} Prod={tobillerapureza}/>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => ({
  tobillerasPureza: state.tobilleras.tobillerasPureza,
  count: state.tobilleras.count,
  next: state.tobilleras.next,
  previous: state.tobilleras.previous,
});
export default connect(mapStateToProps, {
  get_tobilleras_pureza,
  get_tobilleras_pureza_page,
})(Tobilleras);
