import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = () => {

    const {getAddedToCart} = useContext(mainContext)

    return (
        <div className="d-flex">
            <Link to="/allproducts"><h3 className="mr20">All products</h3></Link>
            <Link to="/"><h3 className="mr20">Create products</h3></Link>
            <Link to="/cart"><h3 className="mr20">Shopping Cart</h3></Link>
            <h3>{getAddedToCart.length}</h3>
        </div>
    );
};

export default Toolbar;