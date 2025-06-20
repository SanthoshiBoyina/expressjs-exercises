const express = require("express");
const routerFile = require("./routes/noteRoute");
const app = express();
app.use("/", routerFile.router);

app.listen(5000, () => {
  console.log("server started on 5000");
});
