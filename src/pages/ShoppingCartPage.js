import React, {useContext} from 'react';
import CartItem from "../components/CartItem";
import mainContext from "../context/mainContext";

const ShoppingCartPage = () => {

    const {getAddedToCart} = useContext(mainContext)

    // let total += getAddedToCart[index].quantity * Number(getAddedToCart[index].price)

    return (
        <div>
            <div>
                {getAddedToCart.map((x, i) => <CartItem index={i} item={x} key={i}/>)}
            </div>
            <div className="d-flex space-btw">
                <div/>
                <h1>Total Price: {}</h1>
            </div>
        </div>
    );
};

export default ShoppingCartPage;