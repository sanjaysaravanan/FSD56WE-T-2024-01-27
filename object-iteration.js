// { name: 'Sam', age: '29', gender: 'male' }

// Sam
// 29
// male

const obj = { name: "Sam", age: "29", gender: "male" };

// create an array of keys ---> ['name', 'age', 'gender']

// keys in an array
const keys = Object.keys(obj); // ['name', 'age', 'gender']

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ":", obj[keys[i]]);
}

// values in the array
const values = Object.values(obj); // ['Sam', 29, 'male]
