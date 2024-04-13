// capitalize first letter in string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// reverse string
function reverse(string) {
  let reversedString = [];

  for (let x = string.length - 1; x > -1; x--) {
    reversedString.push(string.charAt(x));
  }
  return reversedString.join("");
}

//calculator
const calc = () => {
  const add = (inputA, inputB) => {
    return inputA + inputB;
  };

  const subtract = (inputA, inputB) => {
    return inputA - inputB;
  };

  const divide = (inputA, inputB) => {
    return inputA / inputB;
  };

  const multiply = (inputA, inputB) => {
    return inputA * inputB;
  };

  return {
    add,
    subtract,
    multiply,
    divide,
  };
};

function caesarCipher(inputString, key) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v", 
    "w",
    "x",
    "y",
    "z",
  ];
  let capitalAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let newString = [];

  for (let x = 0; x<inputString.length; x++){
    if (alphabet.includes(inputString.charAt(x))) {
        let currentIndex = alphabet.indexOf(inputString.charAt(x));
        let newIndex = currentIndex + key;


        if (newIndex > 25) {
          newIndex -= 26;
        };
        newString.push(alphabet[newIndex])
    } else  if (capitalAlphabet.includes(inputString.charAt(x))) {
        let currentIndex = capitalAlphabet.indexOf(inputString.charAt(x));
        let newIndex = currentIndex + key;

        if (newIndex > 25) {
            newIndex = newIndex - 26;
        };
        newString.push(capitalAlphabet[newIndex])
    } else {
        newString.push(inputString.charAt(x));
    }
  };

  return newString.join("");
}



export { calc, reverse, capitalize, caesarCipher };
