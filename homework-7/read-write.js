const fs = require("fs");

const read = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("recipes.json", "utf8", (err, data) => {
      if (err) return reject(err);
        data = JSON.parse(data);
      return resolve(data);
    });
  });
};

const write = async (data) => {
  return new Promise((resolve, reject) => {
    data = JSON.stringify(data);
    fs.writeFile("recipes.json", data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

module.exports = {
  read,
  write,
}


