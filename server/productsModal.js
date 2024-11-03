const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    id : Number,
    name : String,
    price : Number,
    imgurl : String
});

const productsModal = mongoose.model("products", productsSchema)
module.exports = productsModal