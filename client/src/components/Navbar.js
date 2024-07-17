// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ onLogout }) {
  return (
    <div>
      <header id='header'>
        {/* <h1 className='intro' style={{fontSize: "250px"}}>Now Entering Harambee Arms.</h1> */}
      </header>
      <nav id='navbar'>
        <NavLink className='NavLink' exact to='/'>Home</NavLink>
        <NavLink className='NavLink' to='/shop'>Shop</NavLink>
        <NavLink className='NavLink' to='/wishlist'>Wishlist</NavLink>
        <NavLink className='NavLink' to='/cart'>MyCart</NavLink>
        <NavLink className='NavLink' to='/account'>Account</NavLink>
        <button className='NavLink' onClick={onLogout}>Logout</button>
      </nav>
    </div>
  )
}

export default NavBar;
