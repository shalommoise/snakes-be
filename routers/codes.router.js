const codesRouter = require("express").Router();
const {getCodes} = require("../controllers/codes.contollers")
codesRouter.get("/",getCodes)

module.exports = codesRouter;