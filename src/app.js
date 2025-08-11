const express = require("express");
const app = express();


const {adminAuth, userAuth}=require("./middlewares/auth");
const res = require("express/lib/response");

app.use("/admin", adminAuth);

app.post("user/login", (req,res)=>{
  res.send("User logged in successfully!");
})

app.get("/admin/userAuth", (req, res) => {
  res.send("User Data Send");
});

app.get("/admin/getAllData", (req, res) => {
  res.send(" All Data Send");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(8080, () => {
  console.log("Bol Sankar Bhagwan ki Jay");
});
