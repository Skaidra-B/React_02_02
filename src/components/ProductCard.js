import React, {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";

const ProductCard = ({item}) => {

    const nav = useNavigate()
    const {setSelected, getAddedToCart, setAddedToCart} = useContext(mainContext)

    function goToProduct() {
        nav("/product/"+ item.title)
        setSelected(item)
        console.log(item)
    }

    function addToCart() {
        setAddedToCart([...getAddedToCart, item])
    }

    return (
            <div className="card">
                <h2 onClick={goToProduct}>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.photo} alt=""/>
                <h2>Price: {item.price}</h2>
                <button onClick={addToCart}>Add to cart</button>
            </div>
    );
};

export default ProductCard;

