import {useState, useEffect } from 'react';
import ItemCard from "./ItemCard.js";

function Inventory({ filteredItems, searchState, addToCart, addToWishlist}){
    const displayItems = filteredItems.filter(item => item.title.toLocaleLowerCase().includes(searchState)).map((item) => (
        <ItemCard key={item.id} item={item} addToCart={addToCart} addToWishlist={addToWishlist}/>
    ))

    return (
        <div className='featuredlist'>
            {displayItems}
        </div>
    )
}


export default Inventory;