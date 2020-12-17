const ENV = process.env.NODE_ENV || "development";
const testData = require("./test_data");
const developmentData = require("./development_data");

const data = {
  test: testData,
  development: developmentData,
  production: developmentData,
};
module.exports = data[ENV];
