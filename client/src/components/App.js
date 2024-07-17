import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from './Navbar';
import Account from './Account';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Signup from './Signup';
import Login from './Login';
import './App.css';
import '../index.css';

function App() {
  const [items, setItems] = useState([]);
  const [inCart, setInCart] = useState([]);
  const [inWishlist, setInWishlist] = useState([]);
  const [wallet, setWallet] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:5555/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const addToCart = (addedItem) => {
    const cartItems = inCart.find((item) => item.id === addedItem.id);
    if (!cartItems) {
      setInCart([...inCart, addedItem]);
    }
    alert('Added to cart');
  };

  const removeFromCart = (removedItem) => {
    const editedCart = inCart.filter(item => item.title !== removedItem.title);
    setInCart(editedCart);
  };

  const addToWishlist = (wishItem) => {
    const wished = inWishlist.find((item) => item.id === wishItem.id);
    if (!wished) {
      setInWishlist([...inWishlist, wishItem]);
    }
    alert('Added to wishlist');
  };

  const removeFromWishlist = (removeWish) => {
    const editedWishlist = inWishlist.filter(item => item.title !== removeWish.title);
    setInWishlist(editedWishlist);
  };

  const handleLogin = (data) => {
    localStorage.setItem('jwt', data.access_token);
    setIsAuthenticated(true);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className='App'>
      {isAuthenticated && <NavBar onLogout={handleLogout} />}
      <Routes>
        <Route path='/shop' element={<Shop items={items} addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path='/wishlist' element={<Wishlist inWishlist={inWishlist} setInWishlist={setInWishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart inCart={inCart} setInCart={setInCart} removeFromCart={removeFromCart} wallet={wallet} setWallet={setWallet} />} />
        <Route path='/account' element={<Account wallet={wallet} setWallet={setWallet} items={items} />} />
        <Route path='/' element={<Home items={items} addToCart={addToCart} removeFromCart={removeFromCart} addToWishlist={addToWishlist} />} />
        <Route path='/signup' element={<Signup onSignup={handleLogin} />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
