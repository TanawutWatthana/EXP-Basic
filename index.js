const express = require("express");
const path = require("path");

const app = express();

//get route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "public", "index.html"));
});

//set static folder
app.use(express.static(path.join(__dirname, "src", "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
