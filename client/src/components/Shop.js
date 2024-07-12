import {useState, useEffect } from 'react'
import Inventory from './Inventory'

function Shop({ items, addToCart, addToWishlist}){

    const [filterBy, setFilterBy] = useState("weapon")
    const [searchState, setSearchState] = useState("")

    const filteredItems = items.filter(
        (item) => item.category === filterBy
    );

    function handleFilterChange(e){
        setFilterBy(e.target.value)
      }

    function handleSearch(e) {
        setSearchState(e.target.value)
    }

    return(
        <div>
            <div className='filters'>
            <label>
            <strong>Filter by Category:</strong>
            <select onChange={handleFilterChange} value={filterBy}>
                <option value="weapon">Weapons</option>
                <option value="armor">Armor</option>
                <option value="tool">Tools</option>
                <option value="magic_item">Magic Items</option>
            </select>
            </label>
        <br />
            <div className='searchbar'>
            <strong>Search item by name: </strong>
            
            <input className="prompt" value={searchState}  onChange={handleSearch}/>
            </div>
            </div>
        <br />
            <h2 className="intro" id='inventory'>Inventory: </h2>
            <Inventory filteredItems={filteredItems} searchState={searchState} addToCart={addToCart} addToWishlist={addToWishlist}/>

        </div>
    )

}

export default Shop;