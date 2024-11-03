import React, { useState } from "react";
import axios from 'axios';
import './styles/card.css';

function Card(props) {
    const {id, name, price, imgurl} = props.data
    // const [cartItems, setCartItems] = useState([])
    // console.log(cartItems)
    async function addToCart(itemID, itemName, itemImgURL){
        console.log(itemID, itemImgURL);
        const response = await axios.post("http://localhost:3000/cart", {
            id: itemID,
            name: itemName,
            imgurl : itemImgURL
        }).then(function(res){
            console.log(res)
            alert(res.data.err)
        }).catch(function(err) {
            console.log(err);
        })
    } 
    async function addToWishlist(itemID, itemName, itemImgURL){
        console.log(itemID, itemImgURL);
        const response = await axios.post("http://localhost:3000/wishlist", {
            id: itemID,
            name: itemName,
            imgurl : itemImgURL
        }).then(function(res){
            console.log(res)
            alert(res.data.err)
        }).catch(function(err) {
            console.log(err);
        })
    } 
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={imgurl} alt={imgurl} />
            </div>
            <div className="card-name">{name}</div>
            <div className="card-price">${price} /-</div>
            <div className="buttons">
                <button id="addcart" onClick={() => addToCart(id, name, imgurl)}>Add to Bag</button>
                <button id="wishlist" onClick={() => addToWishlist(id, name, imgurl)}>Add to wishlist</button>
            </div>
        </div>
    )
}

export default Card