import React, {useContext} from 'react';
import mainContext from "../context/mainContext";


const CartItem = ({item, index}) => {

    const {getAddedToCart, setAddedToCart} = useContext(mainContext)

    function removeItem() {
        if(item.quantity === 1) {
            const result = getAddedToCart.filter((x, i) => i !== index)
            setAddedToCart(result)

        } else {
            getAddedToCart[index].quantity --
            setAddedToCart([...getAddedToCart])
        }
    }

    function addQuantity() {
        getAddedToCart[index].quantity ++
        setAddedToCart([...getAddedToCart])
    }

    return (
        <div>
            <div className="cart-item d-flex space-btw align-center">
                <img src={item.photo} alt=""/>
                <h2>{item.title}</h2>
                <h3>Price: {item.price}</h3>
                <h4>Quantity: {item.quantity}</h4>
                <button onClick={addQuantity}>Add</button>
                <button onClick={removeItem}>Remove</button>
                <p>Total: {Number(item.price) * item.quantity}</p>
            </div>

        </div>
    );
};

export default CartItem;

