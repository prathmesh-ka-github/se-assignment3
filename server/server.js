const express = require("express")
const cors = require("cors")
const corsOptions = {
    origin: ["http://localhost:5173"]
}


const app = express();
const port = 3000;
app.use(cors(corsOptions))

//! MONGODB CONNECTION
const mongoose = require("mongoose")
const { error } = require("console")
mongoose.connect("mongodb+srv://prathmesh:pratham02@dripanimecluster.jayx0yg.mongodb.net/ShoestackDB")
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/'));

const Cart = require("./cartModal")
const Wishlist = require("./wishlistModal")
const Products = require("./productsModal")

//! READING DATA
app.get('/cart', async (req,res) => {
    try {
        let data = await Cart.find()
        console.log(data)
        res.status(200).json(data);
    } catch (err) {
        console.error(err)
    }
})
app.get('/wishlist', async (req,res) => {
    try {
        let data = await Wishlist.find()
        console.log(data)
        res.status(200).json(data);
    } catch (err) {
        console.error(err)
    }
})
app.get('/products', async (req,res) => {
    try {
        let data = await Products.find()
        console.log(data)
        res.status(200).json(data);
    } catch (err) {
        console.error(err)
    }
})


//! POST APIS

app.post('/cart', async (req,res) => {
    try {
        console.log(req.body)
        const id = req.body.id;
        const name = req.body.name;
        const imgurl = req.body.imgurl;
        const data = {id: id, name: name, imgurl: imgurl}
        let result = await checkCart(data)
        // console.log(result)
        if(result) {
            console.log("item not found...adding item to Bag.")
            // console.log(data)
            addToCart(data)
            res.status(201)
            res.send({
                err : 'Item added to the Bag!',
                code : 400
            })
        }
        else {
            res.send({
                err : 'Item already in the Bag!',
                code : 400
            })
            console.log("ERR - item already in Bag")
        }
    } catch (err) {
        console.error(err);
    }
})

app.post('/removecart', async (req,res) => {
    try {
        console.log(req.body)
        const id = req.body.id;
        const data = {id: id}
        console.log("Removing item from Bag . . .")
        removeFromCart(data)
        res.status(201)
        res.send({
            err : 'Item removed from the Bag!',
            code : 400
        })
    } catch (err) {
        console.error(err);
    }
})
app.post('/removewishlist', async (req,res) => {
    try {
        console.log(req.body)
        const id = req.body.id;
        const data = {id: id}
        console.log("Removing item from Wishlist . . .")
        removeFromWishlist(data)
        res.status(201)
        res.send({
            err : 'Item removed from the Wishlist!',
            code : 400
        })
    } catch (err) {
        console.error(err);
    }
})


app.post('/wishlist', async (req,res) => {
    try {
        console.log(req.body)
        const id = req.body.id;
        const name = req.body.name;
        const imgurl = req.body.imgurl;
        const data = {id: id, name: name, imgurl: imgurl}
        let result = await checkWishlist(data)
        // console.log(result)
        if(result) {
            console.log("item not found...adding item to Wishlist.")
            // console.log(data)
            addToWishlist(data)
            res.status(201)
            res.send({
                err : 'Item added to the Wishlist!',
                code : 400
            })
        }
        else {
            res.send({
                err : 'Item already in the Wishlist!',
                code : 400
            })
            console.log("ERR - item already in Wishlist")
        }
    } catch (err) {
        console.error(err);
    }
})


//! TEST
app.get('/',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.send("Hi MOM!!")
})

//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})




//! FUNCTIONS
async function checkCart(item) {
    try {
        if (await Cart.findOne({id : item.id}) !== null) {
            return 0
        }
        else {
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}
async function addToCart(item) {
    try {
        await Cart.create(item)
        console.log("item added to bag successfully", item)      
    } catch (err) {
        console.error(err.message)
    }
}

async function removeFromCart(itemid) {
    try {
        await Cart.deleteOne({id: itemid.id})
        console.log("item deleted from bag successfully", itemid)      
    } catch (err) {
        console.error(err.message)
    }
}
// !------------WISHLIST--------------
async function checkWishlist(item) {
    try {
        if (await Wishlist.findOne({id : item.id}) !== null) {
            return 0
        }
        else {
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}
async function addToWishlist(item) {
    try {
        await Wishlist.create(item)
        console.log("item added to wishlist successfully", item)      
    } catch (err) {
        console.error(err.message)
    }
}
async function removeFromWishlist(itemid) {
    try {
        await Wishlist.deleteOne({id: itemid.id})
        console.log("item deleted from wishlist successfully", itemid)      
    } catch (err) {
        console.error(err.message)
    }
}