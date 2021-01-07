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
  it("200 PATCH game status", ()=>{
    return request(app)
    .patch("/api/games/1")
    .send({active: true})
   .expect(200)
    .then((res)=>{
      
      expect(res.body.game.active).toBe(true);
    })
  })
   it("200 PATCH game over", ()=>{
return request(app)
    .patch("/api/games/1")
    .send({game_over: true})
   .expect(200)
    .then((res)=>{
      expect(res.body.game.game_over).toBe(true);
    })

   })
   it("200 PATCH game over should trun active to false", ()=>{
     return request(app)
    .patch("/api/games/1")
    .send({active: true})
   .expect(200)
    .then(()=>{
      return request(app)
    .patch("/api/games/1")
    .send({game_over: true})
   .expect(200)
    .then((res)=>{
      expect(res.body.game.game_over).toBe(true);
       expect(res.body.game.active).toBe(false);
    })

   })
     
    })
it("200 PATCH snake1 position", ()=>{
return request(app)
    .patch("/api/games/1")
    .send({snake1: "28:15,29:15|29:16"})
     .expect(200).then((res)=>{
      expect(res.body.game.snake1).toBe("28:15,29:15|29:16")
     })

})
it("200 PATCH snake2 position", ()=>{
return request(app)
    .patch("/api/games/1")
    .send({snake2: "28:15,29:15|29:16"})
     .expect(200).then((res)=>{
      expect(res.body.game.snake2).toBe("28:15,29:15|29:16")
     })

})
it("200 PATCH food when snake1 || snake2 head === food", ()=>{
return request(app).get("/api/games/1").expect(200).then((res)=>{
  const {food} = res.body.game

  return request(app)
    .patch("/api/games/1").send({snake1: `2:15,3:15|${food}`, snake2: "28:15,29:15|29:16"})
    .expect(200)
    .then((res)=>{
       expect(res.body.game.food).not.toBe(food)
      expect(res.body.game.points1).toBe(1)
    })
})

})
})