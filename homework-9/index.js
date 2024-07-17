const express = require("express");
const {
  getForm,
  getStudents,
  postForm,
  getBrishi,
} = require("./handler/formular");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/studenti", getStudents);
app.get("/brishi", getBrishi);

app.listen(3000, () => console.log("Serverot raboti na porta 3000!"));
