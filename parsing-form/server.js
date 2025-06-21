const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.render("users/new/newUser", { firstName: "Santhu" });
});

app.get("/user/:id", (req, res) => {
  res.send(`user with id: ${req.params.id}`);
});

app.post("/createUser", (req, res) => {
  console.log(req.body.firstName);
  const isValid = false;
  if (isValid) {
    res.redirect(`/user/${1}`);
  } else {
    console.log("error");
    res.render("users/new/newUser", { firstName: req.body.firstName });
  }
});

app.listen(5000, () => {
  console.log(`server started on 5000`);
});
