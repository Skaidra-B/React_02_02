import React from 'react';
import {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {

    const {getProduct, setProduct} = useContext(mainContext)
    const nav = useNavigate()

    const titleRef = useRef()
    const descriptionRef = useRef()
    const photoRef = useRef()
    const priceRef = useRef()

    function createProduct() {

        if(titleRef.current.value.length > 0 && descriptionRef.current.value.length > 0 && photoRef.current.value.length > 0 && priceRef.current.value.length >0) {
            const product = {
                title: titleRef.current.value,
                url: titleRef.current.value.replace(/ /g, "-"),
                description: descriptionRef.current.value,
                photo: photoRef.current.value,
                price: priceRef.current.value,
                quantity: 1
            }
            setProduct([...getProduct, product])
            nav('/allproducts')
        }
    }


    return (
        <div className="d-flex column form">
            <input type="text" ref={titleRef} placeholder="title"/>
            <input type="text" ref={descriptionRef} placeholder="description"/>
            <input type="text" ref={photoRef} placeholder="photo"/>
            <input type="text" ref={priceRef} placeholder="price"/>
            <button onClick={createProduct}>Create Product</button>
        </div>
    );
};

export default CreateProduct;