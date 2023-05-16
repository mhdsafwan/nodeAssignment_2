const express = require("express");
const students = require("./students");

const app = express();

//creates a express server in port number 3000 and it prints in console
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ****************************************POST REQUSET START******************************************************
//this will fetch the dummy data from json and displays
app.get("/api/students", (req, res) => {
  res.json(students);
});

//i have used thunder client vs-code extention to post a request and data is sent in body -> json and data will be rendering with existing...
app.use(express.json());
app.post("/api/students", (req, res) => {
  const user = {
    id: students.length + 1,
    name: req.body.name,
  };
  students.push(user);
  res.json(user);
});
// ****************************************POST REQUSET END******************************************************



// ****************************************GET REQUSET START******************************************************
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
// ****************************************GET REQUSET END********************************************************
