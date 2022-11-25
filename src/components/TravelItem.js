import "./TravelItem.css";

function TravelItem(props) {
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

                    <div>
                        <button onClick={() => {props.addToCart(props.item)}}>Add to cart</button>
                    </div>
                    
                </div>

            </div>
        
        </div>
    )
}

export default TravelItem;