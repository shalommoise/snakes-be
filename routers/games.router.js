const gamesRouter = require("express").Router();
const codesRouter = require("./codes.router")
const {postGame, getGameById} = require("../controllers/games.controllers")

gamesRouter.route("/").post(postGame);
gamesRouter.use("/codes", codesRouter);
gamesRouter.route("/:game_id").get(getGameById);

module.exports = gamesRouter;