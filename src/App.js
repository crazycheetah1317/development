import './App.css';
import { useState } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem";

travelData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [travelItems, setTravelItems] = useState(travelData) // item is an array; setItems is a function

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

  function setOrderPrice() {
    const copy = [...travelItems];
    const sortedData = copy.sort((a, b) => a.price - b.price);
    setTravelItems(sortedData);
  }

  function setOrderPeople() {
    const copy = [...travelItems];
    const sortedData = copy.sort((a, b) => a.people - b.people);
    setTravelItems(sortedData);
  }

  const [type, setType] = useState("All");

  function handleFilterPackage(event) { // value is All Inclusive, Africa, Asia, etc
    var new_type = event.target.value;
    console.log(new_type);

    setType(new_type);
    console.log(type);

    const filteredData = [...travelItems].filter(matchesFilterPackage);
    setTravelItems([...filteredData]);
    // console.log(filteredData);
  };
  

  const matchesFilterPackage = item => {
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

  function handleFilterCont(event){ // value is All Inclusive, Africa, Asia, etc
    var new_type = event.target.value
    setType(new_type);

    const filteredData = [...travelItems].filter(matchesFilterCont);
    setTravelItems([...filteredData]);
  };
  

  const matchesFilterCont = item => {
    // console.log(travelItem.type);
    // all items should be shown when no filter is selected

    if(type == "All") { 
      return true
    } 
    else if (type == item.continent) {
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
