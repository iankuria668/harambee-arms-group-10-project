import React from "react";
import {useState, useEffect} from 'react';
import FeaturedList from './FeaturedList'
import "./home.css"

function Home({ items, addToCart, removeFromCart, addToWishlist }){
    



    return (
        <div>
          <br />
          <h2 className="intro" id="welcome">Welcome to Harambee Arms!</h2>
          <p className="intro" id="greeting">Harambee Arms is the gun shop for all your shooting needs.</p>
          <br />
          <h3 className="intro centered-heading" id="featureTitle">Best Sellers:</h3>
          <div id="featList">
            <FeaturedList items={items} addToCart={addToCart} removeFromCart={removeFromCart} addToWishlist={addToWishlist} />
          </div>
          <br />
          <br />
          <footer>
            <div className="footer-content">
      
              {/* Other footer content goes here */}
      
            </div>
      
            <div className="footer-bottom">
              <p>&copy; 2024 Harambee Arms. All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
    }      
export default Home;