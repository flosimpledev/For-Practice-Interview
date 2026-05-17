console.log("EXAMPLE 1");
// let → reassignable
let count = 1;
console.log(count); // 1


count = 2; 
console.log(count); // 2 ✅ works


// const → fixed binding
const CI = 3.14;
console.log(CI); // 3.14
// cI = 3.14159; ❌ Error: Assignment to constant variable


// BUT objects/arrays under const can mutate
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4] ✅ works


const user = { name: "Flo" };
user.name = "Spark";
console.log(user); // { name: "Spark" } ✅ works




console.log("EXAMPLE 2");
// let → reassignable
let score = 10;
score += 5; 
console.log("Score:", score); // 15


// const → fixed binding
const PI = 3.14159;


// Arrow function
const areaCircle = r => PI * r * r;
console.log("Area:", areaCircle(3)); // 28.27...


// Destructuring
const user1 = { name: "Flo", age: 39 };
const { name, age } = user1;
console.log(`${name} is ${age} years old.`);


// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread:", arr2); // [1,2,3,4,5]


// Rest operator
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log("Sum:", sum(1, 2, 3, 4)); // 10




console.log("EXAMPLE 3");
// let → reassignable
let balance = 500;
console.log("Balance:", balance); // 500

balance -= 200; 
console.log("Balance after withdrawal:", balance); // 300 ✅ works

// const → fixed binding
const BANK_NAME = "Spark Bank";
console.log("Bank:", BANK_NAME); // Spark Bank

// BANK_NAME = "Other Bank"; ❌ Error: Assignment to constant variable

// const with array
const transactions = [100, -50, 200];
transactions.push(-30);
console.log("Transactions:", transactions); // [100, -50, 200, -30]

// const with object
const account = { owner: "Flo", type: "Savings" };
account.type = "Checking";
console.log("Account:", account); // { owner: "Flo", type: "Checking" }




// EXAMPLE 4
// let → reassignable
let level = 1;
console.log("Level:", level); // 1

level = 2; 
console.log("Level up:", level); // 2 ✅ works

// const → fixed binding
const GAME_NAME = "Shrine Ladder Quest";
console.log("Game:", GAME_NAME); // Shrine Ladder Quest

// GAME_NAME = "Other Quest"; ❌ Error: Assignment to constant variable

// const with array
const inventory = ["sword", "shield"];
inventory.push("potion");
console.log("Inventory:", inventory); // ["sword", "shield", "potion"]

// const with object
const player = { name: "Flo", hp: 100 };
player.hp -= 20;
console.log("Player:", player); // { name: "Flo", hp: 80 }




// EXAMPLE 5
// let → reassignable
let attempts = 0;
console.log("Attempts:", attempts); // 0

attempts++;
console.log("Attempts after retry:", attempts); // 1 ✅ works

// const → fixed binding
const MAX_ATTEMPTS = 3;
console.log("Max attempts allowed:", MAX_ATTEMPTS); // 3

// MAX_ATTEMPTS = 5; ❌ Error: Assignment to constant variable

// const with array
const colors = ["red", "blue"];
colors.push("green");
console.log("Colors:", colors); // ["red", "blue", "green"]

// const with object
const settings = { theme: "dark", language: "en" };
settings.language = "ph";
console.log("Settings:", settings); // { theme: "dark", language: "ph" }




// EXAMPLE 6
// let → reassignable
let score1 = 50;
console.log("Score:", score1); // 50

score += 25; 
console.log("Updated Score:", score); // 75 ✅ works

// const → fixed binding
const GAME_TITLE = "Dragon Shrine";
console.log("Game Title:", GAME_TITLE); // Dragon Shrine

// GAME_TITLE = "Other Game"; ❌ Error: Assignment to constant variable

// const with array
const heroes = ["Knight", "Mage"];
heroes.push("Archer");
console.log("Heroes:", heroes); // ["Knight", "Mage", "Archer"]

// const with object
const enemy = { type: "Orc", hp: 100 };
enemy.hp -= 40;
console.log("Enemy:", enemy); // { type: "Orc", hp: 60 }
