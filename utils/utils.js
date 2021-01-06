const passwordGenerator =()=>{

const secondChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const thirdChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const fourthChar = Math.floor(10 + Math.random() * 90);

const code = "$"+ secondChar+ thirdChar + fourthChar;

  return code
};


const radnomCoordinate = (size)=>{
  if(!size) return '';
  if(size === 1) return "1:1"
  let x = Math.round(Math.random() * size);
  let y = Math.round(Math.random() * size);
   if(x === 0) x++;
   if(y === 0) y++;

  return `${x}:${y}`;
}
const strToArr = (str)=>{
  if (!str) return [];
  if(!str.includes(":")) return [ + str];
  const splitHead = str.split("|");
 const [body, head] = splitHead;
if(!head){
const arr = body.split(",");
return arr.map(item=>item.split(":").map(num=>+num));
 
}
  const cordArr = body.split(",");
  const formattHead = head.split(":").map((num)=> +num)
  const formattBody = cordArr.map((cord)=>cord.split(":")).map((arr)=>arr.map((num)=>+num))

   
  return [formattBody, formattHead]

};
const arrToStr = ()=>{
  return '';
}
module.exports ={passwordGenerator, radnomCoordinate, strToArr, arrToStr}