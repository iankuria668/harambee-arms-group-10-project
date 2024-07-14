import {useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { Button } from 'semantic-ui-react';

function Cart({ inCart, setInCart, removeFromCart, wallet, setWallet }){


    const cart = inCart.map((item) => (
        <ItemCard key={item.id} item={item} inCart={inCart} setInCart={setInCart} removeFromCart={removeFromCart}/>   
    ))

    const sumTotal = inCart.reduce((a, item) =>  a = a + item.price, 0)

    function createOrder(){
        // subtract from wallet
        if (wallet >= sumTotal) {
        setWallet(wallet - sumTotal)
        alert('You will receive your package in 7-10 business days. Thanks for shopping with Harambee Arms!')
        // reset cart to empty
        setInCart([])}

        else alert('You don\'t have enough. Please add more money to wallet')
    }
    
    return(
        <div className='cartback'>
            <h2 className='mycart'>My Cart:</h2>
            {cart.length > 0 ?
            <div><div className='featuredlist'>{cart}</div>
            <p></p>
            <div className='checkout'>
            <div className='total'><strong>Total: {sumTotal} GP</strong></div>
            <p></p>
            <Button color='red'  onClick={createOrder}>Checkout</Button>
            </div>
            </div>
            : 
            <div>
                <div className='featuredlist'><strong>No items in cart</strong></div>
                <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
            </div>}
            
            
        </div>
    )
}

export default Cart;

