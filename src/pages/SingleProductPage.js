import React, {useContext} from 'react';
import ProductCard from "../components/ProductCard";
import mainContext from "../context/mainContext";

const SingleProductPage = () => {

    // cia uztektu naudoti props o ne context, siuncama per viena lygi.
    // daryta kitaip nei as dariau, import useParams from react-router-dom;
    // const {url} = useParams()
    // const product = getProduct.find(x => x.url === url) - sukurtu produktu array surask toki produkta, kurio url atitinka ta is params.
    // atvaizdavimui sukure nauja komponenta singleProductView
    // <singleProductView product={product}/>, siame komponente laukeliai nukopijuoti tokie patys, kaip ProductCard return.


    const {getSelected} = useContext(mainContext)

    return (
        <div className="d-flex j-center">
            <ProductCard item={getSelected}/>
        </div>
    );
};

export default SingleProductPage;