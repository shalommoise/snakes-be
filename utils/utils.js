const passwordGenorator =()=>{

const two = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const three = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  let code = "$"+ two+ three + 34;

  return code
};


module.exports ={passwordGenorator}