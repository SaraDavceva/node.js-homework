// const http = require("http");
// const url = require("url");

const express = require("express");

const { userEmail } = require("./handler");

const app = express();

app.get("/user", userEmail);

app.use((req, res) => {
  res.status(404).send("Error")
})

app.listen(3000);
