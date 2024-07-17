const fs = require("fs");

const getForm = async (req, res) => {
  res.render("form");
};

const postForm = async (req, res) => {
  let newStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: parseFloat(req.body.prosek),
  };
  fs.readFile("studenti.json", (err, data) => {
    if (err) throw err;
    let studenti = JSON.parse(data);
    studenti.push(newStudent);

    fs.writeFile("studenti.json", JSON.stringify(studenti), (err) => {
      if (err) throw err;
      res.redirect("/studenti");
    });
  });
};
const getStudents = async (req, res) => {
  fs.readFile("studenti.json", (err, data) => {
    if (err) throw err;
    let studenti = JSON.parse(data);
    res.render("studenti", { studenti: studenti });
  });
};

const getBrishi = async (req, res) => {
  const index = parseInt(req.query.i);

  fs.readFile("studenti.json", (err, data) => {
    if (err) throw err;
    let studenti = JSON.parse(data);
    studenti.splice(index, 1);

    fs.writeFile("studenti.json", JSON.stringify(studenti), (err) => {
      if (err) throw err;
      res.redirect("/studenti");
    });
  });
};

module.exports = {
  getForm,
  postForm,
  getStudents,
  getBrishi,
};
