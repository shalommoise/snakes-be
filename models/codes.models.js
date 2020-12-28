const connection = require("../db/connection");

const seeCodes = ()=>{
return connection
    .select("login_code").from("games").then((res)=>{
   
     return res;
    })
}

module.exports = {seeCodes}