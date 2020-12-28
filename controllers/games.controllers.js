
const {createGame} = require("../models/games.models")
const postGame = (req, res)=>{
const {player1} = req.body;

createGame(player1).then((game)=>{
  res.status(201).send({game})
}).catch((err)=>console.log(err))
};


module.exports = {postGame}