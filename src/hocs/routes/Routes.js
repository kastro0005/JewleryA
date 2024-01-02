import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Personalizar from "containers/pages/Personalizar";
import Buy from "containers/pages/Buy";

import Anillos from "containers/Products/Anillos/Anillos";
import NameAn from "containers/Products/Anillos/NameAn";
import SizeAn from "containers/Products/Anillos/SizeAn";
import PriceAn from "containers/Products/Anillos/PriceAn";
import WeightAn from "containers/Products/Anillos/WeightAn";
import PurityAn from "containers/Products/Anillos/PurityAn";

import Aretes from "containers/Products/Aretes/Aretes";
import NameAr from "containers/Products/Aretes/NameAr";
import SizeAr from "containers/Products/Aretes/SizeAr";
import PriceAr from "containers/Products/Aretes/PriceAr";
import WeightAr from "containers/Products/Aretes/WeightAr";
import PurityAr from "containers/Products/Aretes/PurityAr";

import Cadenas from "containers/Products/Cadenas/Cadenas";
import NameCa from "containers/Products/Cadenas/NameCa";
import SizeCa from "containers/Products/Cadenas/SizeCa";
import PriceCa from "containers/Products/Cadenas/PriceCa";
import WeightCa from "containers/Products/Cadenas/WeightCa";
import PurityCa from "containers/Products/Cadenas/PurityCa";

import Dijes from "containers/Products/Dijes/Dijes";
import NameDi from "containers/Products/Dijes/NameDi";
import SizeDi from "containers/Products/Dijes/SizeDi";
import PriceDi from "containers/Products/Dijes/PriceDi";
import WeightDi from "containers/Products/Dijes/WeightDi";
import PurityDi from "containers/Products/Dijes/PurityDi";

import Pircings from "containers/Products/Pircings/Pircings";
import NamePi from "containers/Products/Pircings/NamePi";
import SizePi from "containers/Products/Pircings/SizePi";
import PricePi from "containers/Products/Pircings/PricePi";
import WeightPi from "containers/Products/Pircings/WeightPi";
import PurityPi from "containers/Products/Pircings/PurityPi";

import Tobilleras from "containers/Products/Tobilleras/Tobilleras";
import NameTo from "containers/Products/Tobilleras/NameTo";
import SizeTo from "containers/Products/Tobilleras/SizeTo";
import PriceTo from "containers/Products/Tobilleras/PriceTo";
import WeightTo from "containers/Products/Tobilleras/WeightTo";
import PurityTo from "containers/Products/Tobilleras/PurityTo";

import Brazaletes from "containers/Products/Brazaletes/Brazaletes";
import NameBr from "containers/Products/Brazaletes/NameBr";
import SizeBr from "containers/Products/Brazaletes/SizeBr";
import PriceBr from "containers/Products/Brazaletes/PriceBr";
import WeightBr from "containers/Products/Brazaletes/WeightBr";
import PurityBr from "containers/Products/Brazaletes/PurityBr";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/*Error Display*/}
        <Route path="*" element={<Error404 />} />

        {/*Home Display*/}
        <Route path="/" element={<Home />} />

        {/*Anillos Display*/}
        <Route path="Anillos/" element={<Anillos />} />
        <Route path="Anillos/filterName/:anilloname" element={<NameAn />} />
        <Route path="Anillos/filterSize/:anillosize" element={<SizeAn />} />
        <Route
          path="Anillos/filterPurity/:anillopureza"
          element={<PurityAn />}
        />
        <Route
          path="Anillos/filterPrice/:anilloprecio_unidad"
          element={<PriceAn />}
        />
        <Route
          path="Anillos/filterWeight/:anillopeso_neto"
          element={<WeightAn />}
        />

        {/*Pircings Display*/}
        <Route path="Pircings/" element={<Pircings />} />
        <Route path="Pircings/filterName/:pircingname" element={<NamePi />} />
        <Route path="Pircings/filterSize/:pircingsize" element={<SizePi />} />
        <Route
          path="Pircings/filterPurity/:pircingpureza"
          element={<PurityPi />}
        />
        <Route
          path="Pircings/filterPrice/:pircingprecio_unidad"
          element={<PricePi />}
        />
        <Route
          path="Pircings/filterWeight/:pircingpeso_neto"
          element={<WeightPi />}
        />

        {/*Tobilleras Display*/}
        <Route path="Tobilleras/" element={<Tobilleras />} />
        <Route
          path="Tobilleras/filterName/:tobilleraname"
          element={<NameTo />}
        />
        <Route
          path="Tobilleras/filterSize/:tobillerasize"
          element={<SizeTo />}
        />
        <Route
          path="Tobilleras/filterPurity/:tobillerapureza"
          element={<PurityTo />}
        />
        <Route
          path="Tobilleras/filterPrice/:tobilleraprecio_unidad"
          element={<PriceTo />}
        />
        <Route
          path="Tobilleras/filterWeight/:tobillerapeso_neto"
          element={<WeightTo />}
        />

        {/*Brazaletes Display*/}
        <Route path="Brazaletes/" element={<Brazaletes />} />
        <Route
          path="Brazaletes/filterName/:brazaletename"
          element={<NameBr />}
        />
        <Route
          path="Brazaletes/filterSize/:brazaletesize"
          element={<SizeBr />}
        />
        <Route
          path="Brazaletes/filterPurity/:brazaletepureza"
          element={<PurityBr />}
        />
        <Route
          path="Brazaletes/filterPrice/:brazaleteprecio_unidad"
          element={<PriceBr />}
        />
        <Route
          path="Brazaletes/filterWeight/:brazaletepeso_neto"
          element={<WeightBr />}
        />

        {/*Aretes Display*/}
        <Route path="Aretes/" element={<Aretes />} />
        <Route path="Aretes/filterName/:aretename" element={<NameAr />} />
        <Route path="Aretes/filterSize/:aretesize" element={<SizeAr />} />
        <Route path="Aretes/filterPurity/:aretepureza" element={<PurityAr />} />
        <Route
          path="Aretes/filterPrice/:areteprecio_unidad"
          element={<PriceAr />}
        />
        <Route
          path="Aretes/filterWeight/:aretepeso_neto"
          element={<WeightAr />}
        />

        {/*Cadenas Display*/}
        <Route path="Cadenas/" element={<Cadenas />} />
        <Route path="Cadenas/filterName/:cadenaname" element={<NameCa />} />
        <Route path="Cadenas/filterSize/:cadenasize" element={<SizeCa />} />
        <Route
          path="Cadenas/filterPurity/:cadenapureza"
          element={<PurityCa />}
        />
        <Route
          path="Cadenas/filterPrice/:cadenaprecio_unidad"
          element={<PriceCa />}
        />
        <Route
          path="Cadenas/filterWeight/:cadenapeso_neto"
          element={<WeightCa />}
        />

        {/*Dijes Display*/}
        <Route path="Dijes/" element={<Dijes />} />
        <Route path="Dijes/filterName/:dijename" element={<NameDi />} />
        <Route path="Dijes/filterSize/:dijesize" element={<SizeDi />} />
        <Route path="Dijes/filterPurity/:dijepureza" element={<PurityDi />} />
        <Route
          path="Dijes/filterPrice/:dijeprecio_unidad"
          element={<PriceDi />}
        />
        <Route
          path="Dijes/filterWeight/:dijepeso_neto"
          element={<WeightDi />}
        />

        {/*Buy Display*/}
        <Route path="/Buy/" element={<Buy />} />

        {/*Personalizar Display*/}
        <Route path="/Personalizar/" element={<Personalizar />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
