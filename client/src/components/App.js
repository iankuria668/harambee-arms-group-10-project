import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
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
  const [user, setUser] = useState(null);
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
      fetch('/check_session', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setWallet(data.wallet);
      });
    }
  }, []);

  const addToCart = (addedItem) => {
    const cartItems = inCart.find((item) => item.id === addedItem.id);
    if (!cartItems) {
      setInCart([...inCart, addedItem]);
      alert('Added to cart');
    }
  };

  const removeFromCart = (removedItem) => {
    const editedCart = inCart.filter(item => item.title !== removedItem.title);
    setInCart(editedCart);
  };

  const addToWishlist = (wishItem) => {
    const wished = inWishlist.find((item) => item.id === wishItem.id);
    if (!wished) {
      setInWishlist([...inWishlist, wishItem]);
      alert('Added to wishlist');
    }
  };

  const removeFromWishlist = (removeWish) => {
    const editedWishlist = inWishlist.filter(item => item.title !== removeWish.title);
    setInWishlist(editedWishlist);
  };

  const handleLogin = (userData, token) => {
    localStorage.setItem('jwt', token);
    setIsAuthenticated(true);
    setUser(userData);
    setWallet(userData.wallet);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
    setUser(null);
    setWallet(0);
    navigate('/login');
  };

  return (
    <div className='App'>
      {isAuthenticated && <NavBar onLogout={handleLogout} />}
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home items={items} addToCart={addToCart} removeFromCart={removeFromCart} addToWishlist={addToWishlist} /> : <Navigate to="/login" />} />
        <Route path='/shop' element={isAuthenticated ? <Shop items={items} addToCart={addToCart} addToWishlist={addToWishlist} /> : <Navigate to="/login" />} />
        <Route path='/wishlist' element={isAuthenticated ? <Wishlist inWishlist={inWishlist} setInWishlist={setInWishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path='/cart' element={isAuthenticated ? <Cart inCart={inCart} setInCart={setInCart} removeFromCart={removeFromCart} wallet={wallet} setWallet={setWallet} /> : <Navigate to="/login" />} />
        <Route path='/account' element={isAuthenticated ? <Account user={user} wallet={wallet} setWallet={setWallet} items={items} /> : <Navigate to="/login" />} />
        <Route path='/signup' element={<Signup onSignup={handleLogin} />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
