const {passwordGenerator} = require("../../utils/utils")
exports.up = function(knex) {
    return knex.schema.createTable("games", (gamesTable) => {
    gamesTable.increments("game_id").primary();
    gamesTable.integer("login_code").defaultsTo(new passwordGenorator());
    gamesTable.string("player1").notNullable();
    gamesTable.string("player2").defaultsTo("player2");
    gamesTable.string("snake1").defaultsTo([[],344]);
    gamesTable.string("snake2").defaultsTo([[],24]);
    gamesTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
   return knex.schema.dropTable("games");
};
