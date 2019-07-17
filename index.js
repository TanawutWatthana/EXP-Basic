const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

//Init middleware
app.use(logger);
//Init JSON Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//get route
//rout root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "public", "index.html"));
});
//set static folder
app.use(express.static(path.join(__dirname, "src", "public")));

//change member to api
app.use("/api/members", require("./routes/member"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
