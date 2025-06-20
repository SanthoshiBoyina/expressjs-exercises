const express = require("express");
const router = express.Router();

router.param("id", (req, res, next, id) => {
  console.log(`triggered for ${id}`);

  const note = {
    id: 4,
    textBookName: "Maths",
  };

  req.note = note;
  next();
});

router.get("/:id", (req, res) => {
  res.send(
    `get request for id ${req.note.id} and text book name is ${req.note.textBookName}`
  );
});

module.exports = {
  router,
};
