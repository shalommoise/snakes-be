const apiRouter = require("express").Router();
const gamesRouter = require("./games.router");
apiRouter.use("/games", gamesRouter);

module.exports = apiRouter;