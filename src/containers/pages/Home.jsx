import Carrousel from "components/Home/Carrousel"
import Footer from "components/navegation/Footer"
import Navbar from "components/navegation/Navbar"
import Layout from "hocs/layouts/Layout"
import { connect } from "react-redux"


function Home(){
    return(
        <Layout>
            <Navbar/>
                <Carrousel/>
            <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
})
export default connect(mapStateToProps,{}) (Home)