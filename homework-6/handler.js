function userEmail(req, res) {
  const email = req.query.email;
  const emailPattern = /^(?=.*[0-9])[a-z0-9.@]+$/;

  if (emailPattern.test(email)) {
    res.send(`Your email: ${email}`);
  } else {
    res.send("Invalid email format");
  }
}

module.exports = {
  userEmail,
};
