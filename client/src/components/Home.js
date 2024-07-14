import React from "react";
import {useState, useEffect} from 'react';
import FeaturedList from './FeaturedList'

function Home({ items, addToCart, removeFromCart, addToWishlist }){
    



    return(
        <div>
            <br />
            <h2 className="intro" id='welcome'>Welcome to Harambee Arms!</h2>
            <p className="intro" id='greeting'> Here at Harambee Arms we sell firearms and firearms accessories. </p>
            <br />
            <h3 className="intro centered-heading" id='featureTitle'>Featured Items:</h3>
            <div id='featList'>
            <FeaturedList items={items} addToCart={addToCart} removeFromCart={removeFromCart} addToWishlist={addToWishlist}/>
            </div>
        </div>
    )
}

export default Home;