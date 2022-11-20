import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="App-div">
        <div className="Header-grid">

        </div>

        <div className="Main-grid">
          <div className="Side-grid">
            <div className="Filter-grid">
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

          <div className="Items-grid">
            <div className="Item"> 
              <p>Item 1</p>
            </div>
            <div className="Item">
              <p>Item 2</p>
            </div>
            <div className="Item">
              <p>Item 3</p>
            </div>
            <div className="Item">
              <p>Item 4</p>
            </div>
            <div className="Item">
              <p>Item 5</p>
            </div>
            <div className="Item">
              <p>Item 6</p>
            </div>
            <div className="Item">
              <p>Item 7</p>
            </div>
            <div className="Item">
              <p>Item 8</p>
            </div>
            <div className="Item">
              <p>Item 9</p>
            </div>
            <div className="Item">
              <p>Item 10</p>
            </div>
            <div className="Item">
              <p>Item 11</p>
            </div>
            <div className="Item">
              <p>Item 12</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
