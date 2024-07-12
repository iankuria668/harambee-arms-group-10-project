import React, { useState } from "react";
import ItemCard from "./ItemCard.js"

function FeaturedList({items, addToCart, removeFromCart, addToWishlist}){

    const shuffled = items.sort(() => 0.5 - Math.random());
    let featuredItems = shuffled.slice(0,8);
    
    
    return (
        <div className="featuredlist">
            {featuredItems ?
            featuredItems.map(item => {
                return <ItemCard
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                addToWishlist={addToWishlist}
                />
            })
            : <h1>Loading...</h1>
        }
        </div>
    )

}

export default FeaturedList;