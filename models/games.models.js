
const connection = require("../db/connection");

const createGame = (player1)=>{
   return connection
    .insert({
     player1: player1
    })
    .into("games")
    .returning("*")
    .then((res) => {
   
      return res[0];
    });
}

const seeGameById =(game_id)=>{
return connection
    .select("*").from("games").where("game_id", game_id).then((res)=>{
    
      return res[0]
    })
}

const changeGame =(game_id, active, game_over)=>{
   
return connection
    .select("*")
    .from("games")
    .where("game_id", game_id)
    .modify((item)=>{
      if(active) item.update('active', active);
      if (game_over) item.update('game_over', game_over).update('active', false)
    })
    .returning("*")
    .then((res)=>{
      return res[0];
    })

}
module.exports ={createGame, seeGameById, changeGame}