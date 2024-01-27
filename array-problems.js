// given a number n ( length of the array ) and k ( element to check for presents in the array )

// I/P
// 5 8
// 6 8 9 4 5

const userInput = ["5 11", "6 8 9 4 5"];

// line 1 value
const line1 = userInput[0];

// split the line 1 value
const line1Arr = line1.split(" ");

// string to number from line1Arr
const n = +line1Arr[0];

// string to number from line1Arr
const k = +line1Arr[1];

const line2Arr = userInput[1].split(" ");

const numArr = [];

for (let i = 0; i < line2Arr.length; i++) {
  numArr.push(+line2Arr[i]);
}

let isPresent = false;

// check if k in present in the array
for (let i = 0; i < numArr.length; i++) {
  if (k === numArr[i]) {
    isPresent = true;
  }
}

if (isPresent) {
  console.log("Y");
} else {
  console.log("N");
}

// Logic for Min in the array

let minVal = 99999; // assume a largest value

for (let i = 0; i < numArr.length; i++) {
  if (minVal > numArr[i]) {
    minVal = numArr[i];
  }
}

console.log(minVal);

let maxVal = -99999; // assume a smallest value

for (let i = 0; i < numArr.length; i++) {
  if (maxVal < numArr[i]) {
    maxVal = numArr[i];
  }
}

console.log(maxVal);
