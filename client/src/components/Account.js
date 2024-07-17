import React, { useState } from 'react';

function Account({ user, wallet, setWallet, items }) {
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
        const amount = parseInt(event.target.value, 10); 
        setAmount(amount);
    };

    const addMoney = (amount) => {
        if (typeof setWallet === 'function') {  
            setWallet(wallet + amount);
            fetch('/update_wallet', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json',
                },
                body: JSON.stringify({ wallet: wallet + amount }),
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error('Error:', err));
        } else {
            console.error('setWallet is not a function');
        }
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
        })
        .catch(err => console.error('Error:', err));
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
        })
        .catch(err => console.error('Error:', err));
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
        })
        .catch(err => console.error('Error:', err));
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

    if (!user) return <div>Loading...</div>;

    return (
        <div className='accountContainer'>
            <div className='accountPieces'>
                <h1>Welcome, {user.name}</h1>
                <p>Wallet: ${wallet}</p>
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
            {user.admin && (
                <div>
                    <h2>Admin Features</h2>
                    <p>Here you can manage items, orders, and more.</p>
                    <div className='accountPieces'>
                        <h3>Add New Item:</h3>
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
                            <button type='submit' id='additem'>Add Item</button>
                        </form>
                    </div>
                    <div className='accountPieces'>
                        <h3>Update Item Price:</h3>
                        <form id='updateprice' onSubmit={handleNewPrice}>
                            <label>Item ID: </label>
                            <input
                                type='text'
                                value={id}
                                onChange={handleIdChange}
                                placeholder='Enter Item ID'
                            />
                            <br />
                            <label>New Price: </label>
                            <input
                                type='number'
                                value={newPrice}
                                onChange={handlePriceChange}
                                placeholder='Enter New Price'
                            />
                            <br />
                            <button type='submit'>Update Price</button>
                        </form>
                    </div>
                    <div className='accountPieces'>
                        <h3>Delete Item:</h3>
                        <input
                            type='text'
                            value={id}
                            onChange={handleIdChange}
                            placeholder='Enter Item ID to delete'
                        />
                        <button onClick={deleteItem}>Delete Item</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Account;
