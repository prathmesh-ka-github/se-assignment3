import React, { useEffect, useState } from "react";
import Card from '../Card';
import axios from 'axios';

import '../styles/collections.css'
import '../styles/card.css'
// import PRODUCTS from "../data/products.json";

function Collections() {
    const [products, setProducts] = useState([])
    const fetchAPI = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products")
            // console.log(response.data)
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchAPI();
    }, [])

    return (
        <div className="collections-container">
            <div className="collections-heading">Browse our collections.</div>
            <div className="row">
                {
                    products.map((product) => (
                        <Card data = { product } />
                    ))
                }
            </div>
        </div>
    )
}

export default Collections;