
const connection = require("../db/connection");
const {strToArr, radnomCoordinate} = require("../utils/utils")
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

const changeGame =(game_id, active, game_over, snake1, snake2)=>{
 const FoodStat =  checkFoodLoc(game_id, snake1, snake2)
return connection
    .select("*")
    .from("games")
    .where("game_id", game_id)
    .modify((item)=>{
      if(active) item.update('active', active);
      if(game_over) item.update('game_over', game_over).update('active', false);
      if(snake1) item.update('snake1', snake1);
      if(snake2) item.update('snake2', snake2);
      if(FoodStat) {
        item.update('food', radnomCoordinate(30))
      }
    })
    .returning("*")
    .then((res)=>{
      return res[0];
    })

 

}

const checkFoodLoc =(game_id, snake1, snake2)=>{
  return connection
    .select("food")
    .from("games")
    .where("game_id", game_id).then((res)=>{
      const snakeHead1 =  strToArr(snake1[1])
      const snakeHead2 =  strToArr(snake2[1])
      if(res[0] === snakeHead1) return 1;
      else if (res[0] === snakeHead2) return 2;
      else return false;
      })
}
module.exports ={createGame, seeGameById, changeGame}