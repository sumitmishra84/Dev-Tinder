const express= require("express");

const app=express();

app.use("/mahakal",(req,res)=>{
    res.send("Mahadev");
});

app.use("/jay",(req,res)=>{
    res.send("ek bar bo de bhai bol de na bhai ");
});


app.listen(3000, ()=>{
    console.log("bol sankar bhagawan ki jay");
    
});