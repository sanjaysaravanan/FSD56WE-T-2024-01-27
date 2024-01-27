// print first n numbers in fibonacci sequence

const userInput = ["10"];

const n = +userInput[0];

// 0 1 1 2 3 5 8 13 21 34

let num1 = 0;
let num2 = 1;

let result = "0 1 ";

for (let i = 2; i < n; i++) {
  // next fibonacci number by adding the last two numbers
  const nxtNum = num1 + num2;

  // adding the value to result string with space
  result = result + nxtNum + " ";

  // changing the num1 value to num2 value
  num1 = num2;

  // change the num2 value the new value
  num2 = nxtNum;
}

console.log(result.trim());
