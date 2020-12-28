const {passwordGenerator, radnomCoordinate} = require("../../utils/utils")
exports.up = function(knex) {
    return knex.schema.createTable("games", (gamesTable) => {
    gamesTable.increments("game_id").primary();
    gamesTable.string("login_code").defaultsTo(passwordGenerator());
    gamesTable.string("player1").notNullable();
    gamesTable.string("player2").defaultsTo("player2");
    gamesTable.string("snake1").defaultsTo("2:15,3:15|4:15");
    gamesTable.string("snake2").defaultsTo("28:15,27:15|29:15");
    gamesTable.string("food").defaultsTo(radnomCoordinate(30));
    gamesTable.integer("points1").defaultTo(0);
    gamesTable.integer("points2").defaultTo(0);
    gamesTable.boolean("game over").defaultTo(false);
    gamesTable.boolean("active").defaultTo(false);
    gamesTable.timestamp("created_at").defaultTo(knex.fn.now());
   
  });
  
};

exports.down = function(knex) {
   return knex.schema.dropTable("games");
};
