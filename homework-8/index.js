const express = require("express");

const { getRecipe, postRecipe } = require("./handlers/recipes");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/recipes", getRecipe);
app.post("/recipes", postRecipe);

app.listen(3000, () => console.log("Server running on port 3000!"));
