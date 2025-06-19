import express from "express";
import router from "./routes/route.js";

const app = express();

app.use("/api", router);

app.listen(5000, () => {
  console.log("server running on 5000");
});
