
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title :{
        type : String,
        require : true
    } ,
    description : String,
    image :{
        type : String,
        default : "https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180",
        set : (v) => v === "" ? "https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180" : v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;