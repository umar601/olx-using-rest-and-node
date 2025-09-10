const mongoose = require("mongoose");

const getConnection = require("../connection");

const url = "mongodb://127.0.0.1:27017/olx";

getConnection(url)
.then(()=>{
    
    console.log("Connection with database is setup successfully");
})
.catch((err)=>{

    console.log(err);
})

const listSchema = new mongoose.Schema(

   {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true, 
    },
    condition: {
      type: String,
    },
    images: {
      type: Array,
      required:true
    },
    location: {
      city: { type: String, required: true },
      address: { type: String },
    },
    seller: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String },
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
)


const list = mongoose.model("list",listSchema);

module.exports = list;