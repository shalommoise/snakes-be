
const {createGame, seeGameById} = require("../models/games.models")
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

module.exports = {postGame, getGameById}