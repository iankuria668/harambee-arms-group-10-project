import {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

function ItemCard({ item, addToCart, inCart, inWishlist, removeFromCart, addToWishlist, removeFromWishlist }){

    function handleAddToCart(e){
        addToCart(item)
        }

    function handleRemove(){
        removeFromCart(item)
    }

    function handleAddToWishlist(){
        addToWishlist(item)
    }

    function handleRemoveFromWishlist(){
        removeFromWishlist(item)
    }

    return(
    
        <div style={{ marginLeft: '3%', paddingBottom: '2%', marginRight: '3%'}}>
        
        <Card style={{ height: '380px'}}>
            <div style={{ height: '60%', overflow: 'hidden' }}>
                <Image
                    src={item.img_url}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                 />
            </div>
        <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta>
                <span>Price: ${item.price}</span>
            </Card.Meta>
            <Card.Description>
                {item.description}
            </Card.Description>
        </Card.Content>

            {!inCart ?
            (<Button onClick={handleAddToCart} primary>
                <Button.Content>Add to Cart</Button.Content>
            </Button>)
            : (
            <Button onClick={handleRemove} primary>
                <Button.Content>Remove from Cart</Button.Content>
            </Button>)
            }
            {!inWishlist ?
            <Button onClick={handleAddToWishlist} secondary>
                <Button.Content>Add to Wishlist</Button.Content>
            </Button>
            : (
                <Button onClick={handleRemoveFromWishlist} secondary>
                <Button.Content>Remove from Wishlist</Button.Content>
            </Button>)
            }
        </Card>
        
        </div>
        
    )
}

export default ItemCard;

