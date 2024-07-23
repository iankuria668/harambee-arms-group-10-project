import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { Button } from 'semantic-ui-react';
import './Cart.css';

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
            <div>
                <div className='featuredlist'>{cart}</div>
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
            
            <div className="footer-column safety-reminder">
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
                </ul>
                <p><a href="https://www.firearms.or.ke/index.html">To Read on Requirements or Apply for a Gun License In Kenya.</a></p>
                <p><a href="https://www.stylemetactical.com/blog/rules-of-gun-safety-for-adults-kids">Learn more about firearm safety</a></p>
              </div>
        </div>
    )
}

export default Cart;
