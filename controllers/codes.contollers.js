const {seeCodes} = require("../models/codes.models")


const getCodes=(req,res)=>{
 
seeCodes().then((codes)=>{
res.status(200).send({codes})
}).catch((err)=>console.log(err))
  
}

module.exports ={getCodes}