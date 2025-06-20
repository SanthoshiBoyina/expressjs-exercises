const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "santhoshi" });
});

app.listen(5000, () => {
  console.log("server started on 5000");
});
