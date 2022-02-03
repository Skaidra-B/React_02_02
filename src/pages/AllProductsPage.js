import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import ProductCard from "../components/ProductCard";

const AllProductsPage = () => {

    const {getProduct} = useContext(mainContext)

    return (
        <div className="d-flex wrap">
            {getProduct.map((x ,i) => <ProductCard item={x} key={i}/>)}
        </div>
    );
};

export default AllProductsPage;