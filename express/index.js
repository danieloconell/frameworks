const express = require("express");
const app = express();
const port = 3000;

app.get("/greet/:name", (req, res) => {
  res.status(200).send(`Hello ${req.params.name}`)
});

app.listen(port)
