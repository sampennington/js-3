// Accessing arrays using indexes

let fruits = ["apple", "orange", "banana"];

let firstFruit = fruits[0];
let secondFruit = fruits[1];
let thirdFruit = fruits[2];

console.log(
  `My fruits array contains: ${firstFruit}, ${secondFruit} and ${thirdFruit}.`
);


// Destructuring arrays (After Exercise 1)
let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

let [dad, mum, son, daughter, baby] = familyMembers;

console.log(
  `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`
);


// Object destructuring demo
const developer = {
  name: 'Sam',
  language: 'JavaScript',
  location: 'London',
}


console.log(`Hello! I am ${name}, I live in ${location}, and I like to code using ${language}`)



// Nested object destructuring demo
const developer = {
  name: 'Sam',
  language: 'JavaScript',
  location: {
    street: 'Old street',
    number: 64,
  },
}


const { name, language, location: { street, number } } = developer 

console.log(
  `Hello! I am ${name}, I enjoy using ${language} at my home at number ${number}, ${street}`
);

