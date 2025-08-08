const express = require("express");
const app = express();


//This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstname: "Sumit", lastname:"Mishra"});
});

app.post("/user",(req,res)=>{
    console.log(req.body);
    //saving data to db
    res.send("Data successfully saved to the databases!");
});

app.delete("/user",(req,res)=>{
    res.send("Data successfully saved to the databases!");
});



app.use("/hello", (req, res) => {
    res.send("Mahadev");
});

app.use("/jay", (req, res) => {
    res.send("ek bar bol de bhai, bol de na bhai");
});


// app.use("/", (req, res) => {
//     res.send("Sumit Mishra");
// });

app.listen(8080, () => {
    console.log("Bol Sankar Bhagwan ki Jay");
});
