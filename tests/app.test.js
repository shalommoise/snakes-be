const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

describe("/api", ()=>{
   beforeEach(() => connection.seed.run());
   afterAll(() => connection.destroy());
   describe("/games", ()=>{
it('201 POST new game', () => {
     return request(app)
     .post("/api/games").send({player1: "Sam"}).expect(201).then((res)=>{
      // console.log(res.body.game)
      expect(res.body.game.player1).toBe("Sam");
       expect(res.body.game.snake1).toBe("2:15,3:15|4:15")
     })
   });
   it("200 GET game by id", ()=>{
      return request(app).get("/api/games/1")
      .expect(200)
      .then((res)=>{   
      expect(res.body.game.game_id).toBe(1)
      expect(res.body.game.player1).toBe("a")
      })
   })
    })
it("200 GET all game login codes", ()=>{
return request(app)
     .get("/api/games/codes")
     .expect(200)
     .then((res)=>{
   
    res.body.codes.forEach((code)=>{
      const {login_code} = code;
      expect(login_code[0]).toBe("$");
      expect(typeof login_code[1]).toBe("string");
      expect(typeof + login_code[4]).toBe("number");
    })     
     })
});
  
   
})