const http = require("http");
const url = require("url");

function handler(req, res) {
  const url = req.url;

  const [_, operacija, numOne, numTwo] = req.url.split("/");

  let result;
  switch (operacija) {
    case "sobiranje":
      result = Number(numOne) + Number(numTwo);
      res.end(`${result}`);
      break;
    case "odzemanje":
      result = Number(numOne) - Number(numTwo);
      res.end(`${result}`);
      break;
    case "mnozenje":
      result = Number(numOne) * Number(numTwo);
      res.end(`${result}`);
      break;
    case "delenje":
      result = Number(numOne) / Number(numTwo);
      res.end(`${result}`);
      break;
    default:
      res.end("Welcome to calculator app");
  }
}

const newServer = http.createServer(handler);
newServer.listen(10000);
