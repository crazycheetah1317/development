import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem";
import Nav from "react-bootstrap/Nav";

travelData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function removeFromCart(item) {
    var index = cartItems.indexOf(item);
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);
  }

  function calculateTotal() {
    let total = 0;
    for(let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price
    }
    return total;
  }

  const [item, setItems] = useState([]) // item is an array; setItems is a function

  // const setOrder(value) {
  //   setTravelItems = [...travelItems].sort((a, b) => a.value - b.value);
  // }

  const setOrder = (event) => {
    const val = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setItems([...item].sort((a, b) => a.val - b.val));
      }
  }

  const [type, setType] = useState(item.package); // filtering for packae

  function selectFilterType() {
    selectFilterType = eventKey => {
      setType(eventKey);
    };  
  }

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if(type == "All") { 
      return true
    } 
    else if (type == item.type) {
      return true
    } 
    else {
      return false
    }
  }

  const handleFilter = (event) => {
    // setChecked(!checked);
    let copyList = [...item]
      
    if (event.target.checked) {
      copyList.add(event.target.type)
    } 
    else {
      copyList.delete(event.target.type)
    }

    item = copyList
  }


  return (
    <div className="App">

      <div className="App-div">
        <div className="Header-grid">
          Destinations
        </div>

        <div className="Main-grid">
          <div className="Side-grid">
            <div className="Filter-grid">

              <h3>Sort By</h3>
              <div className="Sort-radios">
                <input type="radio" value="price" name="sort" onChange={setOrder}/> Price
              </div>
              <div className="Sort-radios">
                <input type="radio" value="people" name="sort" onChange={setOrder}/> Number of Guests
              </div>
              
              <h3>Package Deals</h3>
              <div>
                <input type="checkbox" onChange={handleFilter}/> All Inclusive
              </div>
              <div>
                <input type="checkbox" onChange={handleFilter}/> Explorer Package
              </div>
              <div>
                <input type="checkbox" onChange={handleFilter}/> Money Back Rewards
              </div>
            
              <h3>Continent</h3>
              <div>
                <input type="checkbox" value = "Africa" onChange={handleFilter}/> Africa
              </div>
              <div>
                <input type="checkbox" value = "Asia" onChange={handleFilter}/> Asia
              </div>
              <div>
                <input type="checkbox" value = "Europe" onChange={handleFilter}/> Europe
              </div>
              <div>
                <input type="checkbox" value = "North America" onChange={handleFilter}/> North America
              </div>
              <div>
                <input type="checkbox" value = "South America" onChange={handleFilter}/> South America
              </div>

            </div>

            <div className="Total-grid">
              <h3>Wishlist</h3>
              {cartItems.map((item, index) => (<p>{item.name}</p>))}
              <h4>Total: ${calculateTotal()}</h4>
            </div>
          </div>

          <div className="Items-grid" >
              {travelData.map((item, index) => (
                  <TravelItem item={item} addToCart={addToCart} removeFromCart={removeFromCart} 
                  setCartItems={setCartItems} cartItems={cartItems}/>
                ))}   
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
