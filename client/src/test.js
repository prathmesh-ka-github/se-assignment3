let PRODUCTS = [
    {
        id : 1,
        name : "nike shoe",
        price : 200
    },
    {
        id : 2,
        name : "adidas shoe",
        price : 180
    }
]

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length +1; i++) {
        cart[i] = 0
    }
    return cart
}

console.log(getDefaultCart())