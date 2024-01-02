// import Componente1 from "components/Perzonalize/Componente1"
import Custom from "components/Perzonalize/Custom"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navegation/Navbar"
import Footer from "components/navegation/Footer"
import { Helmet } from "react-helmet-async"

function Perzonalizar() {


    return(
        <Layout>
            <Helmet>
                <title>Yuyita's Jewelry | Perzonalize</title>
                <meta name="author" content="Sierra-Esperanza Creations" />{/* bots que escanean el sitio */}
                <meta name="publisher" content="Sierra-Esperanza Creations" />{/* bots que escanean el sitio */}
                <link rel="canonical" href="" />{/* en href va el link del sitio: https://www.example.com/ */}
            </Helmet>
            <Navbar/>
                <Custom />
            <Footer/>
        </Layout>
    )
}

  
  export default Perzonalizar