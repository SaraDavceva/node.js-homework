const express = require("express");

const {
  getRecipes,
  createRecipes,
  deleteRecipes,
  updateRecipes,
} = require("./handlers/recipes");

const app = express();

app.use(express.json());

app.get("/recipes", getRecipes);
app.post("/recipes", createRecipes);
app.delete("/recipes/:index", deleteRecipes);
app.put("/recipes/:index", updateRecipes)

app.listen(3000, () => console.log("Server running at port 3000!"));

