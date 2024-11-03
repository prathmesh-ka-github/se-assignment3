const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    id : Number,
    name: String,
    imgurl : String
});

const cartModal = mongoose.model("shoppingcarts", cartSchema)
module.exports = cartModal