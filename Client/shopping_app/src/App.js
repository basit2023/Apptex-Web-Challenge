// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ItemList from './components/Pages/ItemList';
import Checkout from './components/Pages/Checkout';
import Cart from './components/Cart/Cart';
import Home from './components/Pages/Home';
import About from './components/About/About';
import Contact from './components/Contect/Contact';
import Pagenotfound from './components/Pages/Pagenotfound';

const API_BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/items`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          E-Commerce Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="mr-4 collapse navbar-collapse" id="navbarNav">
          <ul className=" ml-5 navbar-nav ml-auto"> {/* Use 'ml-auto' for left alignment */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/items">
                Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Checkout
              </Link>
            </li>
          </ul>
          <Cart cartLength={cart.length} />
        </div>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

      </nav>

      <Routes>
        <Route path="/items" element={<ItemList addToCart={addToCart} items={items} />} />
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
        <Route path="/" element={<Home addToCart={addToCart} items={items} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>

    
    <div className="bg-light p-4" style={{ minHeight: "70vh" }}>
    <h1 className="text-center text-lg font-weight-bold">
      All Right Reserved &copy; Shopping website
    </h1>
    <p className="text-center mt-3">
      <Link to="/about" className="text-primary text-decoration-none mx-3">
        About
      </Link>
      |
      <Link to="/contact" className="text-primary text-decoration-none mx-3">
        Contact
      </Link>
      |
      <Link to="/policy" className="text-primary text-decoration-none mx-3">
        Privacy Policy
      </Link>
    </p>
  </div>
    </Router>
    

  );
};

export default App;















// import './App.css';
// import './index.css';
// import React from 'react';
// import { BrowserRouter,Routes, Route} from 'react-router-dom';
// import Homepage from './components/Pages/Home/Homepage';
// import Layout from './components/Layout/Layout';
// import Pagenotfound from './components/Pages/Home/Pagenotfound';
// import Cart from './components/Cart/Cart'
// import Contact from './components/Contect/Contact';
// import About from './components/About/About';
// import About from './components/Header/About/About';
// import Contact from './components/Header/Contect/Contact';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* <Route path="/" element={<Header/>}/> */}
//           <Route path="/" element={<Layout />}>
//             <Route path="" element={<Homepage />} />
//             <Route path="cart" element={<Cart />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="about" element={<About />} />
//             <Route path="*" element={<Pagenotfound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;