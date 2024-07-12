import ItemCard from "./ItemCard.js";

function Wishlist({inWishlist, removeFromWishlist, addToCart}){
    const wishlist = inWishlist.map((item) => (
        <ItemCard key={item.id} item={item} inWishlist={inWishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart}/>
    ))

    return (
        <div className="wishlist">
            <h2 className="mycart">My Wishlist:</h2>
            {wishlist.length > 0 ?
            <div className='featuredlist'>{wishlist}</div>
            :
            <div>
                <div className='featuredlist'><strong>No items in wishlist</strong></div>
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
            </div>
            }
        </div>
    )
}

export default Wishlist;