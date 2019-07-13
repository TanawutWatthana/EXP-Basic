const express = require("express");
const path = require("path");

const app = express();

//basic return json api
const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    status: "active"
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob@gmail.com",
    status: "inactive"
  },
  {
    id: 3,
    name: "Shannon Jackson",
    email: "shannon@gmail.com",
    status: "active"
  }
];
app.get("/api/members", (req, res) => {
  res.json(members);
});

//get route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "public", "index.html"));
});

//set static folder
app.use(express.static(path.join(__dirname, "src", "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
