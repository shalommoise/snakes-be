
exports.up = function(knex) {
    return knex.schema.createTable("games", (gamesTable) => {
    gamesTable.increments("game_id").primary();
    gamesTable.integer("login_code").defaultsTo(randNumFunc());
    gamesTable.string("player1");
    gamesTable.string("player2");
  
  });
};

exports.down = function(knex) {
   return knex.schema.dropTable("games");
};
