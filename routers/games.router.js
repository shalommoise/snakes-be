const gamesRouter = require("express").Router();
const {postGame} = require("../controllers/games.controllers")
gamesRouter.all("/", postGame)

module.exports = gamesRouter;