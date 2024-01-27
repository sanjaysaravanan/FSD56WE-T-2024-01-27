const userInput = ["10"];

const n = +userInput[0];

let result = "";

let count = 0;

for (let i = 0; count < n; i++) {
  if (i % 2 === 0) {
    result = result + i + " ";
    count++;
  }
}

console.log(result);
