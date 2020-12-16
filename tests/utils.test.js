const {passwordGenerator} = require("../utils/utils");

describe("passwordGenerator",()=>{
  test('Returns string', () => {
    expect(typeof passwordGenerator()).toBe("string")
  });
  test('string length should be 5 ', () => {
    expect(passwordGenerator().length).toBe(5)
  });
  test('first character is "$"', ()=>{
      expect(passwordGenerator()[0]).toBe("$")
  })
  test('2nd & 3rd characters should be letters', () => {
    
    const abc = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t", "u","v","w","x","y","z", 'A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
    expect(abc.includes(passwordGenerator()[1])).toBe(true)
    expect(abc.includes(passwordGenerator()[2])).toBe(true)
  });
 test('2nd should be upperCase, 3rd lowercase', () => {
    
    const abc = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t", "u","v","w","x","y","z", ];
    const ABC =['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
    expect(ABC.includes(passwordGenerator()[1])).toBe(true)
    expect(abc.includes(passwordGenerator()[2])).toBe(true)
  });

  test('last two charcters should be random numbers', () => {
    const code1 = passwordGenerator();
    const code2 = passwordGenerator();
    const lastOfCode1 = code1[3] + code1[4];
    const lastOfCode2 = code2[3] + code2[4];
    expect(lastOfCode1).not.toBe(lastOfCode2);
  });
})