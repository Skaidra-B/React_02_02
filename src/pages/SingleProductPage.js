import React, {useContext} from 'react';
import ProductCard from "../components/ProductCard";
import mainContext from "../context/mainContext";

const SingleProductPage = () => {

    const {getSelected} = useContext(mainContext)

    return (
        <div className="d-flex j-center">
            <ProductCard item={getSelected}/>
        </div>
    );
};

export default SingleProductPage;