import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/wishlist.css'


function Wishlist() {
    const [products, setProducts] = useState([])
    const fetchAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/wishlist")
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

    // functions below

    async function removeFromWishlist(itemID) {
        console.log(itemID);
        const response = await axios.post("http://localhost:3000/removewishlist", {
            id: itemID,
        }).then(function (res) {
            console.log(res)
            // alert(res.data.err)
            setCount((count) => count + 1)
        }).catch(function (err) {
            console.log(err);
        })
    }
    async function transferToBag(itemID, itemName, itemImgUrl) {
        console.log(itemID);
        const response1 = await axios.post("http://localhost:3000/removewishlist", {
            id: itemID,
        }).then(function (res) {
            console.log(res)
            setCount((count) => count + 1)
        }).catch(function (err) {
            console.log(err);
        })

        const response2 = await axios.post("http://localhost:3000/cart", {
            id: itemID,
            name: itemName,
            imgurl: itemImgUrl
        }).then(function (res) {
            console.log(res)
        }).catch(function (err) {
            console.log(err);
        })
    }
    return (
        <div className="wishlist-container">
            <div className="wishlist-heading">Wishlist</div>
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
                                <button onClick={() => removeFromWishlist(product.id)}>Remove from Wishlist</button>
                                <button id="addtobag" onClick={() => transferToBag(product.id, product.name, product.imgurl)}>Move to Bag</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    ) 
}

export default Wishlist