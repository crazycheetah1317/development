import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem";

travelData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App(props) {
  const [travelItems, setTravelItems] = useState(travelData) // item is an array; setItems is a function

  const [cartItems, setCartItems] = useState([])

  // travelData.forEach((item) => {
  //   setTravelItems([...travelItems], item);
  // });

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

  function setOrderPrice() {
    const sortedData = travelItems.sort((a, b) => a.price - b.price);
    setTravelItems([...sortedData]);
    // console.log(sortedData);
    // console.log(travelItems);

    // setTravelItems(prevState =>
    //   [...travelItems].sort((a, b) => a.price - b.price)
    // );
    // console.log(travelItems);
  }

  function setOrderPeople() {
    const sortedData = travelItems.sort((a, b) => a.people - b.people);
    setTravelItems([...sortedData]);
    // console.log(travelItems);
  }

  // const [type, setType] = useState(item.package); // filtering for packae

  // function selectFilterType() {
  //   selectFilterType = eventKey => {
  //     setType(eventKey);
  //   };  
  // }

  const [type, setType] = useState("Tours and Activities Bundle");

  const handleFilter = event => { // value is All Inclusive, Africa, Asia, etc
    // console.log(event.target.value);
    setType(event.target.value);
    // console.log(type);

    const filteredData = [...travelItems].filter(matchesFilterType);
    setTravelItems([...filteredData]);
    console.log(filteredData);
  };
  

  const matchesFilterType = item => {
    // console.log(travelItem.type);
    // all items should be shown when no filter is selected

    if(type == "All") { 
      return true
    } 
    else if (type == item.package) {
      return true
    } 
    else {
      return false
    }
  }

  // const handleFilter = (event) => {
  //   // setChecked(!checked);
  //   // let copyList = [...travelItems]
      
  //   if (event.target.checked) {
  //     travelItems.filter(item => 
  //       if(event.value == item.value) {

  //       });
  //   } 
  //   // else {
  //   //   copyList.delete(event.target.type)
  //   // }

  //   setTravelItems(travelItems);
  //   console.log(travelItems);
  // }


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
              <label className="Labels">
                <div>
                  <input type="radio" value="price" name="sort" onChange={setOrderPrice}/> Price
                </div>
                <div>
                  <input type="radio" value="people" name="sort" onChange={setOrderPeople}/> Number of Guests
                </div>
              </label>
              
              
              <h3>Package Deals</h3>
              <label className="Labels">
                <div>
                  <input type="checkbox" filter="package" value="All-Inclusive" onChange={handleFilter}/> All-Inclusive
                </div>
                <div>
                  <input type="checkbox" filter="package" value="Tours and Activities Bundle" onChange={handleFilter}/> Tours and Activities Bundle
                </div>
                <div>
                  <input type="checkbox" filter="package" value="Timeshare Promotion" onChange={handleFilter}/> Timeshare Promotion
                </div>
              
                <h3>Continent</h3>
                <div>
                  <input type="checkbox" filter="continent" value="Africa" onChange={handleFilter}/> Africa
                </div>
                <div>
                  <input type="checkbox" filter="continent" value="Asia" onChange={handleFilter}/> Asia
                </div>
                <div>
                  <input type="checkbox" filter="continent" value="Europe" onChange={handleFilter}/> Europe
                </div>
                <div>
                  <input type="checkbox" filter="continent" value="North America" onChange={handleFilter}/> North America
                </div>
                <div>
                  <input type="checkbox" filter="continent" value="South America" onChange={handleFilter}/> South America
                </div>
              </label>

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
