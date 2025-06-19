const express = require("express");
const path = require("path");

const app = express();
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "test", "testFile.txt");
  res.download(filePath, "testDownload.txt", (err) => {
    res.status(500).send("unable to download file");
  });
});

app.listen(5000, () => {
  console.log("server started on 5000");
});
