import { BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from "hocs/routes/Routes";
import { Provider } from "react-redux";
import { CartProvider } from "context/CartContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "./store";

function App() {
  return (
    <CartProvider>
      <HelmetProvider>
        <Helmet>
          <title>Yuyita's Jewelry</title>
          <meta name="description" content="Sitio de ventas de joyas de oro del más alto nivel, elaboradas artesanalmente o profesionalmente con opciones únicas en el mercado." />{/* descripcion para el buscador de google */}
          <meta name="keywords" content="jewles, gold, golden, chain, neckless, brazelet, ring, cuban chain" /> {/* palabras clave */}
          <meta name="robots" content="all" />{/* bots que escanean el sitio */}
          <meta name="author" content="Sierra-Esperanza Creations" />{/* bots que escanean el sitio */}
          <meta name="publisher" content="Sierra-Esperanza Creations" />{/* bots que escanean el sitio */}
          <link rel="canonical" href={`${process.env.REACT_APP_API_URL}`} />{/* en href va el link del sitio: https://www.example.com/ */}
        </Helmet>
        <Provider store={store}>
          <Router>
          <AnimatedRoutes />
          </Router>
        </Provider>
      </HelmetProvider>
    </CartProvider>
  );
}

export default App;
