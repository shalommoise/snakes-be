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
       expect(res.body.game.player1).toBe("Sam");
       expect(res.body.game.snake1).toBe("2:15,3:15|4:15")
     })
   });

   })
   
})