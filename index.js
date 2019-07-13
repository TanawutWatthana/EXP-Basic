const express = require("express");
const path = require("path");
const members = require("./members");
const logger = require("./middleware/logger");

const app = express();

//Init middleware
app.use(logger);

//basic return json api
app.get("/api/members", (req, res) => {
  res.json(members.getMembers());
});
app.get("/api/members/:id", (req, res) => {
  res.json(members.getMembers(parseInt(req.params.id)));
});

//get route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "public", "index.html"));
});

//set static folder
app.use(express.static(path.join(__dirname, "src", "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
