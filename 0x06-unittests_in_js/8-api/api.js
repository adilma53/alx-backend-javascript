const express = require("express");

const app = express();
const port = 7865;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to the payment system");
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
