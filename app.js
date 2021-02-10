const express = require("express");
const app = express();
const cors = require("cors");
const {serverErrorHandler} = require("./errors");
const apiRouter = require("./routers/api.router");
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.all("*", (req, res, next) => {
  res.status(404).send({ msg: "404 Error: Path Not found" });
});
app.use(serverErrorHandler);
module.exports = app;