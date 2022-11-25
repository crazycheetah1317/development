import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem" 

travelData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  return (
    <div className="App">

      <div className="App-div">
        <div className="Header-grid">
          Destinations
        </div>

        <div className="Main-grid">
          <div className="Side-grid">
            <div className="Filter-grid">
              hello
              {/* Sort By */}
              <fieldset className="Select">

              </fieldset>

              {/* Package Deals */}
              <div> 
                <fieldset className="Select">

                </fieldset>
              </div>

              {/* Continent */}
              <div>
                <fieldset className="Select">
                  
                </fieldset>
              </div>
            </div>

            <div className="Total-grid">
              <p>Wishlist</p>
            </div>
          </div>

          <div className="Items-grid" >
              {travelData.map((item, index) => (
                  <TravelItem item={item}/>
                ))}
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
