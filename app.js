
const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
const Route = require("./routes/routes") 

mongoose.set('strictQuery', true);
app.use(cors());
app.use(express.json());



mongoose.connect("mongodb+srv://Aliveni:aliveni@cluster0.ucb80am.mongodb.net/?retryWrites=true&w=majority",()=>
{
    console.log("mongoose is connected");
    
})


app.use("/", Route)
app.listen(5000,()=>{
    console.log("server is running");
})