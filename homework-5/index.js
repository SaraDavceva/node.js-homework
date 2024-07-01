const http = require("http");
const url = require("url");

function userEmail(req, res, email) {
  const url = req.url;
  const emailPattern = /^(?=.*[0-9])[a-z0-9.@]+$/;

  if (emailPattern.test(email)) {
    res.end(`Your email: ${email}`);
  } else {
    res.end("Invalid email format");
  }
}

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  if (parseUrl.pathname === "/user") {
    userEmail(req, res, parseUrl.query.email);
  } else {
    res.end("Error");
  }
});

server.listen(10000);

