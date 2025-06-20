const express = require("express");
const router = require("./routes/noteRoute");

const app = express();
app.use("/", router.router);

app.listen(5000, () => {
  console.log("server started on 5000");
});
