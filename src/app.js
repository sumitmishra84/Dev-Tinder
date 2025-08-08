const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user");
    // res.send("Response");
    // next();
  },

  (req, res) => {
    console.log("Handling the rout user ");
    res.send("2nd response!!");
    // next();
  },
  (req, res) => {
    console.log("Handling the rout user ");
    res.send("3nd response!!");
    next();
  },
  (req, res) => {
    console.log("Handling the rout user");
    res.send("4nd response!!");
  },
  (req, res) => {
    console.log("Handling the rout user");
    res.send("5nd response!!");
  }
);

app.listen(8080, () => {
  console.log("Bol Sankar Bhagwan ki Jay");
});
