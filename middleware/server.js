const express = require("express");

const logger = (req, res, next) => {
  console.log(`url: ${req.originalUrl}`);
  next();
};
const app = express();
// app.use(logger);

app.get("/:id", logger, (req, res) => {
  res.send(`number `);
});

app.listen(5000, () => {
  console.log(`server running on 5000`);
});
