"use strict";
/*
function greet(name) {
  return `Welcome ${name}!`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Mango")); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet); // ƒ greet() {return `Welcome $



function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = (makePizza);

console.log(result);
console.log(pointer);



function greet(name) {
  console.log(`Welcome ${name}!`);
}


function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); 
registerGuest("Mango", notify);
								
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});

                              
 function deliverPizza(pizzaName) {
  return console.log(`Delivering ${pizzaName} pizza.`);
}

function makePizza(pizzaName) {
  return console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
}

function makeMessage(pizzaName, callback){
  callback(pizzaName);
  return;
};

makeMessage("Royal Grand", makePizza);
makeMessage("Ultracheese", deliverPizza);
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

const numbers = [5, 10, 15, 20, 25];
for(let i=0; i<numbers.length; i+=1){
  console.log(`${i}`);
  console.log(`${numbers[i]}`);
};

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number, index) {
    totalPrice += number
  });

  return console.log(totalPrice);
};

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

function filterArray(numbers, value) {
  let originArray = [];
  let emptArray = [];
numbers.forEach(function(number, index){
  if(number>value){
    originArray.push(number);
    console.log(originArray);
  }else{
    return console.log(emptArray);
  }
});
  
};

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

const calculateTotalPriceR = (quantity, pricePerItem) => {
  return console.log(quantity * pricePerItem);
};

calculateTotalPriceR(5, 100);
calculateTotalPriceR(8, 60);
calculateTotalPriceR(3, 400);


function classicAdd(a, b, c){
  return console.log(a+b+c);
};

classicAdd(1, 2,3);

const arowAdd = (a, b, c) =>{
  return console.log(a+b+c);
};

arowAdd(2,3,6);

const newAdd = a =>{
  return console.log(a +8);
};

newAdd(3);

const greet = () =>{
  console.log("Hello, Olya!");
};

greet();

function classAdd(a, b, c){
  return a + b + c;
};

const alAdd = (a, b, c) => a+b+c;


console.log(alAdd);
alAdd(1+5+5);

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);

const add =(...arg) =>{
  console.log(arg);
};

add(1,1,1);

const numbers = [5, 10, 15, 20, 25];
numbers.forEach(function(number, index)){
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
})
// Стрілочна анонімна функція
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});


const calculateTotalPricece = (orderedItems) =>{ 
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return console.log(totalPrice);
};

calculateTotalPricece([12, 85, 37, 4]);
calculateTotalPricece([164, 48, 291]);
calculateTotalPricece([412, 371, 94, 63, 176]);


const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return console.log(filteredNumbers);
};

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);




const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]


const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};



const changeEven = (numbers, value) => {
  const newArray = [];
   numbers.forEach(element => {
    if (element % 2 === 0) {
      newArray.push(element + value);
    }
  });
  
   return console.log(newArray);            
};


changeEven([1, 2, 3, 4, 5], 10);
changeEven([2, 8, 3, 7, 4, 6], 10);
changeEven([17, 24, 68, 31, 42], 100);
changeEven([44, 13, 81, 92, 36, 54], 100);


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log(titles);

const bookss = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = bookss.flatMap(book => book.genres);
console.log(genres);

function greet(name){
console.log(`Hello, ${name}`);
};

greet("Olya");
greet("Oleh");
greet(["Olya", "Oleh"]);

console.log(greet);


function deliverPizza(pizzaName) {
  return console.log(`Delivering ${pizzaName} pizza.`);
}

function makePizza(pizzaName) {
  return console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
}

function makeMessage(pizzaName, callback){
  callback(pizzaName);
  return;
};

makeMessage("Royal Grand", makePizza);
makeMessage("Ultracheese", deliverPizza);

const numbers = [5, 10, 15, 20, 25];
for(let i=0; i<numbers.length; i+=1){
  console.log(`${i}: ${numbers[i]}`);
};
numbers.forEach(function callback(number, index, array){
  console.log(index, number);
});


function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function callback (number, index) {
    totalPrice += number;
  });

  return console.log(totalPrice);
};

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return console.log(totalPrice);
};
calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);


const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]


const dirtyMultiply = (array, value) =>{
  for(let i = 0; i<array.length; i+=1){
    array[i] = array[i] * value;
  }
};

const number = [1, 2, 3, 4, 5];
dirtyMultiply(number, 2);
console.log(number);


const pureMultiply = (array, value) => {
  let newArray = [];
  array.forEach(element => {
    newArray.push(element);
  });
};

const numbers = [1, 2, 3, 4, 5];
pureMultiply(numbers, 2);
console.log(numbers);


const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]



array.map((element, index, array) => {
  // Тіло колбек-функції
});

array.map((element, index, array) =>{
});




const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsToUpperCase = planets.map((element) =>  element.toUpperCase());
const planetsLength = planets.map((element) => element.length);
console.log(planetsToUpperCase);
console.log(planetsLength);

*/


/*function greet(name) {
  console.log(`Welcome ${name}!`);
};

function notify(name){
return console.log(`Dear ${name}, your room will be ready in 30 minutes !`);
};

function registerGuest(name, callback) {
  console.log(`Registerang ${name}`);
  callback(name); 
};

registerGuest("Olya", function greet(name) {
  console.log(`Welcome ${name}`);
});
registerGuest("Olya", function notify(name) {
  console.log(`Dear ${name} you are syper!`)
});*/

const numbers = [5, 10, 15, 20, 25];
const numbersNew = numbers.forEach(function callback(number, index, array){
console.log(number);
});

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach((element)=>{
    totalPrice +=element;
  });
console.log(totalPrice);
};

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

function filterArray(numbers, value) {
  let newArray = [];
  numbers.forEach(number => {
    if(number> value) {
      newArray.push(number);
    }
  })
return console.log(newArray);
};

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

const add = (...arg) => {
  console.log(arg);
};

add(1, 2, 3);

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase);
const planetsToUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsToUpperCase);

const planetsLength = planets.map(planet => planet.length);
console.log(planetsLength);
/*
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const studentsName = students.map(student => student.name);
const studentsScore = students.map(student =>student.score);
const studentsNameScore = students.map(student => `${student.name}, ${student.score}`);

console.log(studentsName);
console.log(studentsScore);
console.log(studentsNameScore);
*/
const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];


const studentsName = students.map(student => student.name);
console.log(studentsName);

const studentsCourses = students.map(student => student.courses);
console.log(studentsCourses);

const studentsCoursesLine = students.flatMap(student => student.courses);
console.log(studentsCoursesLine);


const users =
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserEmails = users.map(user => user.email);
console.log(getUserEmails);

const values = [51, -3, 27, 21, -68, 42, -37];
const valuesPositive = values.filter(value => value>=0);
console.log(valuesPositive);
const valuesNegative = values.filter(value => value<0);
console.log(valuesNegative);

const valuesBig = values.filter(value => value>1000);
console.log(valuesBig);

console.log(values);

const numberss = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numberss.filter(number => number%2 === 0);
const oddNumbers = numberss.filter(number => number%2 ===1); 

console.log(evenNumbers);
console.log(oddNumbers);


/* відфільтрувати студентів, які мають:
високі бали (від 80 (включно)),
низькі бали (нижче 50)
середні бали (від 50 (включно) до 80) */
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const studentss = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const studTheBest = studentss.filter(student => student.score>=80);
console.log(studTheBest);
const studTheWorth = studentss.filter(student => student.score<50);
console.log(studTheWorth);

const studMiddle = studentss.filter(student => student.score>50 && student.score<80);
console.log(studMiddle);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94 
  },
  { title: "Enemy of God",
   author: "Bernard Cornwell",
    rating: 8.67
   },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating>=MIN_RATING);
const booksByAuthor = books.filter(book => book.author = AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);


const uusers =  
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const getUsersWithEyeColor = (uusers, color) => {
  return console.log(uusers.filter(user => user.eyeColor === color));
};

getUsersWithEyeColor(uusers, "blue");
getUsersWithEyeColor(uusers, "green");
getUsersWithEyeColor(uusers, "brown");



const usssers = 
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
];

const getUsersWithAge = (usssers, minAge, maxAge) => {
let usersFilter = usssers.filter(user => user.age >=minAge && user.age <=maxAge)
return console.log(usersFilter);
};

getUsersWithAge(usssers, 20, 30);
getUsersWithAge(usssers, 30, 40);
getUsersWithAge(usssers, 80, 100);

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const rightColor = colorPickerOptions.find(colorPickerOption => colorPickerOption.label === "blue");
console.log(rightColor);

const rightColorIndigo = colorPickerOptions.find(colorPickerOption => colorPickerOption.label === "indigo");
console.log(rightColorIndigo);

const boooks = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHORR = "Robert Sheckley";

const bookWithTitle = boooks.find(book => book.title === BOOK_TITLE);
const bookByAuthor = boooks.find(book => book.author === AUTHORR);

console.log(bookWithTitle);
console.log(bookByAuthor);

const products = [
	{ name: "apple", quantity: 2 },
	{ name: "orange", quantity: 5 },
	{ name: "plum", quantity: 1 },
];

const productsQuantity = products.every(product => product.quantity>0);
console.log(productsQuantity);

const colNumbers = [1, 2, 3, 4, 5];
const colNumbersCheck = colNumbers.some(value => value < 0);
console.log(colNumbersCheck);

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, number) => { return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);

const playerss = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = playerss.reduce((total, player) => { return total + player.playtime},0);

console.log(totalAveragePlaytimePerGame);
const middlePlayGameInOneGame = playerss.playtime / playerss.gamesPlayed;

const userrs = 
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];


  const usersBalance = userrs.reduce((total, user) => {return  total + user.balance},0);

console.log(usersBalance);

const scores = [61, 19, 74, 35, 92, 56]; 
const scoresToSorted = scores.toSorted();
console.log(scoresToSorted);

const studdents = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
const studdentsToSorted = studdents.toSorted();
console.log(studdentsToSorted);

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();
console.log(ascendingReleaseDates);

const alphabeticalAuthors = authors.toSorted();
console.log(alphabeticalAuthors);

const scoores = [61, 19, 74, 35, 92, 56];

const scooresOwn = scoores.toSorted((a,b) => b-a);
console.log(scooresOwn);