import React, {useContext} from 'react';
import CartItem from "../components/CartItem";
import mainContext from "../context/mainContext";

const ShoppingCartPage = () => {

    const {getAddedToCart} = useContext(mainContext)

   function countPrice() {
        let price = 0
       getAddedToCart.map(x => price += x.quantity * x.price)
       return price
   }

    return (
        <div>
            <div>
                {getAddedToCart.map((x, i) => <CartItem index={i} item={x} key={i}/>)}
            </div>
            <div className="d-flex space-btw">
                <div/>
                <h1>Total Price: {countPrice()}</h1>
            </div>
        </div>
    );
};

export default ShoppingCartPage;