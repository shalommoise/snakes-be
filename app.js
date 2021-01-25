const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routers/api.router");
app.use(express.json());
app.use("/api", apiRouter);
app.use(cors());
app.all("*", (req, res, next) => {
  res.status(404).send({ msg: "404 Error: Path Not found" });
});

module.exports = app;