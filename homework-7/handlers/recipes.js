const { read, write } = require("../read-write");

const createRecipes = async (req, res) => {
  const recipes = await read();
  recipes.push(req.body);
  await write(recipes);
  res.status(201).send("Recipe created!");
};

const updateRecipes = async (req, res) => {
  recipeIndex = req.params.index
  recipeData = req.body
  let recipes = await read();
  recipes = recipes.map((recipe, index) => {
    if (index === Number(recipeIndex)) {
      return {
        ...recipe,
        ...recipeData,
      };
    } else {
      return recipe;
    }
  });

  await write(recipes);
  res.status(200).send("Recipe updated")
};

const getRecipes = async (req, res) => {
  try {
    const data = await read();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const deleteRecipes = async (req, res) => {
  const recipeIndex = req.params.index;

  let recipes = await read();

  recipes = recipes.filter((recipe, index) => index !== Number(recipeIndex));

  await write(recipes);

  res.status(200).send("Recipe deleted!");
};

module.exports = {
  getRecipes,
  createRecipes,
  deleteRecipes,
  updateRecipes,
};

