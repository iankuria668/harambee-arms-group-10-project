import React from "react";
import {useState, useEffect} from 'react';
import FeaturedList from './FeaturedList'

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
              <div className="footer-column">
                <h3>Safety Reminders</h3>
                <ul className="safety-list">
                  <li>
                    <img src="https://i.pinimg.com/originals/44/ba/4e/44ba4ea03b60f107f8c853d5cc948ae9.gif" alt="Rule 1 Icon" />
                    <i>Always treat every firearm as if it is loaded.</i>
                  </li>
                  <li>
                    <img src="https://i.pinimg.com/474x/60/0f/7d/600f7dd23bbac8899e181ac835172978.jpg" alt="Rule 2 Icon" />
                    <i>Never point a firearm at anything you are not willing to destroy.</i>
                  </li>
                  <li>
                    <img src="https://i.pinimg.com/474x/ca/cd/99/cacd99dd767c66b98d7e98817845fd7a.jpg" alt="Rule 3 Icon" />
                    <i>Keep your finger off the trigger until you are ready to shoot.</i>
                  </li>
                  <li>
                    <img src="https://i.pinimg.com/474x/80/79/fd/8079fdfd4abe23f3c781bd75353ab5fa.jpg" alt="Rule 4 Icon" />
                    <i>Be sure of your target and what is beyond it.</i>
                  </li>
                </ul>x
                <p><a href="https://www.firearms.or.ke/index.html">To Read on Requirements or Apply for a Gun License In Kenya.</a></p>
                <p><a href="https://www.stylemetactical.com/blog/rules-of-gun-safety-for-adults-kids">Learn more about firearm safety</a></p>
              </div>
      
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