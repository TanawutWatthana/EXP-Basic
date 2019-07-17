const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => res.json(members));
router.get("/:id", (req, res) => {
  if (members.some(member => member.id === parseInt(req.params.id)))
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  else {
    res.status(400).json({
      msg: `members not found : no member with id of ${req.params.id}`
    });
  }
});

module.exports = router;
