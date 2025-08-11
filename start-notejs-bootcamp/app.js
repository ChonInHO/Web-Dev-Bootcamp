const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (request, response) {
  response.send("<h1>" + new Date().toISOString() + "</h1>");
});
// localhost:3000/currenttime

app.get("/", function (request, response) {
  response.send(
    "<form action='store-user' method='POST'><lable>Your Name: </lable><input type='text' name='username'><button>Submit</button></form>"
  );
});
// localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";
  console.log(responseData);

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
    console.log(responseData);
  }

  responseData += "</ul>";
  console.log(responseData);

  res.send(responseData);
});

app.listen(3000);
