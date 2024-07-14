import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from './Navbar';
import Account from './Account';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Wishlist from './Wishlist';
import './App.css';
import '../index.css';

function App() {
  const [page, setPage] = useState('/')
  const [items, setItems] = useState([])
  const [wallet, setWallet] = useState(0)
  const [inCart, setInCart] = useState([])
  const [inWishlist, setInWishlist] = useState([]);

  function addToCart(addedItem){
    const cartItems = inCart.find(
      (item) => item.id === addedItem.id
    );

    if (!cartItems){
      setInCart([...inCart, addedItem]);
    }
  }

  function removeFromCart(removedItem){
    const editedCart = inCart.filter(item => item.title !== removedItem.title);
    setInCart(editedCart);
  }

  function addToWishlist(wishItem) {
    const wished = inWishlist.find(
      (item) => item.id === wishItem.id
    );

    if (!wished){
      setInWishlist([...inWishlist, wishItem])
    }
    alert('Added to wishlist')
  }

  function removeFromWishlist(removeWish){
    const editedWishlist = inWishlist.filter(item => item.title !== removeWish.title);
    setInWishlist(editedWishlist);
  }
  

  useEffect(() => {
    fetch('http://127.0.0.1:5555/items')
    .then(res => res.json())
    .then(data => {
      setItems(data)
    });
  }, [items.length += 1]);

  return (
    <div className='App'>
      <NavBar onChangePage={setPage}/>
      <Routes>
        <Route path='/shop' element={<Shop items={items} addToCart={addToCart}  addToWishlist={addToWishlist}/>}></Route>
        <Route path='/wishlist' element={<Wishlist inWishlist={inWishlist} setInWishlist={setInWishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart}/>}></Route>
        <Route path='/cart' element={<Cart inCart={inCart} setInCart={setInCart} removeFromCart={removeFromCart} wallet={wallet} setWallet={setWallet}/>}></Route>
        <Route path='/account' element={<Account wallet={wallet} setWallet={setWallet} items={items}/>}></Route>
        <Route path='/' element={<Home items={items} addToCart={addToCart} removeFromCart={removeFromCart} addToWishlist={addToWishlist}/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
