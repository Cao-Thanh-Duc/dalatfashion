import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProducModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Introduction from "./Components/Introduction";
import Contact from "./Components/Contact";
const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
const[isHeaderFooterShow, setIsHeaderFooterShow] = useState(true)
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    isHeaderFooterShow,
    setisOpenProductModal,
    setIsHeaderFooterShow,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
        
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route
            path="/product/:id"
            exact={true}
            element={<ProductDetails />}
          />
          <Route path="/cart/:id" exact={true} element={<Cart />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/register" exact={true} element={<Cart />} />

          <Route
            path="/introduct-dalatfashion/:id"
            exact={true}
            element={<Introduction />}
          />
          <Route
            path="/contact-dalatfashion/:id"
            exact={true}
            element={<Contact />}
          />
        </Routes>
        {
          isHeaderFooterShow === true && <Footer />
        }
     
        {isOpenProductModal === true && <ProducModal closeProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };

// Đã xem xong part 7
