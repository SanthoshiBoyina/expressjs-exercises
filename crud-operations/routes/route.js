import express from "express";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(`get request id: ${req.params.id}`);
});

router.post("/create", (req, res) => {
  res.send(`post request`);
});

router.put("/:id", (req, res) => {
  res.send(`put request: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete request: ${req.params.id}`);
});

export default router;
