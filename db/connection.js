const ENV = process.env.NODE_ENV || "development";
const knex = require("knex");
const config = require("../knexfile");

const dbConfig =
// ENV === "development"
  // ENV === "test"
  ENV === "production"
    ? { client: "pg", connection: process.env.DATABASE_URL }
    : config;

module.exports = knex(dbConfig);
