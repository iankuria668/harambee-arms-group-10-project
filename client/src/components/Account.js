import { useState } from 'react';

function Account({ wallet, setWallet, items }) {
    const [amount, setAmount] = useState('');
    const [id, setId] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        img_url: '',
        description: '',
        category: '',
        price: 0
    });

    const handleMoneySubmit = (event) => {
        event.preventDefault();
        addMoney(amount);
        setAmount('');
    };

    const handleMoneyChange = (event) => {
        const amount = parseInt(event.target.value);
        setAmount(amount);
    };

    const addMoney = (amount) => {
        setWallet((wallet) => wallet + amount);
    };

    const handleItemChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleItemSubmit = (event) => {
        event.preventDefault();
        fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((newItem) => {
            console.log(newItem);
            resetForm();
        });
    };

    const handleIdChange = (event) => {
        const newId = event.target.value;
        setId(newId);
    };

    const deleteItem = () => {
        fetch(`/items/${id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => {
            console.log('Item deleted!');
            setId('');
        });
    };

    const handlePriceChange = (event) => {
        const newPrice = event.target.value;
        setNewPrice(newPrice);
    };

    const handleNewPrice = (event) => {
        event.preventDefault();
        fetch(`/items/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                price: newPrice,
            }),
        })
        .then((r) => r.json())
        .then((updatedItem) => {
            console.log(updatedItem);
            setNewPrice('');
        });
    };

    const resetForm = () => {
        setFormData({
            title: '',
            img_url: '',
            description: '',
            category: '',
            price: 0,
        });
    };

    return (
        <div className='accountContainer'>
            <div className='accountPieces'>
                <h3 id='wallet'>Wallet: {wallet} GP</h3>
                <form onSubmit={handleMoneySubmit}>
                    <input
                        onChange={handleMoneyChange}
                        type='number'
                        name='addmoney'
                        value={amount}
                        placeholder='Type amount to add'
                    />
                    <button type='submit' id='addmoney'>Add Money</button>
                </form>
            </div>
            <div className='accountPieces'>
                <h3>Add New Item - Admin Only:</h3>
                <form id='addnewitem' onSubmit={handleItemSubmit}>
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
                        placeholder='Enter New Item Description'
                    />
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
                    <button type='submit' id='newItem'>Add Item to Inventory</button>
                </form>
            </div>
            <div className='accountPieces'>
                <h3>Remove Item from Inventory - Admin Only:</h3>
                <div>
                    <label>Enter Item ID: </label>
                    <input
                        onChange={handleIdChange}
                        type='number'
                        name='delete'
                        value={id}
                    />
                    <button onClick={deleteItem}>DELETE ITEM</button>
                </div>
            </div>
            <div className='accountPieces'>
                <h3>Update Item Price - Admin Only:</h3>
                <form id='updateform' onSubmit={handleNewPrice}>
                    <label>Enter Item ID to Update: </label>
                    <input
                        onChange={handleIdChange}
                        type='number'
                        name='id'
                        value={id}
                    />
                    <br />
                    <label>Enter New Price: </label>
                    <input
                        onChange={handlePriceChange}
                        type='number'
                        name='newprice'
                        value={newPrice}
                        placeholder='Enter New Item Price'
                    />
                    <br />
                    <button type='submit' id='newPrice'>Update Price</button>
                </form>
            </div>
        </div>
    );
}

export default Account;
