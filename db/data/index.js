const ENV = process.env.NODE_ENV || "development";

const test = require("./test_data");
const development = require("./development_data");
const data = { test, development, production: development };



module.exports = data[ENV];;
