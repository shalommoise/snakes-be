const connection = require("../db/connection");

const seeCodes = ()=>{
return connection
    .select("login_code").from("games").then((res)=>{
   
     return res;
    }).catch((err)=>console.log(err))
}

module.exports = {seeCodes}