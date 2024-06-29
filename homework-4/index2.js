const http = require("http");
const url = require("url");

function conversion(req, res) {
  const url = req.url;
  let result;

  const [_, convert, num] = req.url.split("/");

  switch (convert) {
    case "milestokm":
      result = num * 1.6;
      res.end(`${result}`);
      break;
    case "celsiustofahrenheit":
      result = num * 1.8 + 32;
      res.end(`${result}`);
      break;
    case "lbstokg":
      result = num * 0.45359;
      res.end(`${result}`);
      break;
    case "fttometers":
      result = num * 0.3048;
      res.end(`${result}`);
      break;
    default:
      res.end("Hello");
  }
}

const server = http.createServer(conversion);
server.listen(10000);
