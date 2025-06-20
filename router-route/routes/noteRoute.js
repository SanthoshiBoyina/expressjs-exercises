const express = require("express");

const router = express.Router();

router.post("/create", (req, res) => {
  res.send(`resource created`);
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`get request ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`put request ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete request ${req.params.id}`);
  });

module.exports = {
  router,
};
