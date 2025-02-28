import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Routes,Route, useSearchParams} from 'react-router-dom'
import ProductDetail from './Pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './Pages/Cart';

function App() {
  const  [cartItems,setCartItems]=useState([])

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center' />
          <Header cartItems={cartItems}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
            <Route path="/cart"  element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;