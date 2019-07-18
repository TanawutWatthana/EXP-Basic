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
router.post("/", (req, res) => {
  if (req.body.name && req.body.email) {
    const newMember = {
      name: req.body.name,
      email: req.body.email,
      status: "active"
    };
    res.json(newMember);
  } else {
    res.status(400).json({
      msg: "information is not complete"
    });
  }
});
router.put("/:id", (req, res) => {
  const updMember = req.body;
  if (members.some(member => member.id === parseInt(req.params.id))) {
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;
        res.json({
          msg: "Member updated",
          member
        });
      }
    });
  } else {
    res.status(400).json({
      msg: `members not found : no member with id of ${req.params.id}`
    });
  }
});

module.exports = router;
