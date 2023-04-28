const express = require("express");
const students = require("./students");

const app = express();

//creates a express server in port number 3000 and it prints in console
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Additional.. if path : `localhost:3000`  then it will redirect to given path
app.get("/", (req, res) => {
  res.statusCode = 302;
  res.setHeader("Location", "http://localhost:3000/api/001?name=safwan&age=23");
  res.end();
});

//this will take the request query from the url/path given, /api/001?name=hello&age=23
app.get("/api/:id", (req, res) => {
  const { id } = req.params;
  const { query } = req;

  const info = {
    id,
    query,
  };

  res.json(info);
});

// ****************************************************************************************************************
