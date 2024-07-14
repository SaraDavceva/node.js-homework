const fs = require("fs");

const getRecipe = async (req, res) => {
  try {
    let output = await parseTemplate("recipes_form");
    res.status(200).send(output);
  } catch (err) {
    res.stasus(500).send("Invalid Server Error!");
  }
};

const postRecipe = async (req, res) => {
  const { recipe, ingredientOne, ingredientTwo, ingredientThree } = req.body;

  let result = "";

  switch (recipe) {
    case "recipeOne":
      result = `Recipe 1: ${ingredientOne}, ${ingredientTwo} and ${ingredientThree}`;
      break;
    case "recipeTwo":
      result = `Recipe 2: ${ingredientOne}, ${ingredientTwo} and ${ingredientThree}`;
      break;
  }

  try {
    let output = await parseTemplate("recipes", {
      data: result,
    });
    res.status(200).send(output);
  } catch (err) {
    return res.status(500).send("Invalid Servis Error2");
  }
};

const parseTemplate = async (template, data) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) reject(err);

        if (data) {
          for (d in data) {
            content = content.replace(`{{${d}}}`, data[d]);
          }
        }

        return resolve(content);
      }
    );
  });
};

module.exports = {
  getRecipe,
  postRecipe,
};
