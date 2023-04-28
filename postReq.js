const express = require("express");
const students = require("./students");
const app = express();

//creates a express server in port number 3000 and it prints in console
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

app.get("/", (req, res) => {
  res.json({ message: "api is working" });
});

//this will fetch the data from json and displays
app.get("/api/students", (req, res) => {
  res.json(students);
});

//post request
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
