import './App.css';
import { useState, useEffect } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem";

travelData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [travelItems, setTravelItems] = useState(travelData) // item is an array; setItems is a function

  // Cart
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

  // Sorting 

  const [sortedData, setSortedData] = useState([...travelItems]);

  function setOrderPrice() {
    // const copy = [...travelItems];
    // const sortedData = copy.sort((a, b) => a.price - b.price);
    sortedData.sort((a, b) => a.price - b.price);
    setSortedData([...sortedData]);
    setTravelItems(sortedData);
    // console.log(travelItems);
  }

  function setOrderPeople() {
    // const copy = [...travelItems];
    // const sortedData = copy.sort((a, b) => a.people - b.people);
    sortedData.sort((a, b) => a.people - b.people)
    setSortedData([...sortedData]);
    setTravelItems(sortedData);
    // console.log(sortedData);
  }

  // Filtering
  const [type, setType] = useState("All");
  const [filteredData, setFilteredData] = useState(sortedData);

  function handleFilterPackage(event) { // value is All Inclusive, Africa, Asia, etc
    var new_type = event.target.value;

    setType(new_type, matchesFilterPackage);

    setTravelItems(filteredData.filter((item) => matchesFilterPackage(item, new_type)));
    // setFilteredData(filteredData.filter((item) => matchesFilterPackage(item, new_type)));
    console.log(filteredData);
    setSortedData(filteredData.filter((item) => matchesFilterPackage(item, new_type)));

  };
  

  const matchesFilterPackage = (item, updatedType) => {
    // all items should be shown when no filter is selected
    if(updatedType == "All") { 
      return true
    } 
    else if (updatedType == item.package) {
      return true
    } 
    else {
      return false
    }
  }

  function handleFilterCont(event){ // value is All Inclusive, Africa, Asia, etc
    var new_type = event.target.value
    setType(new_type, matchesFilterCont);

    console.log(filteredData);
    setTravelItems([...filteredData].filter((item) => matchesFilterCont(item, new_type)));
    console.log(filteredData);
    // setFilteredData([...filteredData].filter((item) => matchesFilterCont(item, new_type)));
    setSortedData([...filteredData].filter((item) => matchesFilterCont(item, new_type)));
  };
  
  const matchesFilterCont = (item, updatedType) => {
    // all items should be shown when no filter is selected

    if(updatedType == "All") { 
      return true
    } 
    else if (updatedType == item.continent) {
      return true
    } 
    else {
      return false
    }
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

              <label className="Labels">
                <h3>Sort By</h3>
                <div>
                  <input type="radio" value="price" name="sort" onChange={setOrderPrice}/> Price
                </div>
                <div>
                  <input type="radio" value="people" name="sort" onChange={setOrderPeople}/> Number of Guests
                </div>
              </label>
            
              <label className="Labels">
                <h3>Package Deals</h3>
                <div>
                  <input type="radio" value="All-Inclusive" name="filter" onChange={handleFilterPackage}/> All-Inclusive
                </div>
                <div>
                  <input type="radio" value="Tours and Activities Bundle" name="filter" onChange={handleFilterPackage}/> Tours and Activities Bundle
                </div>
                <div>
                  <input type="radio" value="Timeshare Promotion" name="filter"  onChange={handleFilterPackage}/> Timeshare Promotion
                </div>
              
                <h3>Continent</h3>
                <div>
                  <input type="radio" value="Africa" name="filter2" onChange={handleFilterCont}/> Africa
                </div>
                <div>
                  <input type="radio" value="Asia" name="filter2" onChange={handleFilterCont}/> Asia
                </div>
                <div>
                  <input type="radio" value="Europe" name="filter2" onChange={handleFilterCont}/> Europe
                </div>
                <div>
                  <input type="radio" value="North America" name="filter2" onChange={handleFilterCont}/> North America
                </div>
                <div>
                  <input type="radio" value="South America" name="filter2" onChange={handleFilterCont}/> South America
                </div>
              </label>

              <button onClick={() => window.location.reload(false)}>Reset</button>

            </div>

            <div className="Total-grid">
              <h3>Wishlist</h3>
              {cartItems.map((item, index) => (<p>{item.name}</p>))}
              <h4>Total: ${calculateTotal()}</h4>
            </div>
          </div>

          <div className="Items-grid" >
              {travelItems.map((item, index) => (
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
