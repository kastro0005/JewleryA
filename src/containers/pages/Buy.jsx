import Cart from "components/Compra/Cart";
import Layout from "hocs/layouts/Layout";
import React from "react";
import { Helmet } from "react-helmet-async";

function Buy() {
  

  return (
    <Layout>
      <Helmet>
        <title>Yuyita's Jewelry | Cart</title>
        <meta name="author" content="Sierra-Esperanza Creations" />{/* bots que escanean el sitio */}
        <meta name="publisher" content="Sierra-Esperanza Creations" />{/* bots que escanean el sitio */}
        <link rel="canonical" href="" />{/* en href va el link del sitio: https://www.example.com/ */}
      </Helmet>
        <div className="">
            <Cart />
          </div >
        
    </Layout>
  );
}
export default Buy;
