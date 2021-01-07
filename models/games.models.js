
const connection = require("../db/connection");
const {strToArr, radnomCoordinate, arrToStr} = require("../utils/utils")
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
  return connection
    .select("*")
    .from("games")
    .where("game_id", game_id)
    .modify((item)=>{
      if(active) item.update('active', active);
      if(game_over) item.update('game_over', game_over).update('active', false);
      if(snake1) item.update('snake1', snake1);
      if(snake2) item.update('snake2', snake2);
    })
    .returning("*")
    .then((res)=>{
const [game] = res;
const { food} = game;
   const snakeHead1  =  arrToStr(strToArr(snake1)[1]);
   const snakeHead2 =  arrToStr(strToArr(snake2)[1]);
const foodStatus = checkFoodLoc(food, snakeHead1, snakeHead2);

if(foodStatus) {
  return connection
    .select("*")
    .from("games")
    .where("game_id", game_id)
    .update('food', radnomCoordinate(30))
    .increment(`points${foodStatus}`, 1)
    .returning("*")
    .then((res)=>{
    const [game] = res;
    return game
})
}
      return game;
  

  })

}

const checkFoodLoc =(food, snakeHead1, snakeHead2)=>{
  
      if(food === snakeHead1) return 1;
      else if (food === snakeHead2) return 2;
      else return false;
      
}
module.exports ={createGame, seeGameById, changeGame}