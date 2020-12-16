const passwordGenerator =()=>{

const secondChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const thirdChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const fourthChar = Math.floor(10 + Math.random() * 90);

const code = "$"+ secondChar+ thirdChar + fourthChar;

  return code
};


module.exports ={passwordGenerator}