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
    sortedData.sort((a, b) => a.price - b.price);
    setSortedData([...sortedData]);
    setTravelItems(sortedData);
  }

  function setOrderPeople() {
    sortedData.sort((a, b) => a.people - b.people)
    setSortedData([...sortedData]);
    setTravelItems(sortedData);
  }

  // Filtering
  const [packageType, setPackageType] = useState("All");
  const [contType, setContType] = useState("All");

  const [filteredData, setFilteredData] = useState(sortedData);
  const [filteredData2, setFilteredData2] = useState(sortedData);

  function handleFilter(event) {
    var filter = event.target.name;
    var data = [];
    
    if(filter == "filter") { // package
      var new_type = event.target.value;
      setPackageType(new_type, matchesFilterPackage);

      data = filteredData2.filter((item) => matchesFilterPackage(item, new_type));
      setFilteredData(filteredData2.filter((item) => matchesFilterPackage(item, new_type)));
      // console.log("Package Filter:");
      // console.log(filteredData);
      
      setSortedData(filteredData2.filter((item) => matchesFilterPackage(item, new_type)));
    }
    else if(filter == "filter2") { // continent
      var new_type = event.target.value
      setContType(new_type, matchesFilterCont);

      data = filteredData.filter((item) => matchesFilterCont(item, new_type));
      setFilteredData2(filteredData.filter((item) => matchesFilterCont(item, new_type)));
      // console.log("Continent Filter:");
      // console.log(filteredData2);
      setSortedData(filteredData.filter((item) => matchesFilterCont(item, new_type)));
    }
    
    setTravelItems(data);
  }
  
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
  
  const matchesFilterCont = (item, updatedType2) => {
    // all items should be shown when no filter is selected
    if(updatedType2 == "All") { 
      return true
    } 
    else if (updatedType2 == item.continent) {
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
                  <input type="radio" value="All-Inclusive" name="filter" onChange={handleFilter}/> All-Inclusive
                </div>
                <div>
                  <input type="radio" value="Tours and Activities Bundle" name="filter" onChange={handleFilter}/> Tours and Activities Bundle
                </div>
                <div>
                  <input type="radio" value="Timeshare Promotion" name="filter"  onChange={handleFilter}/> Timeshare Promotion
                </div>
              
                <h3>Continent</h3>
                <div>
                  <input type="radio" value="Africa" name="filter2" onChange={handleFilter}/> Africa
                </div>
                <div>
                  <input type="radio" value="Asia" name="filter2" onChange={handleFilter}/> Asia
                </div>
                <div>
                  <input type="radio" value="Europe" name="filter2" onChange={handleFilter}/> Europe
                </div>
                <div>
                  <input type="radio" value="North America" name="filter2" onChange={handleFilter}/> North America
                </div>
                <div>
                  <input type="radio" value="South America" name="filter2" onChange={handleFilter}/> South America
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