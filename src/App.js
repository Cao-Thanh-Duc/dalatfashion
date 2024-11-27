import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import ProducModal from './Components/ProductModal';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Listing from './Pages/Listing';
import Login from './Pages/Login/Login';
import ProductDetails from './Pages/ProductDetails';
const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
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
    setisOpenProductModal,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/cat/:id' exact={true} element={<Listing />} />
          <Route
            path='/product/:id'
            exact={true}
            element={<ProductDetails />}
          />
          <Route path='/cart/:id' exact={true} element={<Cart />} />
          <Route
            path='/introduct-dalatfashion/:id'
            exact={true}
            element={<Introduction />}
          />
          <Route
            path='/contact-dalatfashion/:id'
            exact={true}
            element={<Contact />}
          />
          <Route path='/login' exact={true} element={<Login />} />
        </Routes>
        <Footer />
        {isOpenProductModal === true && <ProducModal closeProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };

// Đã xem xong part 7
