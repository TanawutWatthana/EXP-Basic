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

module.exports.getMembers = id => {
  if (id == null) {
    return members;
  } else {
    return members.some(member => member.id == id)
      ? members.filter(member => member.id == id)
      : { msg: "members not found" };
  }
  //return id == null ? members : members.filter(member => member.id == id);
};
