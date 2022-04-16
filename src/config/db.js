
const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://dhruv:dhruv_1112@cluster0.1qaar.mongodb.net/parkingLot?retryWrites=true&w=majority")
 }
 

 module.exports=connect;