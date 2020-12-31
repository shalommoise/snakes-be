
const {createGame, seeGameById, changeGame} = require("../models/games.models")
const postGame = (req, res)=>{
const {player1} = req.body;

createGame(player1).then((game)=>{
  res.status(201).send({game})
}).catch((err)=>console.log(err))
};

const getGameById =(req,res)=>{

const {game_id} = req.params

seeGameById(game_id).then((game)=>{
 
  res.status(200).send({game})
})

}
const patchGame =(req,res)=>{
  const {game_id} = req.params;
  const {active, game_over} = req.body;

changeGame(game_id,active, game_over).then((game)=>{
  
  res.status(200).send({game})
})

}

module.exports = {postGame, getGameById, patchGame}