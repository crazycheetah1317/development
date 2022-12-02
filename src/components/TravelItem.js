import "./TravelItem.css";

function TravelItem(props) {

    const clickHandler = event => {
        switch (event.detail) {
          case 1: {
            console.log("single click")
            break
          }
          case 2: {
            console.log("double click")
            break
          }
          case 3: {
            console.log("triple click")
            break
          }
          default: {
            break
          }
        }
    }
    
    return (
        <div className="TravelItem" >
            <div>
                
                <div>
                    <h3>{props.item.name}</h3>
                    <h4>{props.item.package}</h4>
                    <div className="images">
                        <img src={props.item.image}></img>
                    </div>
                </div>

                <div className="item-bottom">
                    <div className="price-people">
                        <p>Price: ${props.item.price}</p>
                        <p>Number of People: {props.item.people}</p>
                    </div>

                    <div className="cart">
                        <button onClick={() => {props.addToCart(props.item)}}>+</button>

                        <button onClick={() => {props.removeFromCart(props.item)}}>-</button>
                    </div>
                    
                </div>

            </div>
        
        </div>
    )
}

export default TravelItem;