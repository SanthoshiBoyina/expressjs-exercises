const express = require("express");

const app = express();
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("server started on 5000");
});
