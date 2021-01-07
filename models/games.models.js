
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
   
const gameStatus = snake1 && snake2 ?  checkGame(snake1, snake2) : false; 
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
});
}
if(gameStatus){
  return connection
    .select("*")
    .from("games")
    .where("game_id", game_id)
    .update('game_over', true).update('active', false)
    .update(`points${gameStatus}`, game[`points${gameStatus}`]/2)
    .returning("*")
    .then((res)=>{
    const [game] = res;
    return game
});
}
      return game;
  

  })

}

const checkFoodLoc =(food, snakeHead1, snakeHead2)=>{
      if(food === snakeHead1) return 1;
      else if (food === snakeHead2) return 2;
      else return false;
      
}
const checkGame = (snake1,snake2)=>{
  
  const [body1, head1] = strToArr(snake1);
  const [body2, head2] = strToArr(snake2);
  const stat1a = body1.filter(element => element.toString() === head1.toString());
  const stat2a = body2.filter(element => element.toString() === head2.toString());
  const stat2b = body1.filter(element => element.toString() === head2.toString());
  const stat1b = body2.filter(element => element.toString() === head1.toString());

  if(stat1a.length > 0|| stat1b.length > 0 ) return 1;
  if(stat2a.length > 0 ||stat2b.length > 0 ) return 2;
else return false;
}
module.exports ={createGame, seeGameById, changeGame}