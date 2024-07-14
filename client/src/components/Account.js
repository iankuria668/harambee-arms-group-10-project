import {useState} from 'react'
import { NavLink } from "react-router-dom";

function Account({ wallet, setWallet, items }){

    const [ordersArray, setOrdersArray] = useState([]);
    const [amount, setAmount] = useState(0);
    const [id, setId] = useState();
    const [priceId, setPriceId] = useState()
    const [newPrice, setNewPrice] = useState(0)
    const [formData, setFormData] = useState({
        title: "",
        img_url: "",
        description: "",
        category: "",
        price: 0
    });

// functions to handle changes and submissions to the add money form
    function handleMoneySubmit(event) {
        event.preventDefault();
        addMoney(amount);
        setAmount(0);
    }

    function handleMoneyChange(event) {
        const amount = parseInt(event.target.value)
        setAmount(amount);
    }

    function addMoney(amount) {
        setWallet((wallet) => wallet + amount)
    }

    // functions to handle submitting a new item form
    function handleItemChange(event){
        const name = event.target.name;
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handlePriceChange(event){
        const changePrice = event.target.value
        setNewPrice(changePrice)
    }

    

    function handleItemSubmit(event) {
        event.preventDefault();
        // const data = event.target;

        // let formData = {
        //     title: data.title.value,
        //     img_url: data.img_url.value,
        //     description: data.description.value,
        //     category: data.category.value,
        //     price: data.price.value
        // }
        
        fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((newItem) => console.log(newItem));
    }

    function handleIdChange(event) {
        const newId = event.target.value
        setId(newId);
    }

    function handlePriceIdChange(event) {
        const newPriceId = event.target.value
        setPriceId(newPriceId);
    }

    function deleteItem() {
        // const itemToDelete = items.map((item) => {
        //     if (item.id === id){
        //         return item
        //     }
        // })
        fetch(`/items/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => console.log("deleted!"));
    }

    function handleNewPrice(){
        fetch(`/items/${priceId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                price: newPrice
            }),
        })
        .then((r) => r.json())
        .then((updatedItem) => console.log(updatedItem))
    }

    return (
        <div className='accountContainer'>
            <div className='accountPieces'>
                <h3 id='wallet'>Wallet: {wallet} GP</h3>
                <form onSubmit={handleMoneySubmit}>
                    <input onChange={handleMoneyChange}
                        type='number'
                        name='addmoney'
                        value={amount}
                        placeholder='Type amount to add'
                    />
                    <button type='submit' id="addmoney">Add Money</button>
                </form>
            </div>
            <div className='accountPieces'>
                <h3>Add New Item - Admin Only:</h3>
                <form id="addnewitem" onSubmit={handleItemSubmit}>
                    <label>Title: </label>
                    <input 
                    type='text'
                    name='title'
                    onChange={handleItemChange}
                    value={formData.title}
                    placeholder='Enter New Item Title'
                    />
                <br />
                    <label>Image Url: </label>
                    <input
                    type='text'
                    name='img_url'
                    onChange={handleItemChange}
                    value={formData.img_url}
                    placeholder='Enter New Item Image URL'
                    />
                <br />
                    <label>Description: </label>
                    <input 
                    type='text'
                    name='description'
                    onChange={handleItemChange}
                    value={formData.description}
                    placeholder='Enter New Item Description'/>
                <br />
                    <label>Category: </label>
                    <select name='category' onChange={handleItemChange} value={formData.category}>
                        <option value=''> </option>
                        <option value='firearm'>Firearm</option>
                        <option value='accessory'>Accessory</option>
                        <option value='ammunition'>Ammunition</option>
                    </select>
                <br />
                    <label>Price: </label>
                    <input 
                    type='number'
                    name='price'
                    onChange={handleItemChange}
                    value={formData.price}
                    placeholder='Enter New Item Price'
                    />
                <br />
                    <button type='submit' id="newItem">Add Item to Inventory</button>
                </form>
            </div>
            <div className='accountPieces'>
            <h3>Remove Item from Inventory - Admin Only:</h3>
                <div>
                    <label>Enter Item ID: </label>
                    <input onChange={handleIdChange}
                    type="number"
                    name="delete"
                    value={id}
                    />
                    <button onClick={deleteItem}>DELETE ITEM</button>
                </div>
            </div>
            <div className='accountPieces'>
            <h3>Update Item Price - Admin Only:</h3>
                <form id='updateform'  onSubmit={handleNewPrice}>
                    <label>Enter Item ID to Update: </label>
                        <input onChange={handlePriceIdChange}
                        type="number"
                        name="id"
                        value={id}
                        />
                <br />
                    <label>Enter New Price: </label>
                    <input onChange={handlePriceChange}
                    type='number'
                    name='newprice'
                    value={newPrice}
                    placeholder='Enter New Item Price'
                    />
                <br />
                    <button type='submit' id="newPrice">Update Price</button>
                </form>
            </div>
            
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
   
    )
}

export default Account;