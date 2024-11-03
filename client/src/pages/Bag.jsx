import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/bag.css'

function Bag() {

    const [products, setProducts] = useState([])
    const fetchAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/cart")
            console.log(response.data)
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchAPI();
    }, [count])

    async function removeFromCart(itemID) {
        console.log(itemID);
        const response = await axios.post("http://localhost:3000/removecart", {
            id: itemID,
        }).then(function (res) {
            console.log(res)
            // alert(res.data.err)
            setCount((count) => count + 1)
        }).catch(function (err) {
            console.log(err);
        })
    }

    // useEffect(() => {
    //     console.log("count changed!");
    // }, [count]);

    return (
        <div className="bag-container">
            <div className="bag-heading">Shopping Bag</div>
            <div className="column">
                {
                    products.map((product) => (
                        // <Card data = { product } />
                        <div className="cartitems">
                            <div className="itemimg">
                                <img src={product.imgurl} alt={product.name} />
                            </div>
                            <div className="desc">
                                <div className="itemname"> {product.name}</div>
                                <button onClick={() => removeFromCart(product.id)}>Remove from Bag</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Bag