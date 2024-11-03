const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
    id : Number,
    name: String,
    imgurl : String
});

const wishlistModal = mongoose.model("wishlist", wishlistSchema)
module.exports = wishlistModal