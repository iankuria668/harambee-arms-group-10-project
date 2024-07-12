import React from "react";
import {useState, useEffect} from 'react';
import FeaturedList from './FeaturedList'

function Home({ items, addToCart, removeFromCart, addToWishlist }){
    



    return(
        <div>
            <br />
            <h2 className="intro" id='welcome' style={{fontSize: "50px"}}>Welcome to the Ye Olde Dragonmart!</h2>
            <p className="intro" id='greeting'> Shop weapons, armor, tools, and magic items til your pockets run dry. You'll never find a better deal in all of Brittania!</p>
            <br />
            <h3 className="intro" id='featureTitle'>Featured Items:</h3>
            <div id='featList'>
            <FeaturedList items={items} addToCart={addToCart} removeFromCart={removeFromCart} addToWishlist={addToWishlist}/>
            </div>
        </div>
    )
}

export default Home;