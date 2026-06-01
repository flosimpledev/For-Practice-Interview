// 🪜 React Interview Review Ladder 2026 (200% Effective)
// 1. JavaScript Core (Foundation Flame)
//** */ ES6+ Syntax: let/const, arrow functions, destructuring, spread/rest.

//** */ Async mastery: promises, callbacks, async/await.

//** */ Array methods: .map(), .filter(), .reduce() — practice live coding.

// DOM basics: events, selectors.
// 👉 Drill: Write a function using .reduce() to sum an array.
// 👉 Interview Q: “Difference between map and forEach?”

// 2. React Basics (Ignition Spark)
// JSX rules: one parent element, expressions inside {}.

// Props vs State: props = external, state = internal.

// Conditional rendering: &&, ternary.

// Lists & keys: unique keys prevent re‑render bugs.
// 👉 Drill: Build a todo list with props + state.
// 👉 Interview Q: “Why are keys important in lists?”

// 3. Class Components (Legacy Flame)
// constructor, render(), this.state, this.setState().

// Lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount.

// Binding methods to this.
// 👉 Drill: Create a class counter with lifecycle logs.
// 👉 Interview Q: “How do hooks replace lifecycle methods?”

// 4. Function Components + Hooks (Modern Flame)
// useState, useEffect, useContext, useReducer.

// Custom hooks for reusable logic.

// Rules of hooks: only at top level, only inside functions.
// 👉 Drill: Build a timer with useEffect.
// 👉 Interview Q: “What happens if you forget the dependency array in useEffect?”

// 5. Advanced React (Glyph Tier)
// Context API vs Redux: Context for small state, Redux for complex/global.

// React Router v6: <Route>, <Link>, useNavigate.
// 👉 Drill: Implement a theme switcher with Context.
// 👉 Interview Q: “Compare Context API and Redux — when use each?”

// ⚡ Bonus Flames for 2026
// TypeScript Integration: Type props/state, interfaces vs types, generics.

// Firebase Integration: Auth, Firestore CRUD, real‑time listeners.

// Testing: Jest + React Testing Library basics.
//** */ 👉 Interview Q: “How do you type React props with TypeScript?”
//** */ 👉 Interview Q: “How do you secure Firebase API keys in React?”





// 🧪 200% Prep Ritual
// Daily grind: Code one mini‑component per rung.

// Explain aloud: Narrate your thought process like you’re teaching.

// Mock drills: Practice Q&A until fluent.

// Demo project: Bring a React + Firebase + TypeScript app. Show it off.

// Men, this ladder + drills + demo project = 200% flame. You won’t just answer — you’ll teach back in the interview, and that’s what lands the job.


//








console.log('1. JAVASCRIPT CORE (FOUNDATION FLAME) ES6+ SYNTAX');



console.log('LET - is your tool for declaring variables that are block‑scoped — meaning they only live inside the {} they’re defined in. Unlike var, which leaks out into the whole function or global scope, let keeps things tight and safe.');
console.log('LET - block‑scoped, reassignable, perfect for values that evolve.');
console.log('Each sample shows a different data type: number, string, boolean, array, object, null, float.');


console.log('LET VARIABLE SAMPLES');

// 1. Counter
console.log('1. Counter');
console.log('1. let count = 0;');


// 2. Username
console.log('2. Username');
console.log('2. let username = "Flo";');


// 3. Score tracker
console.log('3. Score Tracker');
console.log('3. let score = 50;');


// 4. Boolean flag
console.log('4. Boolean Flag');
console.log('4. let isLoggedIn = false;');


// 5. Array of tasks
console.log('5. Array of Tasks');
console.log('5. let tasks = ["code", "debug", "deploy"];');


// 6. Object for settings
console.log('6. Object for Settings');
console.log('6. let settings = { theme: "dark", language: "en" };');


// 7. Current level
console.log('7. Current Level');
console.log('7. let level = 1;');


// 8. Temporary result
console.log('8. Temporary Result');
console.log('8. let tempResult = null;');


// 9. Price value
console.log('9. Price Value');
console.log('9. let price = 199.99;');


// 10. Greeting message
console.log('10. Greeting Message');
console.log('10. let greeting = "Eyy Spark 🔥";');


// 11. Age tracker

console.log('11. Age tracker');
console.log('11. let age = 25;');



// 12. Email string
console.log('12. Email String');
console.log('let email = "flo@example.com";');



// 13. Boolean toggle
console.log('13. Boolean Toggle');
console.log('13. let isDarkMode = false;');



// 14. Shopping cart array
console.log('14. Shopping Cart Array');
console.log('14. let cartItems = ["Laptop", "Mouse", "Keyboard"];');



// 15. Profile object
console.log('15. Profile Object');
console.log('15. let profile = { name: "Flo", country: "Philippines" };');



// 16. Score multiplier
console.log('16. Score Multiplier');
console.log('16. let multiplier = 2.5;');



// 17. Current date string
console.log('17. Current Date String');
console.log('17. let currentDate = new Date().toLocaleDateString();');



// 18. Function for addition
console.log('18. Function for Addition');
console.log('18. let add = (a, b) => a + b;');



// 19. Undefined starter
console.log('19. Undefined Starter');
console.log('19. let token;');



// 20. Greeting template
console.log('20. Greeting Template');
console.log('20. let greeting1 = `Eyy Spark 🔥 — shrine lit!`;');



// 21. Health points
console.log('21. Health Points');
console.log('21. let health = 100;');



// 22.  Player name
console.log('22. Player Name');
console.log('22. let playerName = "SparkKnight";');


// 23. Boolean admin flag
console.log('23. Boolean Admin Flag');
console.log('23. let isAdmin = false;');



// 24. Inventory array
console.log('24. Inventory array');
console.log('24. let inventory = ["Potion", "Sword", "Shield"];');



// 25. Coordinates object
console.log('25. Coordinates object');
console.log('25. let position = { x: 10, y: 20 };');



// 26. Average rating
console.log('26. Average rating');
console.log('26. let rating = 4.7;');



// 27. Current year
console.log('27. Current year');
console.log('27. let year = new Date().getFullYear();');



// 28. Function for subtraction
console.log('28. Function for subtraction');
console.log('28. let subtract = (a, b) => a - b;');
let subtract = (a, b) => a - b;
console.log(subtract(10, 3));


// 29. Placeholder for user input
console.log('29. Placeholder for user input');
console.log('29. let userInput;');



// 30. Motivational flame
console.log('30. Motivational flame');
console.log('30. let mantra = "Keep climbing the shrine ladder 🔥";');



// 31. User ID
console.log('31. User ID');
console.log('31. let userId = 101;');



// 32. Full name
console.log('32. Full name');
console.log('32. let fullName = "Flo Spark";');



// 33. Boolean subscription status
console.log('33. Boolean subscription status');
console.log('33. let isSubscribed = true;');



// 34. Favorite bands array
console.log('34. Favorite bands array');
console.log('34. let bands = ["Queso", "MCR", "Red Hot Chili Peppers"];');



// 35. Coordinates object
console.log('35. Coordinates object');
console.log('35. let location1 = { lat: 14.3, lng: 121.1 };');



// 36. Balance amount
console.log('36. Balance amount');
console.log('36. let balance = 5000.75;');



// 37. Current month
console.log('37. Current month');
console.log('37. let month = new Date().getMonth() + 1;');




// 38. Function for division
console.log('38. Function for division');
console.log('38. let divide = (a, b) => a / b;');



// 39. Placeholder for API token
console.log('39. Placeholder for API token');
console.log('39. let apiToken;');



// 40. Motivational spark
console.log('40. Motivational spark');
console.log('40. let mantra2 = "Climb steady 🔥";');



// 41. Shopping list
console.log('41. Shopping list');
console.log('41. let shoppingList = ["Rice", "Eggs", "Coffee"];');



// 42. Boolean toggle for notifications
console.log('42. Boolean toggle for notifications');
console.log('42. let notificationsEnabled = false;');



// 43. Object for car details
console.log('43. Object for car details');
console.log('43. let car = { brand: "Suzuki", model: "S-Presso", year: 2026 };');



// 44. Random float
console.log('44. Random float');
console.log('44. let randomFloat = Math.random();');



// 45. Current hour
console.log('45. Current hour');
console.log('45. let hour = new Date().getHours();');



// 46. Function for power
console.log('46. Function for power');
console.log('46. let power = (base, exp) => base ** exp;');



// 47. Placeholder for error message
console.log('47. Placeholder for error message');
console.log('47. let errorMessage;');



// 48. Array of UFC fighters
console.log('48. Array of UFC fighters');
console.log('48. let ufcFighters = ["Adesanya", "Jones", "McGregor"];');



// 49. Boolean flag for loading state
console.log('49. Boolean flag for loading state');
console.log('49. let isLoading = true;');



// 50. Greeting template
console.log('50. Greeting Template');
console.log('50. let greeting2 = `Eyy Spark 🔥 shrine lit!`;');









console.log('ANOTHER 50 LET ITEM VARIABLES');


// 1. Score tracker
console.log('1. let score = 0;');


// 2. Nickname
console.log('2. let nickname = "EyySpark";');


// 3. Boolean sound toggle
console.log('3. let soundOn = true;');


// 4. Playlist array
console.log('4. let playlist = ["Lo-fi", "Jazz Fusion", "Metal"];');


// 5. Config object
console.log('5. let config = { debug: true, version: "1.0.0" };');


// 6. Pi constant (approx)
console.log('6. let piValue = 3.14159;');


// 7. Current minute
console.log('7. let minute = new Date().getMinutes();');


// 8. Function for modulus
console.log('8. let mod = (a, b) => a % b;');


// 9. Placeholder for password
console.log('9. let password;');


// 10. Spark chant
console.log('10. let chant = "Shrine flame steady 🔥";');


// 11. Steps walked
console.log('11. let steps = 3500;');


// 12. Device name
console.log('12. let device = "Laptop";');


// 13. Boolean wifi status
console.log('13. let wifiConnected = false;');


// 14. Friends list
console.log('14. let friends = ["Mark", "Liza", "Jules"];');


// 15. Coordinates object
console.log('15. let coords = { lat: 14.2, lon: 121.0 };');


// 16. GPA float
console.log('16. let gpa = 3.8;');


// 17. Current second
console.log('17. let second = new Date().getSeconds();');


// 18. Function for absolute value
console.log('18. let abs = (n) => Math.abs(n);');


// 19. Placeholder for session ID
console.log('19. let sessionId;');


// 20. Spark glyph
console.log('20. let glyph = "🔥";');


// 21. Notifications count
console.log('21. let notifications = 12;');


// 22. Country
console.log('22. let country = "Philippines";');


// 23. Boolean premium user
console.log('23. let isPremium = ');
true;

// 24. Movies array
console.log('24. let movies = ["Inception", "Matrix", "Interstellar"];');


// 25. Book object
console.log('24. let book = { title: "JS Shrine", author: "Flo" };');


// 26. Random boolean
console.log('26. let randomBool = Math.random() > 0.5;');


// 27. Current millisecond
console.log('27. let ms = new Date().getMilliseconds();');


// 28. Function for cube
console.log('28. let cube = (n) => n ** 3;');


// 29. Placeholder for file path
console.log('29. let filePath;');


// 30. Spark mantra
console.log('30. let sparkMantra = "Climb steady 🔥";');


// 31. Calories burned
console.log('31. let calories = 220;');


// 32. Language
console.log('32. let language = "JavaScript";');


// 33. Boolean mute status
console.log('33. let isMuted = false;');


// 34. Colors array
console.log('34. let colors = ["Red", "Blue", "Green"];');


// 35. Laptop object
console.log('35. let laptop = { brand: "Dell", ram: "16GB" };');


// 36. Exchange float
console.log('36. let usdToPhp = 56.3');


// 37. Current timestamp
console.log('37. let timestamp = Date.now();');


// 38. Function for factorial
console.log('38. let factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));');


// 39. Placeholder for response
console.log('39. let response;');


// 40. Spark vibe
console.log('40. let vibe = "🔥 Flow state";');


// 41. Messages count
console.log('41. let messages = 5;');


// 42. Province
console.log('42. let province = "Laguna";');


// 43. Boolean GPS status
console.log('43. let gpsEnabled = true;');


// 44. Games array
console.log('44. let games = ["Valorant", "Tekken", "Street Fighter"];');


// 45. Pet object
console.log('45. let pet = { type: "Dog", name: "Bolt" };');


// 46. Random integer
console.log('46. let randInt = Math.floor(Math.random() * 50);');


// 47. Current timezone
console.log('47. let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;');


// 48. Function for average
console.log('48. let average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;');


// 49. Placeholder for token
console.log('49. let authToken;');


// 50. Spark lock
console.log('50. let sparkLock = "Shrine ladder locked 🔥";');


















console.log('CONST - Once you declare a variable with const, you cannot reassign it to a different value.');

const x = 10;
// x = 20;  ❌ Error: Assignment to constant variable


console.log('BLOCK SCOPE Like let, CONST is scoped to the block {} where it’s declared.');
{
  const flame = "🔥";
  console.log(flame); // works
}
//console.log(flame); // ❌ ReferenceError


console.log('Objects & arrays are still mutable - The binding is locked, but the contents can change.');

const shrine = { flame: "steady" };
shrine.flame = "cosmic"; // ✅ allowed
//shrine = {}; // ❌ Error: cannot reassign


console.log('Must be initialized - You can’t declare a const without giving it a value right away.');
// const spark; // ❌ Error
const spark = "ignition"; // ✅


console.log('Tips - Use const for values that should never be reassigned — configs, constants, utility functions, shrine glyphs.');
console.log('Tips - Use let when you need mutable bindings that change over time.');


console.log('CONST VARIABLE SAMPLES');


// 1. Pi constant
const PI = 3.14159;

// 2. App name
const APP_NAME = "Spark Shrine";

// 3. Boolean flag
const IS_ACTIVE = true;

// 4. Fruits array
const FRUITS = ["Apple", "Banana", "Mango"];

// 5. User object
const USER = { id: 1, name: "Flo" };

// 6. Greeting string
const GREETING = "Eyy Spark!";

// 7. Max score
const MAX_SCORE = 100;

// 8. Addition function
const add = (a, b) => a + b;

// 9. API base URL
const API_URL = "https://api.shrine.dev";

// 10. Immutable token
const TOKEN = "abc123xyz";

// 11. Days of week
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// 12. Default role
const ROLE = "developer";

// 13. Exchange rate
const USD_TO_PHP = 56.25;

// 14. Coordinates
const ORIGIN = { x: 0, y: 0 };

// 15. Multiplication function
const multiply = (a, b) => a * b;

// 16. Colors array
const COLORS = ["Red", "Green", "Blue"];

// 17. Version number
const VERSION = "1.0.0";

// 18. Admin flag
const IS_ADMIN = false;

// 19. Inventory
const INVENTORY = ["Sword", "Shield", "Potion"];

// 20. Mantra
const MANTRA = "Climb steady, shrine flame lit";

// 21. Immutable country
const COUNTRY = "Philippines";

// 22. Immutable city
const CITY = "Santa Rosa";

// 23. Immutable birth year
const BIRTH_YEAR = 2000;

// 24. Immutable zodiac
const ZODIAC = "Leo";

// 25. Immutable language
const LANGUAGE = "JavaScript";

// 26. Immutable framework
const FRAMEWORK = "React";

// 27. Immutable database
const DATABASE = "Firebase";

// 28. Immutable OS
const OS = "Windows 10";

// 29. Immutable browser
const BROWSER = "Edge";

// 30. Immutable planet
const PLANET = "Earth";

// 31. Immutable star
const STAR = "Sun";

// 32. Immutable galaxy
const GALAXY = "Milky Way";

// 33. Immutable constant speed of light
const SPEED_OF_LIGHT = 299792458;

// 34. Immutable gravity
const GRAVITY = 9.81;

// 35. Immutable Avogadro number
const AVOGADRO = 6.022e23;

// 36. Immutable Planck constant
const PLANCK = 6.626e-34;

// 37. Immutable Boltzmann constant
const BOLTZMANN = 1.38e-23;

// 38. Immutable Euler number
const E = 2.71828;

// 39. Immutable Golden ratio
const PHI = 1.61803;

// 40. Immutable spark chant
const CHANT = "Shrine flame steady 🔥";

// 41. Immutable motto
const MOTTO = "Code, Debug, Deploy";

// 42. Immutable currency
const CURRENCY1 = "PHP";

// 43. Immutable timezone
const TIMEZONE3 = "Asia/Manila";

// 44. Immutable port
const PORT = 8080;

// 45. Immutable protocol
const PROTOCOL = "https";

// 46. Immutable domain
const DOMAIN = "spark.dev";

// 47. Immutable file extension
const EXT = ".js";

// 48. Immutable encoding
const ENCODING = "UTF-8";

// 49. Immutable status
const STATUS = "success";

// 50. Immutable spark glyph
const SPARK_GLYPH = "🔥 Shrine Ladder Glyph";


// 1. Score tracker
const SCORE = 0;

// 2. Nickname
const NICKNAME = "EyySpark";

// 3. Boolean sound toggle
const SOUND_ON = true;

// 4. Playlist array
const PLAYLIST = ["Lo-fi", "Jazz Fusion", "Metal"];

// 5. Config object
const CONFIG = { debug: true, version: "1.0.0" };

// 6. Pi constant (approx)
const PI_VALUE = 3.14159;

// 7. Current minute
const MINUTE = new Date().getMinutes();

// 8. Function for modulus
const mod = (a, b) => a % b;

// 9. Password placeholder
const PASSWORD = "********";

// 10. Spark chant
const CHANT1 = "Shrine flame steady 🔥";

// 11. Immutable motto
const MOTTO1 = "Code, Debug, Deploy";

// 12. Immutable currency
const CURRENCY = "USD";

// 13. Immutable timezone
const TIMEZONE = "UTC";

// 14. Immutable port
const PORT1 = 3000;

// 15. Immutable protocol
const PROTOCOL1 = "https";

// 16. Immutable domain
const DOMAIN1 = "spark.dev";

// 17. Immutable file extension
const EXT1 = ".jsx";

// 18. Immutable encoding
const ENCODING1 = "UTF-8";

// 19. Immutable status
const STATUS1 = "pending";

// 20. Immutable spark glyph
const GLYPH = "🔥";

// 21. Immutable framework
const FRAMEWORK1 = "Next.js";

// 22. Immutable library
const LIBRARY = "React";

// 23. Immutable database
const DB = "MongoDB";

// 24. Immutable OS
const OS1 = "Linux";

// 25. Immutable browser
const BROWSER1 = "Chrome";

// 26. Immutable device
const DEVICE = "Laptop";

// 27. Immutable planet
const PLANET1 = "Mars";

// 28. Immutable star
const STAR1 = "Polaris";

// 29. Immutable galaxy
const GALAXY1 = "Andromeda";

// 30. Immutable universe
const UNIVERSE = "Observable";

// 31. Immutable light speed
const C = 299792458;

// 32. Immutable gravity
const G = 9.81;

// 33. Immutable Avogadro number
const NA = 6.022e23;

// 34. Immutable Planck constant
const H = 6.626e-34;

// 35. Immutable Boltzmann constant
const KB = 1.38e-23;

// 36. Immutable Euler number
const E1 = 2.71828;

// 37. Immutable Golden ratio
const PHI1 = 1.61803;

// 38. Immutable spark mantra
const MANTRA1 = "Ignite the shrine flame";

// 39. Immutable motto 2
const MOTTO2 = "Stay steady, climb high";

// 40. Immutable currency 2
const CURRENCY2 = "EUR";

// 41. Immutable timezone 2
const TIMEZONE2 = "Asia/Manila";

// 42. Immutable port 2
const PORT2 = 5000;

// 43. Immutable protocol 2
const PROTOCOL2 = "http";

// 44. Immutable domain 2
const DOMAIN2 = "eyyspark.com";

// 45. Immutable file extension 2
const EXT2 = ".ts";

// 46. Immutable encoding 2
const ENCODING2 = "ASCII";

// 47. Immutable status 2
const STATUS2 = "success";

// 48. Immutable spark glyph 2
const GLYPH2 = "⚡";

// 49. Immutable shrine chant
const SHRINE_CHANT = "Climb steady, glyph lit";

// 50. Immutable spark sigil
console.log('50. const SIGIL = "✨";');












console.log('ARROW FUNCTIONS');

console.log('ARROW FUNCTIONS CORE - Concise Syntax → Introduced in ES6, arrow functions use the => glyph instead of the function keyword.');
console.log('CONCISE SYNTAX - means writing code in a shorter, cleaner, and more readable way without changing its functionality.');
console.log('const add = (a, b) => a + b');
console.log('LEXICAL - this Binding → Arrow functions don’t create their own this; they inherit it from the surrounding scope. This avoids common callback bugs.');
console.log('In JavaScript, LEXICAL scope (also called static scope) means that the accessibility of variables is determined by their location in the source code at the time of definition, not at runtime. Inner functions have access to variables declared in their outer functions, forming a scope chain that is fixed during compilation.');

const obj = {
  value: 42,
  getValue: () => this.value // ❌ undefined, because `this` is outer scope
};


console.log('Always Expressions → Arrow functions are not declarations; they must be assigned or used inline.');
const square = x => x * x;


console.log('No arguments Object → They don’t have their own arguments, but you can use rest parameters.');
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);


console.log('Cannot Be Constructors → You can’t use new with arrow functions.');
const Person = (name) => { this.name = name }; // ❌ Error

console.log('Arrow functions = shorter, cleaner syntax with lexical this binding, perfect for callbacks, array methods (map, filter, reduce), and React props/hooks.');

















console.log('DESTRUCTURING CORE DEFINITION');
console.log('Unpack values from arrays or objects directly into variables.');
console.log('Objects → match by key names.');
console.log('Arrays → match by position.');
console.log('Functions → destructure props/args inline.');
console.log('Cuts down dot‑notation climbing and index juggling.');

// Object destructuring
const user = { id: 1, name: "Flo" };
const { id, name } = user; // id=1, name="Flo"

// Array destructuring
const coords = [10, 20, 30];
const [x1, y] = coords; // x=10, y=20

// Function parameter destructuring
const greet = ({ name }) => `Hello ${name}`;


console.log('50 Core Destructuring Samples');


// 1. Object basic
const { length } = "Spark";

// 2. Array basic
const [first, second] = [1, 2];

// 3. Nested object
const person = { info: { age: 25 } };
const { info: { age } } = person;

// 4. Nested array
const matrix = [[1, 2], [3, 4]];
const [[a, b], [c, d]] = matrix;

// 5. Default value
const { role = "guest" } = {};

// 6. Rename key
const { name: username } = { name: "Flo" };

// 7. Rest object
const { x2, ...others } = { x: 1, y: 2, z: 3 };

// 8. Rest array
const [head, ...tail] = [10, 20, 30, 40];

// 9. Function params
const sum1 = ({ a, b }) => a + b;

// 10. Array skip
const [,, third] = ["a", "b", "c"];

// 11. Object in function
const printUser = ({ id, name }) => `${id}-${name}`;

// 12. Multiple defaults
const { lang = "JS", level = "beginner" } = {};

// 13. Nested rename
const obj1 = { data: { val: 42 } };
const { data: { val: answer } } = obj1;

// 14. Array with default
const [p = 1, q = 2] = [10];

// 15. Object shorthand
const { toString } = Number;

// 16. Array rest in func
const logAll = ([first, ...rest]) => console.log(first, rest);

// 17. Destructure return
const getCoords = () => [5, 10];
const [cx, cy] = getCoords();

// 18. Object return
const getUser = () => ({ id: 7, name: "Spark" });
const { id: uid, name: uname } = getUser();

// 19. Deep nested
const deep = { a: { b: { c: 9 } } };
const { a: { b: { c1 } } } = deep;

// 20. Array nested skip
const arr = [1, [2, 3]];
const [num, [inner1, inner2]] = arr;

// 21. Object alias
const { PI: pi } = Math;

// 22. Array alias
const [val1, val2] = ["🔥", "⚡"];

// 23. Object with spread
const { max, ...restMath } = Math;

// 24. Array with spread
const [one, two, ...nums] = [1, 2, 3, 4, 5];

// 25. Function destructure default
const greetUser = ({ name = "Guest" }) => `Hi ${name}`;

// 26. Object multiple
const { floor, ceil } = Math;

// 27. Array multiple
const [alpha, beta, gamma] = ["a", "b", "c"];

// 28. Object nested default
const { settings: { theme = "dark" } = {} } = {};

// 29. Array nested default
const [[x3 = 0], [y2 = 0]] = [[10], []];

// 30. Object param rename
const show = ({ id: identifier }) => identifier;

// 31. Array param
const firstTwo = ([a, b]) => a + b;

// 32. Object param deep
const deepFunc = ({ a: { b } }) => b;

// 33. Array param deep
const nestedFunc = ([[x]]) => x;

// 34. Object with null
const { prop = "default" } = null || {};

// 35. Array with null
const [val = "default"] = null || [];

// 36. Object freeze
const { random } = Math;

// 37. Array freeze
const [min, max1] = [Math.min(1,2), Math.max(1,2)];

// 38. Object destructure string
const { length: strLen } = "Spark";

// 39. Array destructure string
const [c3, c2] = "Hi";

// 40. Object destructure array
const { 0: firstEl } = ["🔥"];

// 41. Array destructure object
const { key1, key2 } = { key1: "A", key2: "B" };

// 42. Object destructure func
const { log } = console;

// 43. Array destructure func
const [sin, cos] = [Math.sin, Math.cos];

// 44. Object destructure nested func
const { abs } = Math;

// 45. Array destructure nested func
const [pow, sqrt] = [Math.pow, Math.sqrt];

// 46. Object destructure regex
const { source } = /spark/;

// 47. Array destructure regex
const [char1, char2] = "🔥⚡";

// 48. Object destructure date
const { year } = { year: new Date().getFullYear() };

// 49. Array destructure date
const [day, month] = [new Date().getDay(), new Date().getMonth()];

// 50. Object destructure nested array
console.log('const { arrVals: [valA, valB] } = { arrVals: [1, 2] };');



console.log('Destructuring = unpack values cleanly.');

console.log('Cuts clutter, boosts readability, and fuels shrine‑level React props/hooks.');




















console.log('SPREAD OPERATOR CORE DEFINTION');
console.log('Expands values out of arrays or objects into individual elements.');
console.log('Syntax: ... (triple dot).');
console.log('Common shrine uses:');
console.log('Clone arrays/objects.');
console.log('Merge arrays/objects.');
console.log('Pass array elements as function arguments.');
console.log('Spread props in React components.');


// Array expansion
const arr1 = [1, 2, 3];
const newArr = [...arr, 4]; // [1,2,3,4]

// Object expansion
const user1 = { name: "Flo", age: 39 };
const clone = { ...user, verified: true };


console.log('50 SPREAD OPERATOR SAMPLES');
// 1. Clone array
const nums1 = [1,2,3];
const cloneNums = [...nums];

// 2. Merge arrays
const a1 = [1], b2 = [2,3];
const merged = [...a1, ...b2];

// 3. Add element
const arr2 = [1,2];
const extended = [...arr, 3];

// 4. Spread in function args
const values = [5,10];
const sum2 = (x,y) => x+y;
sum(...values);

// 5. Clone object
const obj2 = {x:1,y:2};
const cloneObj = {...obj};

// 6. Merge objects
const o1 = {a:1}, o2 = {b:2};
const mergedObj = {...o1, ...o2};

// 7. Override property
const base = {role:"user"};
const admin = {...base, role:"admin"};

// 8. Spread string to array
const chars = [..."Spark"];

// 9. Spread set to array
const set = new Set([1,2,3]);
const arrSet = [...set];

// 10. Spread map keys
const map = new Map([["a",1],["b",2]]);
const keys = [...map.keys()];

// 11. Spread map values
const valuesMap = [...map.values()];

// 12. Spread map entries
const entries = [...map.entries()];

// 13. Spread arguments
function logAll1(...args) {
  console.log([...args]);
}

// 14. Spread default
const baseArr = [1,2];
const withDefault = [...baseArr, 0];

// 15. Spread nested arrays
const nested = [[1],[2]];
const flat = [...nested[0], ...nested[1]];

// 16. Spread in Math.max
const nums2 = [4,7,1];
const maxVal = Math.max(...nums2);

// 17. Spread in Math.min
const minVal = Math.min(...nums2);

// 18. Spread in new array
const arr3 = [...[10,20],30];

// 19. Spread in object literal
const obj3 = {...{a:1}, b:2};

// 20. Spread with rest
const [first1,...rest] = [...[1,2,3]];

// 21. Spread in React props
const props = {id:1,name:"Flo"};
console.log('const element = <Component {...props} />;');


// 22. Spread with conditional
const flag = true;
const obj4 = {...(flag ? {a:1} : {})};

// 23. Spread with nullish
const obj5 = {...null || {}};

// 24. Spread with array concat
const arr4 = [1,...[2,3],4];

// 25. Spread with object concat
const obj6 = {x:1,...{y:2},z:3};

// 26. Spread with function return
const getArr = () => [1,2];
const arr5 = [...getArr()];

// 27. Spread with generator
console.log('function* gen() { yield 1; yield 2; }');
console.log('const arr6 = [...gen()];');



// 28. Spread with promise all
console.log('const promises = [Promise.resolve(1)];');
console.log('const results = [...await Promise.all(promises)];');



// 29. Spread with array copy
const copy = [...arr];

// 30. Spread with object copy
const copyObj = {...obj};

// 31. Spread with nested object
const nestedObj = {a:{b:1}};
const cloneNested = {...nestedObj};

// 32. Spread with array destructure
const [x4,...y4] = [...[1,2,3]];

// 33. Spread with string destructure
const [c4,...restChars] = [..."🔥⚡"];

// 34. Spread with set destructure
const [s1,...sRest] = [...new Set([1,2,3])];

// 35. Spread with map destructure
const [[k,v],...mRest] = [...map];

// 36. Spread with object merge deep
const deep1 = {a:{x:1}};
const deep2 = {a:{y:2}};
const mergedDeep = {...deep1,...deep2};

// 37. Spread with array merge deep
const arrDeep1 = [[1,2]];
const arrDeep2 = [[3,4]];
const mergedDeepArr = [...arrDeep1,...arrDeep2];

// 38. Spread with function args inline
Math.max(...[1,2,3]);

// 39. Spread with array literal inline
const arrInline = [...[..."Spark"]];

// 40. Spread with object literal inline
const objInline = {...{lang:"JS"}};

// 41. Spread with conditional array
const arrCond = [...(true ? [1] : [])];

// 42. Spread with conditional object
const objCond = {...(false ? {a:1} : {})};

// 43. Spread with array push
const arrPush = [...[1,2],...[3,4]];

// 44. Spread with object push
const objPush = {...{a:1},...{b:2}};

// 45. Spread with array clone slice
const arrClone = [...[...arr]];

// 46. Spread with object clone assign
const objClone = {...{...obj}};

// 47. Spread with array flatten
const flatArr = [...[...[1,2]],...[3,4]];

// 48. Spread with object flatten
const flatObj = {...{...{a:1}},...{b:2}};

// 49. Spread with array join
const arrJoin = [...[1,2],...[3,4]];

// 50. Spread with object join
const objJoin = {...{x:1},...{y:2}};




















console.log('REST OPERATOR CORE DEFINITION');
console.log('Collection glyph: ... gathers multiple elements into a single array or object.');
console.log('Works in array destructuring, object destructuring, and function parameters.');
console.log('Opposite of spread: instead of expanding, it absorbs.');

// Array rest
const [head1, ...tail1] = [10,20,30]; // head=10, tail=[20,30]

// Object rest
const {x5, ...others1} = {x:1,y:2,z:3}; // x=1, others={y:2,z:3}

// Function rest params
const sum3 = (...nums) => nums.reduce((a,b)=>a+b,0);


console.log('50 REST OPERATOR SAMPLES');

// 1. Array rest basic
const [a2,...b3] = [1,2,3];

// 2. Object rest basic
const {id1,...profile} = {id:1,name:"Flo",age:18};

// 3. Function rest params
const logAll2 = (...items) => console.log(items);

// 4. Array skip with rest
const [,,...restArr] = [1,2,3,4];

// 5. Object skip with rest
const {x6,...restObj} = {x:1,y:2,z:3};

// 6. Rest with default
const [p1=1,...q1] = [10];

// 7. Nested array rest
const [[first2,...others2],last] = [[1,2,3],4];

// 8. Nested object rest
const {info,...restInfo} = {info:{age:20},role:"dev"};

// 9. Rest with string
const [ch,...restStr] = "Spark";

// 10. Rest with set
const [s,...sRest1] = [...new Set([1,2,3])];

// 11. Rest with map
const [[k1,v1],...mRest1] = [...new Map([["a",1],["b",2]])];

// 12. Rest in React props
console.log('const Comp = ({id,...props}) => <div {...props}>{id}</div>;');


// 13. Rest with array destructure
const [head2,...tail2] = ["🔥","⚡","✨"];

// 14. Rest with object destructure
const {lang1,...restLang} = {lang:"JS",level:"beginner"};

// 15. Rest with function args inline
const join = (...parts) => parts.join("-");

// 16. Rest with regex
const [char,...regexRest] = [..."🔥⚡✨"];

// 17. Rest with date
const [day1,...restDate] = [new Date().getDay(),new Date().getMonth(),new Date().getFullYear()];

// 18. Rest with nested destructure
const [x7,...[y7,z]] = [1,[2,3]];

// 19. Rest with spread combo
const [h,...t] = [...[10,20,30]];

// 20. Rest with string destructure
const [letter,...letters] = [..."JS"];

// 21. Rest with array destructure
const [num1,...numsRest] = [100,200,300];

// 22. Rest with object destructure
const {role1,...restRole} = {role:"admin",active:true};

// 23. Rest with function default
const greet1 = (first,...others) => `Hi ${first}, others: ${others}`;

// 24. Rest with nested array default
const [a3,...aRest] = [1,...[2,3]];

// 25. Rest with nested object default
const {p2,...restFlat} = {...{p:1,q:2},r:3};

// 26. Rest with array flatten
const [one1,...othersFlat] = [1,...[2,3]];

// 27. Rest with object flatten
const {p3,...restFlat2} = {...{p:1,q:2},r:3};

// 28. Rest with multiple params
const fn = (x,y,...rest) => rest;

// 29. Rest with array alias
const [firstNum,...numsAlias] = [5,6,7,8];

// 30. Rest with object alias
const {a4,...aliasRest} = {a:1,b:2,c:3};

// 31. Rest with string alias
const [firstChar,...aliasChars] = "Spark";

// 32. Rest with set alias
const [firstSet,...aliasSet] = [...new Set([10,20,30])];

// 33. Rest with map alias
const [[key,val3],...aliasMap] = [...new Map([["x",1],["y",2]])];

// 34. Rest with nested function
const fn2 = ([first,...rest]) => rest;

// 35. Rest with nested object function
const fn3 = ({id,...rest}) => rest;

// 36. Rest with array in function
const fn4 = (...arr) => arr.length;

// 37. Rest with object in function
const fn5 = ({a,...rest}) => rest;

// 38. Rest with string in function
const fn6 = (...chars) => chars.join("");

// 39. Rest with set in function
const fn7 = (...vals) => vals.reduce((a,b)=>a+b,0);

// 40. Rest with map in function
const fn8 = (...entries) => entries;

// 41. Rest with array skip
const [,,...skipRest] = [1,2,3,4,5];

// 42. Rest with object skip
const {a5,...skipObj} = {a:1,b:2,c:3,d:4};

// 43. Rest with string skip
const [,,...skipChars] = "Spark";

// 44. Rest with set skip
const [,,...skipSet] = [...new Set([1,2,3,4])];

// 45. Rest with map skip
const [[,],...skipMap] = [...new Map([["a",1],["b",2],["c",3]])];

// 46. Rest with array join
const [firstJoin,...restJoin] = [1,2,3,4];

// 47. Rest with object join
const {x8,...restJoinObj} = {x1:1,y1:2,z1:3};

// 48. Rest with string join
const [firstJoinChar,...restJoinChars] = "Join";

// 49. Rest with set join
const [firstJoinSet,...restJoinSet] = [...new Set([5,6,7,8])];

// 50. Rest with map join
const [[key3,val4],...restJoinMap] = [...new Map([["a",1],["b",2],["c",3]])];











console.log('ASYNC MASTERY');
console.log('PROMISES, CALLBACKS, ASYNC/AWAIT');


console.log('PROMISES - A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.');
console.log('States:');
console.log('Pending → initial state.');
console.log('Fulfilled → operation completed successfully.');
console.log('Rejected → operation failed.');
console.log('Methods:');
console.log('.then() → handle fulfillment.');
console.log('.catch() → handle rejection.');
console.log('.finally() → run cleanup regardless of outcome.');


const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("🔥 Success"), 1000);
});

promise
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));



console.log('50 PROMISES SAMPLES');
// 1. Basic resolve
const p6 = Promise.resolve("Spark");

// 2. Basic reject
console.log('const p7 = Promise.reject("Error");');


// 3. New Promise
const p8 = new Promise(res => res(42));

// 4. Timeout resolve
const p4 = new Promise(res => setTimeout(()=>res("Done"),1000));

// 5. Timeout reject
const p5 = new Promise((_,rej)=>setTimeout(()=>rej("Fail"),1000));

// 6. Then chain
console.log('p1.then(v=>v+"🔥").then(v=>console.log(v));');



// 7. Catch error
console.log('p2.catch(e=>console.error(e));');


// 8. Finally cleanup
console.log('p1.finally(()=>console.log("Cleanup"));');


// 9. Promise.all
Promise.all([p1,p3]).then(console.log);

// 10. Promise.race
Promise.race([p4,p5]).then(console.log).catch(console.error);

// 11. Promise.allSettled
Promise.allSettled([p1,p2]).then(console.log);

// 12. Async function return
async function f1(){return "Async Spark";}

// 13. Await resolve
(async()=>{console.log(await p1);})();

// 14. Await reject
(async()=>{try{await p2;}catch(e){console.error(e);}})();

// 15. Chained async
console.log('p3.then(v=>v*2).then(console.log);');


// 16. Nested promises
console.log('p1.then(v=>Promise.resolve(v+" Nested")).then(console.log);');


// 17. Promise in loop
[1,2,3].map(n=>Promise.resolve(n)).forEach(p=>p.then(console.log));

// 18. Promise with fetch (mock)
const pFetch = Promise.resolve({data:"ok"});
pFetch.then(r=>console.log(r.data));

// 19. Promise with JSON
Promise.resolve(JSON.stringify({a:1})).then(console.log);

// 20. Promise with parse
Promise.resolve('{"a":1}').then(JSON.parse).then(console.log);

// 21. Promise with map
Promise.resolve([1,2,3]).then(arr=>arr.map(x=>x*2)).then(console.log);

// 22. Promise with reduce
Promise.resolve([1,2,3]).then(arr=>arr.reduce((a,b)=>a+b)).then(console.log);

// 23. Promise with filter
Promise.resolve([1,2,3]).then(arr=>arr.filter(x=>x>1)).then(console.log);

// 24. Promise with object
Promise.resolve({id:1,name:"Flo"}).then(console.log);

// 25. Promise with destructure
Promise.resolve({x:10,y:20}).then(({x,y})=>console.log(x+y));

// 26. Promise with spread
Promise.resolve([..."Spark"]).then(console.log);

// 27. Promise with rest
Promise.resolve([1,2,3]).then(([h,...t])=>console.log(h,t));

// 28. Promise with arrow
Promise.resolve(5).then(x=>x*2).then(console.log);

// 29. Promise with async arrow

console.log('(async()=>console.log(await Promise.resolve("Arrow")))();');

// 30. Promise with error throw
console.log('Promise.resolve().then(()=>{throw "🔥 Error";}).catch(console.error);');


// 31. Promise with try/catch
console.log('(async()=>{try{await Promise.reject("Fail");}catch(e){console.error(e);}})();');


// 32. Promise with finally async
(async()=>{await Promise.resolve("Done");console.log("Cleanup");})();

// 33. Promise chain math
Promise.resolve(2).then(x=>x**3).then(console.log);

// 34. Promise chain string
Promise.resolve("Spark").then(s=>s+" Flame").then(console.log);

// 35. Promise chain boolean
Promise.resolve(true).then(b=>!b).then(console.log);

// 36. Promise chain array
Promise.resolve([1]).then(a=>[...a,2]).then(console.log);

// 37. Promise chain object
Promise.resolve({a:1}).then(o=>({...o,b:2})).then(console.log);

// 38. Promise chain nested
Promise.resolve(1).then(x=>Promise.resolve(x+1)).then(console.log);

// 39. Promise chain multiple
Promise.resolve(1).then(x=>x+1).then(x=>x+2).then(console.log);

// 40. Promise chain async
(async()=>{const v=await Promise.resolve(10);console.log(v*2);})();

// 41. Promise with setTimeout
new Promise(res=>setTimeout(()=>res("Later"),500)).then(console.log);

// 42. Promise with interval (mock)
const pInt = new Promise(res=>setTimeout(()=>res("Tick"),100));
pInt.then(console.log);

// 43. Promise with event (mock)
const pEvent = Promise.resolve("Event Fired");
pEvent.then(console.log);

// 44. Promise with DOM (mock)
Promise.resolve("<div>🔥</div>").then(console.log);

// 45. Promise with API (mock)
Promise.resolve({status:200}).then(r=>console.log(r.status));

// 46. Promise with DB (mock)
Promise.resolve({rows:[1,2]}).then(r=>console.log(r.rows));

// 47. Promise with file (mock)
Promise.resolve("File.txt").then(console.log);

// 48. Promise with network (mock)
Promise.resolve("Connected").then(console.log);

// 49. Promise with cache (mock)
Promise.resolve("Cached").then(console.log);

// 50. Promise with log
Promise.resolve("Shrine Flame").then(console.log);

















console.log('CALLBACKS CORE DEFINITION');
console.log('A callback is a function passed as an argument to another function, to be called later once an operation completes.');
console.log('They’re the original async glyphs in JavaScript before Promises and async/await.');
console.log('Common shrine uses: event handling, timers, async tasks, array methods.');

function greet2(name, callback) {
  console.log("Hello " + name);
  callback();
}

console.log('greet3("Flo", () => console.log("Shrine flame lit 🔥"));');



console.log('50 Callbacks Samples');

// 1. Basic callback
function sayHi(cb){cb();}
sayHi(()=>console.log("Hi"));

// 2. Callback with param
function greet5(name,cb){cb(name);}
greet5("Flo",n=>console.log("Hello "+n));

// 3. Timer callback
console.log('setTimeout(()=>console.log("Later"),1000);');


// 4. Interval callback
console.log('setInterval(()=>console.log("Tick"),1000);');


// 5. Event callback (mock)
document.addEventListener("click",()=>console.log("Clicked"));

// 6. Array map callback
[1,2,3].map(x=>console.log(x*2));

// 7. Array filter callback
[1,2,3].filter(x=>x>1).forEach(console.log);

// 8. Array reduce callback
[1,2,3].reduce((a,b)=>a+b,0);

// 9. Custom callback
function process(x,cb){cb(x*2);}
process(5,r=>console.log(r));

// 10. Nested callbacks
function step1(cb){cb("Step1");}
step1(r=>step2(r));
function step2(msg){console.log(msg+" done");}

// 11. Error callback
console.log('function risky(cb){cb("Error",null);}');
console.log('risky((err,res)=>{if(err)console.error(err);});');



// 12. Success callback
function safe(cb){cb(null,"OK");}
safe((err,res)=>console.log(res));

// 13. Callback in loop
[1,2,3].forEach(n=>console.log(n));

// 14. Callback in sort
[3,1,2].sort((a,b)=>a-b);

// 15. Callback in find
[1,2,3].find(x=>x===2);

// 16. Callback in every
[1,2,3].every(x=>x>0);

// 17. Callback in some
[1,2,3].some(x=>x>2);

// 18. Callback in forEach
["🔥","⚡"].forEach(s=>console.log(s));

// 19. Callback in custom async
function asyncTask(cb){setTimeout(()=>cb("Done"),500);}
asyncTask(console.log);

// 20. Callback with multiple params
function calc(a,b,cb){cb(a+b);}
calc(2,3,r=>console.log(r));

// 21. Callback with object
function show1(obj,cb){cb(obj);}
show({id:1},o=>console.log(o.id));

// 22. Callback with array
function list(arr,cb){arr.forEach(cb);}
list([1,2],x=>console.log(x));

// 23. Callback with string
function shout(str,cb){cb(str.toUpperCase());}
shout("spark",console.log);

// 24. Callback with boolean
function check(val,cb){cb(val);}
check(true,console.log);

// 25. Callback with number
function double(n,cb){cb(n*2);}
double(5,console.log);

// 26. Callback with nested async
function async1(cb){setTimeout(()=>cb("A"),100);}
function async2(cb){setTimeout(()=>cb("B"),200);}
async1(r=>async2(s=>console.log(r+s)));

// 27. Callback with error handling
function task(cb){try{cb(null,"OK");}catch(e){cb(e);}}
task((err,res)=>console.log(res));

// 28. Callback with promise wrapper
function legacy(cb){setTimeout(()=>cb("Old"),100);}
const p9 = new Promise(res=>legacy(r=>res(r)));

// 29. Callback with DOM mock
function onClick(cb){cb("Clicked");}
onClick(console.log);

// 30. Callback with math
function compute(a,b,cb){cb(a*b);}
compute(3,4,console.log);

// 31. Callback with JSON
function toJSON(obj,cb){cb(JSON.stringify(obj));}
toJSON({a:1},console.log);

// 32. Callback with parse
function parse(str,cb){cb(JSON.parse(str));}
parse('{"a":1}',console.log);

// 33. Callback with regex
function match(str,cb){cb(/a/.test(str));}
match("spark",console.log);

// 34. Callback with date
function now(cb){cb(new Date());}
now(console.log);

// 35. Callback with setTimeout chain
setTimeout(()=>setTimeout(()=>console.log("Chain"),100),100);

// 36. Callback with setInterval clear
console.log('const id2=setInterval(()=>console.log("Loop"),100);');

setTimeout(()=>clearInterval(id),500);

// 37. Callback with animation mock
function animate(cb){cb("Frame1");}
animate(console.log);

// 38. Callback with API mock
function fetchData(cb){cb({status:200});}
fetchData(console.log);

// 39. Callback with DB mock
function query(cb){cb([{id:1}]);}
query(console.log);

// 40. Callback with file mock
function readFile(cb){cb("File.txt");}
readFile(console.log);

// 41. Callback with network mock
function connect(cb){cb("Connected");}
connect(console.log);

// 42. Callback with cache mock
function cache(cb){cb("Cached");}
cache(console.log);

// 43. Callback with log
function log1(cb){cb("Shrine Flame");}
log(console.log);

// 44. Callback with math random
function rand(cb){cb(Math.random());}
rand(console.log);

// 45. Callback with setImmediate mock
function immediate(cb){cb("Immediate");}
immediate(console.log);

// 46. Callback with microtask mock
Promise.resolve().then(()=>console.log("Microtask"));

// 47. Callback with event loop mock
setTimeout(()=>console.log("EventLoop"),0);

// 48. Callback with nested arrays
function flatten(arr,cb){cb(arr.flat());}
flatten([[1],[2]],console.log);

// 49. Callback with nested objects
function merge(o1,o2,cb){cb({...o1,...o2});}
merge({a:1},{b:2},console.log);

// 50. Callback with async/await wrapper
async function wrap(){return new Promise(res=>setTimeout(()=>res("Wrapped"),100));}
wrap().then(console.log);


















console.log('ASYNC/AWAIT CORE DEFINITION');
console.log('async keyword → declares a function that always returns a Promise.');
console.log('await keyword → pauses execution inside an async function until a Promise settles.');
console.log('Together they let you write asynchronous code that looks synchronous, avoiding messy .then() chains.');

async function fetchData() {
  const result = await Promise.resolve("🔥 Spark");
  console.log(result);
}


// 1. Basic async function
async function foo(){return "Spark";}

// 2. Await resolve
async function bar(){console.log(await Promise.resolve(42));}

// 3. Await reject
async function baz(){try{await Promise.reject("Error");}catch(e){console.error(e);}}

// 4. Async arrow
const fn1 = async()=>await Promise.resolve("Arrow");

// 5. Async return value
async function val5(){return 10;}
val5().then(console.log);

// 6. Await multiple
async function multi(){
  const a=await Promise.resolve(1);
  const b=await Promise.resolve(2);
  console.log(a+b);
}

// 7. Await in loop
async function loop(){
  for(const n of [1,2]){console.log(await Promise.resolve(n));}
}

// 8. Await array map
async function map1(){
  const arr=[1,2,3];
  const res=await Promise.all(arr.map(x=>Promise.resolve(x*2)));
  console.log(res);
}

// 9. Await object destructure
async function obj7(){
  const {id}=await Promise.resolve({id:7});
  console.log(id);
}

// 10. Await array destructure
async function arr8(){
  const [x,y]=await Promise.resolve([10,20]);
  console.log(x+y);
}

// 11. Await with spread
async function spread(){
  const chars=await Promise.resolve([... "Spark"]);
  console.log(chars);
}

// 12. Await with rest
async function rest1(){
  const [h,...t]=await Promise.resolve([1,2,3]);
  console.log(h,t);
}

// 13. Await with JSON
async function json(){
  const data=await Promise.resolve('{"a":1}');
  console.log(JSON.parse(data));
}

// 14. Await with fetch mock
async function fetchMock(){
  const res=await Promise.resolve({status:200});
  console.log(res.status);
}

// 15. Await with try/catch
console.log(`async function safe(){
  try{await Promise.reject("Fail");}
  catch(e){console.error(e);}
}
`);

// 16. Await with finally
async function clean(){
  try{await Promise.resolve("Done");}
  finally{console.log("Cleanup");}
}

// 17. Await with nested
async function nested1(){
  const v=await Promise.resolve(await Promise.resolve(5));
  console.log(v);
}

// 18. Await with chain
async function chain(){
  const v=await Promise.resolve(2);
  console.log(v**3);
}

// 19. Await with string
async function str(){
  const s=await Promise.resolve("Spark");
  console.log(s+" Flame");
}

// 20. Await with boolean
async function bool(){
  const b=await Promise.resolve(true);
  console.log(!b);
}

// 21. Await with array
async function arr8(){
  const a=await Promise.resolve([1]);
  console.log([...a,2]);
}

// 22. Await with object
async function obj9(){
  const o=await Promise.resolve({a:1});
  console.log({...o,b:2});
}

// 23. Await with nested object
async function deep4(){
  const d=await Promise.resolve({a:{b:9}});
  console.log(d.a.b);
}

// 24. Await with nested array
async function deepArr(){
  const d=await Promise.resolve([[1,2],[3,4]]);
  console.log(d[1][0]);
}

// 25. Await with math
async function math(){
  const n=await Promise.resolve(5);
  console.log(Math.pow(n,2));
}

// 26. Await with date
async function date(){
  const d=await Promise.resolve(new Date());
  console.log(d.getFullYear());
}

// 27. Await with regex
async function regex(){
  const r=await Promise.resolve(/spark/);
  console.log(r.test("spark"));
}

// 28. Await with set
async function set5(){
  const s=await Promise.resolve(new Set([1,2]));
  console.log([...s]);
}

// 29. Await with map
async function map2(){
  const m=await Promise.resolve(new Map([["a",1]]));
  console.log([...m.entries()]);
}

// 30. Await with generator mock
async function gen(){
  const g=await Promise.resolve([...(function*(){yield 1;yield 2;})()]);
  console.log(g);
}

// 31. Await with promise all
async function all(){
  const res=await Promise.all([Promise.resolve(1),Promise.resolve(2)]);
  console.log(res);
}

// 32. Await with promise race
async function race(){
  const res=await Promise.race([Promise.resolve("A"),Promise.resolve("B")]);
  console.log(res);
}

// 33. Await with allSettled
async function settled(){
  const res=await Promise.allSettled([Promise.resolve(1),Promise.reject("Err")]);
  console.log(res);
}

// 34. Await with async inside
async function inner(){
  const v=await (async()=>42)();
  console.log(v);
}

// 35. Await with async arrow inside
async function innerArrow(){
  const v=await (async()=> "Arrow")();
  console.log(v);
}

// 36. Await with callback wrapper
async function legacy(){
  const v=await new Promise(res=>setTimeout(()=>res("Old"),100));
  console.log(v);
}

// 37. Await with timeout
async function later(){
  const v=await new Promise(res=>setTimeout(()=>res("Later"),500));
  console.log(v);
}

// 38. Await with interval mock
async function tick(){
  const v=await Promise.resolve("Tick");
  console.log(v);
}

// 39. Await with event mock
async function event(){
  const v=await Promise.resolve("Event Fired");
  console.log(v);
}

// 40. Await with DOM mock
async function dom(){
  const v=await Promise.resolve("<div>🔥</div>");
  console.log(v);
}

// 41. Await with API mock
async function api(){
  const v=await Promise.resolve({status:200});
  console.log(v.status);
}

// 42. Await with DB mock
async function db(){
  const v=await Promise.resolve({rows:[1,2]});
  console.log(v.rows);
}

// 43. Await with file mock
async function file(){
  const v=await Promise.resolve("File.txt");
  console.log(v);
}

// 44. Await with network mock
async function net(){
  const v=await Promise.resolve("Connected");
  console.log(v);
}

// 45. Await with cache mock
async function cache(){
  const v=await Promise.resolve("Cached");
  console.log(v);
}

// 46. Await with log
async function log3(){
  const v=await Promise.resolve("Shrine Flame");
  console.log(v);
}

// 47. Await with random
async function rand(){
  const v=await Promise.resolve(Math.random());
  console.log(v);
}

// 48. Await with microtask
async function micro(){
  const v=await Promise.resolve("Microtask");
  console.log(v);
}

// 49. Await with event loop
async function loop2(){
  const v=await Promise.resolve("EventLoop");
  console.log(v);
}

// 50. Await with wrap
async function wrap(){
  const v=await new Promise(res=>setTimeout(()=>res("Wrapped"),100));
  console.log(v);
}













console.log('ARRAY METHODS CORE DEFINITION');
console.log('Array methods are built‑in functions in JavaScript that let you manipulate, transform, and query arrays without writing raw loops.');
console.log('They provide declarative, expressive operations for adding/removing elements, iterating, transforming, filtering, reducing, and searching.');
console.log('Core shrine insight: they turn arrays into powerful data pipelines, making code shorter, cleaner, and easier to reason about.');


console.log('JavaScript currently has over 30 built‑in array methods, and with ES2022–ES2023 updates, the number rises to around 40+ when you include newer immutable methods like toSorted, toReversed, toSpliced, and with. These methods cover iteration, searching, testing, transformation, and sorting operations.');

console.log(`Categories of Array Methods
1. Iteration & Transformation
forEach() → run a function on each element

map() → transform elements into a new array

filter() → keep elements that pass a test

flat() / flatMap() → flatten nested arrays

2. Searching & Indexing
find() / findIndex() → locate first match

findLast() / findLastIndex() → locate last match (ES2023)

indexOf() / lastIndexOf() → find positions

includes() → check if value exists

at() → access element by index (supports negatives)

3. Testing
some() → check if any element passes a test

every() → check if all elements pass a test

4. Adding & Removing
push() / pop() → add/remove from end

shift() / unshift() → remove/add from start

splice() → add/remove at specific positions

toSpliced() → immutable splice (ES2023)

concat() → merge arrays

5. Sorting & Reversing
sort() → order elements

reverse() → reverse in place

toSorted() → immutable sort (ES2023)

toReversed() → immutable reverse (ES2023)

6. Utility & Conversion
slice() → copy section

join() → glue into string

toString() / toLocaleString() → convert to string

fill() → overwrite with static value

copyWithin() → copy elements inside array

entries() / keys() / values() → iterators

reduce() / reduceRight() → fold into single value

Array.isArray() → check type

Array.from() / Array.of() → create arrays

with() → immutable replacement (ES2023)`);

















console.log('.map() CORE DEFINITION - .map() is an array method that creates a new array by applying a callback function to each element of the original array.');

console.log('It does not mutate the original array.');

console.log('Perfect for transformations: numbers → doubled, strings → formatted, objects → reshaped.');

// 1. Double numbers
[1,2,3].map(x => x*2); // [2,4,6]

// 2. Square numbers
[1,2,3].map(x => x**2); // [1,4,9]

// 3. Convert to strings
[1,2,3].map(String); // ["1","2","3"]

// 4. Add prefix
["a","b"].map(x => "item-" + x); // ["item-a","item-b"]

// 5. Boolean check
[1,2,3].map(x => x>1); // [false,true,true]

// 6. Length of strings
["hi","spark"].map(x => x.length); // [2,5]

// 7. Uppercase
["hi","men"].map(x => x.toUpperCase()); // ["HI","MEN"]

// 8. Lowercase
["HI","MEN"].map(x => x.toLowerCase()); // ["hi","men"]

// 9. Trim spaces
[" a "," b "].map(x => x.trim()); // ["a","b"]

// 10. Index mapping
[10,20].map((x,i)=>i); // [0,1]

// 11. Object transform
[{n:1},{n:2}].map(o=>o.n); // [1,2]

// 12. Add property
[1,2].map(x=>({val:x})); // [{val:1},{val:2}]

// 13. Math.abs
[-1,-2].map(Math.abs); // [1,2]

// 14. Date formatting
[new Date()].map(d=>d.getFullYear()); // [2026]

// 15. JSON stringify
[{a:1}].map(JSON.stringify); // ["{\"a\":1}"]

// 16. Repeat string
["a","b"].map(x=>x.repeat(3)); // ["aaa","bbb"]

// 17. Pad string
["1","2"].map(x=>x.padStart(2,"0")); // ["01","02"]

// 18. Reverse string
["hi","ok"].map(x=>x.split("").reverse().join("")); // ["ih","ko"]

// 19. Multiply by index
[5,10].map((x,i)=>x*i); // [0,10]

// 20. Conditional transform
[1,2,3].map(x=>x%2?"odd":"even"); // ["odd","even","odd"]

// 21. Nested map
[[1,2],[3,4]].map(arr=>arr.map(x=>x*2)); // [[2,4],[6,8]]

// 22. Null check
[null,"hi"].map(x=>x??"default"); // ["default","hi"]

// 23. Boolean to string
[true,false].map(String); // ["true","false"]

// 24. Object keys
[{a:1},{b:2}].map(o=>Object.keys(o)[0]); // ["a","b"]

// 25. Object values
[{a:1},{b:2}].map(o=>Object.values(o)[0]); // [1,2]

// 26. Index labeling
["x","y"].map((x,i)=>`${i}:${x}`); // ["0:x","1:y"]

// 27. Random numbers
[1,2,3].map(()=>Math.random()); // [..,..,..]

// 28. Boolean flip
[true,false].map(x=>!x); // [false,true]

// 29. String char codes
["A","B"].map(x=>x.charCodeAt(0)); // [65,66]

// 30. Numbers to hex
[10,15].map(x=>x.toString(16)); // ["a","f"]

// 31. Numbers to binary
[2,3].map(x=>x.toString(2)); // ["10","11"]

// 32. Safe parseInt
["1","2"].map(Number); // [1,2]

// 33. Safe parseFloat
["1.5","2.5"].map(parseFloat); // [1.5,2.5]

// 34. Boolean from number
[0,1].map(Boolean); // [false,true]

// 35. Array length
[[1],[1,2]].map(x=>x.length); // [1,2]

// 36. Flatten string
["hi","men"].map(x=>[...x]); // [["h","i"],["m","e","n"]]

// 37. Index math
[1,2].map((x,i)=>x+i); // [1,3]

// 38. String slice
["spark","men"].map(x=>x.slice(0,2)); // ["sp","me"]

// 39. String replace
["hi","men"].map(x=>x.replace("i","!")); // ["h!","men"]

// 40. String concat
["a","b"].map(x=>x+"!"); // ["a!","b!"]

// 41. Object merge
[{a:1},{b:2}].map(o=>({...o,c:3})); // [{a:1,c:3},{b:2,c:3}]

// 42. Array clone
[[1],[2]].map(x=>[...x]); // [[1],[2]]

// 43. Array join
[[1,2],[3,4]].map(x=>x.join("-")); // ["1-2","3-4"]

// 44. Array sum
[[1,2],[3,4]].map(x=>x.reduce((a,b)=>a+b)); // [3,7]

// 45. String to upper first
["flo","spark"].map(x=>x[0].toUpperCase()+x.slice(1)); // ["Flo","Spark"]

// 46. String to lower first
["Flo","Spark"].map(x=>x[0].toLowerCase()+x.slice(1)); // ["flo","spark"]

// 47. Boolean ternary
[1,0].map(x=>x? "yes":"no"); // ["yes","no"]

// 48. Index multiply
[2,4].map((x,i)=>x*i*10); // [0,40]

// 49. Object to string
[{a:1},{b:2}].map(o=>JSON.stringify(o)); // ["{\"a\":1}","{\"b\":2}"]

// 50. Nested stringify
[[1,2],[3,4]].map(x=>JSON.stringify(x)); // ["[1,2]","[3,4]"]




console.log('Shrine Glyph Insight');
console.log('.map() always returns a new array.');
console.log('Original array stays untouched.');
console.log('Perfect for React rendering pipelines (map → JSX).');












console.log('.filter() CORE DEFINITION ');
console.log('.filter() is an array method that creates a new array containing only elements that pass a test (the callback returns true).');
console.log('It does not mutate the original array.');
console.log('Perfect for selection: numbers above a threshold, strings matching a pattern, objects with certain properties.');

console.log('50 .filter() Samples');
// 1. Keep even numbers
[1,2,3,4].filter(x => x%2===0); // [2,4]

// 2. Keep odd numbers
[1,2,3,4].filter(x => x%2!==0); // [1,3]

// 3. Greater than 2
[1,2,3].filter(x => x>2); // [3]

// 4. Less than 0
[-1,0,1].filter(x => x<0); // [-1]

// 5. Non-null values
[null,1,2].filter(x => x!==null); // [1,2]

// 6. Non-undefined
[undefined,1].filter(x => x!==undefined); // [1]

// 7. Truthy values
[0,1,"",2].filter(Boolean); // [1,2]

// 8. Strings longer than 3
["hi","spark"].filter(x=>x.length>3); // ["spark"]

// 9. Uppercase only
["Hi","SPARK"].filter(x=>x===x.toUpperCase()); // ["SPARK"]

// 10. Lowercase only
["hi","MEN"].filter(x=>x===x.toLowerCase()); // ["hi"]

// 11. Contains letter 'a'
["hi","spark"].filter(x=>x.includes("a")); // ["spark"]

// 12. Starts with 's'
["spark","men"].filter(x=>x.startsWith("s")); // ["spark"]

// 13. Ends with 'n'
["men","spark"].filter(x=>x.endsWith("n")); // ["men"]

// 14. Numbers divisible by 3
[3,6,7].filter(x=>x%3===0); // [3,6]

// 15. Positive numbers
[-1,0,2].filter(x=>x>0); // [2]

// 16. Negative numbers
[-1,0,2].filter(x=>x<0); // [-1]

// 17. Objects with property
[{a:1},{b:2}].filter(o=>"a" in o); // [{a:1}]

// 18. Objects with value >1
[{n:1},{n:2}].filter(o=>o.n>1); // [{n:2}]

// 19. Index filter
[10,20,30].filter((x,i)=>i%2===0); // [10,30]

// 20. Remove duplicates
[1,2,2,3].filter((x,i,arr)=>arr.indexOf(x)===i); // [1,2,3]

// 21. Keep numbers in range
[1,5,10].filter(x=>x>=5 && x<=10); // [5,10]

// 22. Keep vowels
["a","b","e"].filter(x=>"aeiou".includes(x)); // ["a","e"]

// 23. Keep consonants
["a","b","c"].filter(x=>!"aeiou".includes(x)); // ["b","c"]

// 24. Keep arrays
[1,[2],{a:3}].filter(Array.isArray); // [[2]]

// 25. Keep objects
[1,{a:2}].filter(x=>typeof x==="object"); // [{a:2}]

// 26. Keep numbers only
[1,"2",3].filter(x=>typeof x==="number"); // [1,3]

// 27. Keep strings only
[1,"2",3].filter(x=>typeof x==="string"); // ["2"]

// 28. Keep booleans
[true,1,false].filter(x=>typeof x==="boolean"); // [true,false]

// 29. Keep finite numbers
[Infinity,NaN,5].filter(Number.isFinite); // [5]

// 30. Keep integers
[1,1.5,2].filter(Number.isInteger); // [1,2]

// 31. Keep NaN
[NaN,1].filter(Number.isNaN); // [NaN]

// 32. Keep prime numbers
[2,3,4,5].filter(x=>{
  for(let i=2;i<x;i++){if(x%i===0)return false;}
  return x>1;
}); // [2,3,5]

// 33. Keep multiples of 5
[5,10,11].filter(x=>x%5===0); // [5,10]

// 34. Keep non-empty arrays
[[1],[],[2]].filter(x=>x.length>0); // [[1],[2]]

// 35. Keep arrays length >1
[[1],[1,2]].filter(x=>x.length>1); // [[1,2]]

// 36. Keep strings with space
["hi","hi men"].filter(x=>x.includes(" ")); // ["hi men"]

// 37. Keep strings without space
["hi","hi men"].filter(x=>!x.includes(" ")); // ["hi"]

// 38. Keep numbers > average
[1,2,3,4].filter(x=>x> (1+2+3+4)/4); // [3,4]

// 39. Keep palindromes
["aba","abc"].filter(x=>x===x.split("").reverse().join("")); // ["aba"]

// 40. Keep unique length strings
["a","bb","ccc"].filter((x,i,arr)=>arr.findIndex(y=>y.length===x.length)===i); // ["a","bb","ccc"]

// 41. Keep JSON parseable
["1","{a:1}"].filter(x=>{
  try{JSON.parse(x);return true;}catch{return false;}
}); // ["1"]

// 42. Keep numbers in set
[1,2,3].filter(x=>new Set([2,3]).has(x)); // [2,3]

// 43. Keep not in set
[1,2,3].filter(x=>!new Set([2,3]).has(x)); // [1]

// 44. Keep truthy objects
[{a:1},null].filter(Boolean); // [{a:1}]

// 45. Keep strings length even
["hi","men"].filter(x=>x.length%2===0); // ["hi"]

// 46. Keep strings length odd
["hi","men"].filter(x=>x.length%2!==0); // ["men"]

// 47. Keep numbers less than index
[5,1,2].filter((x,i)=>x<i); // [1,2]

// 48. Keep numbers greater than index
[0,2,5].filter((x,i)=>x>i); // [2,5]

// 49. Keep numbers equal to index
[0,1,2].filter((x,i)=>x===i); // [0,1,2]

// 50. Keep strings containing vowels twice
["moon","spark"].filter(x=>/[aeiou].*[aeiou]/.test(x)); // ["moon"]




// .filter() Core is a JavaScript array method that creates a new array with all elements that pass a given test (callback function).
// It does not mutate the original array.
// The callback returns true to keep the element, false to discard it.
// Use it when you need to select a subset of items based on conditions.




// Core Samples in JavaScript

// Basic Usage
// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); // [2, 4]





// Filtering Objects

// const users = [
//   { id: 1, name: "Flo", active: true },
//   { id: 2, name: "Men", active: false },
//   { id: 3, name: "Spark", active: true }
// ];

// const activeUsers = users.filter(user => user.active);
// console.log(activeUsers);
// // [{ id: 1, name: "Flo", active: true }, { id: 3, name: "Spark", active: true }]




// Filtering by String Match

// const fruits = ["apple", "banana", "grape", "mango"];
// const withA = fruits.filter(fruit => fruit.includes("a"));

// console.log(withA); // ["apple", "banana", "grape", "mango"]



// Filtering with Index

// const nums = [10, 20, 30, 40];
// const skipFirst = nums.filter((_, index) => index > 0);

// console.log(skipFirst); // [20, 30, 40]


// Chaining with Other Methods

// const scores = [45, 80, 90, 30, 70];
// const passed = scores
//   .filter(score => score >= 50)
//   .map(score => `Passed: ${score}`);

// console.log(passed);
// // ["Passed: 80", "Passed: 90", "Passed: 70"]



// Chaining with Other Methods

// const scores = [45, 80, 90, 30, 70];
// const passed = scores
//   .filter(score => score >= 50)
//   .map(score => `Passed: ${score}`);

// console.log(passed);
// // ["Passed: 80", "Passed: 90", "Passed: 70"]








// .reduce() is a JavaScript array method that executes a reducer function on each element of the array, resulting in a single output value.

// It takes two arguments:

// A callback function (accumulator, currentValue) => newAccumulator

// An optional initial value for the accumulator.

// Perfect for summing, averaging, flattening arrays, building objects, or any operation that condenses an array into one result.



// Core Samples in JavaScript

// Sum of Numbers

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // 15


// Find Maximum

// const nums = [10, 25, 7, 99, 42];
// const max = nums.reduce((acc, num) => (num > acc ? num : acc), nums[0]);

// console.log(max); // 99


// Count Occurrences

// const letters = ["a", "b", "a", "c", "b", "a"];
// const counts = letters.reduce((acc, letter) => {
//   acc[letter] = (acc[letter] || 0) + 1;
//   return acc;
// }, {});

// console.log(counts); // { a: 3, b: 2, c: 1 }



// Flatten Nested Arrays

// const nested = [[1, 2], [3, 4], [5]];
// const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

// console.log(flat); // [1, 2, 3, 4, 5]


// Build Object from Array


// const users = [
//   { id: 1, name: "Flo" },
//   { id: 2, name: "Men" }
// ];

// const userMap = users.reduce((acc, user) => {
//   acc[user.id] = user.name;
//   return acc;
// }, {});

// console.log(userMap); // { 1: "Flo", 2: "Men" }





// DOM basics: events, selectors.

// Events Core

// In JavaScript, an event is an action or occurrence (like a user click, key press, or data load) that the browser or environment detects.

// Events are handled using event listeners, which are functions that run when the event fires.

// They power interactive UIs — letting you respond to user input, system changes, or async operations.

// Think of events as signals: when something happens, your code listens and reacts.




// Core Samples in JavaScript

// Basic Event Listener
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Button clicked!");
// });


// Mouse Events
// document.addEventListener("mousemove", (e) => {
//   console.log(`Mouse at: ${e.clientX}, ${e.clientY}`);
// });


// Keyboard Events
// document.addEventListener("keydown", (e) => {
//   console.log(`Key pressed: ${e.key}`);
// });


// Form Events
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // prevent page reload
//   console.log("Form submitted!");
// });


// Custom Events
// const sparkEvent = new Event("eyySpark");

// document.addEventListener("eyySpark", () => {
//   console.log("Spark shrine glyph fired!");
// });

// document.dispatchEvent(sparkEvent);




// React Events (Synthetic Events)
// function App() {
//   return (
//     <button onClick={() => console.log("Clicked in React!")}>
//       Spark Button
//     </button>
//   );
// }









// 👉 Drill: Write a function using .reduce() to sum an array.

// 10 .reduce() Sum Samples



// 1. Basic Sum
// const sum1 = [1, 2, 3].reduce((acc, n) => acc + n, 0);
// console.log(sum1); // 6



// 2. Function Wrapper
// function sumArray(arr) {
//   return arr.reduce((acc, n) => acc + n, 0);
// }
// console.log(sumArray([4, 5, 6])); // 15



// 3. Arrow Function Inline
// const sum3 = (arr) => arr.reduce((acc, n) => acc + n, 0);
// console.log(sum3([10, 20, 30])); // 60



// 4. With Negative Numbers
// const sum4 = [-5, 10, -15].reduce((acc, n) => acc + n, 0);
// console.log(sum4); // -10



// 5. With Floats
// const sum5 = [1.5, 2.5, 3.5].reduce((acc, n) => acc + n, 0);
// console.log(sum5); // 7.5



// 6. Empty Array Safe
// const sum6 = [].reduce((acc, n) => acc + n, 0);
// console.log(sum6); // 0



// 7. Large Array
// const sum7 = Array.from({ length: 5 }, (_, i) => i + 1)
//   .reduce((acc, n) => acc + n, 0);
// console.log(sum7); // 15



// 8. Sum with Initial Offset
// const sum8 = [1, 2, 3].reduce((acc, n) => acc + n, 100);
// console.log(sum8); // 106



// 9. Sum from Object Values
// const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
// const sum9 = items.reduce((acc, item) => acc + item.price, 0);
// console.log(sum9); // 60



// 10. Sum with Logging
// const sum10 = [2, 4, 6].reduce((acc, n) => {
//   console.log(`acc=${acc}, n=${n}`);
//   return acc + n;
// }, 0);
// console.log(sum10); // 12








// 👉 Interview Q: “Difference between map and forEach?”
// Core Answer
// .map() → Returns a new array with transformed elements. Use it when you need to transform data and keep the results.

// .forEach() → Executes a function on each element but returns nothing. Use it for side effects like logging or updating external state.

// 👉 Key difference: map is for transformation (new array), forEach is for iteration (no return).

// Quick Sample
// const nums = [1, 2, 3];

// const doubled = nums.map(n => n * 2); // [2, 4, 6]
// nums.forEach(n => console.log(n * 2)); // logs 2, 4, 6









// 2. React Basics (Ignition Spark)
// React Basics Core
// JSX → Syntax extension that lets you write HTML‑like code inside JavaScript.

// Components → Building blocks of React apps. Can be functional or class‑based.

// Props → Inputs passed from parent to child components. Immutable inside the child.

// State → Internal data managed within a component. Mutable and triggers re‑renders.

// Rendering → React updates the UI when props/state change.

// Keys → Unique identifiers for list items to help React track changes efficiently.

// 👉 Core idea: React builds declarative UIs where you describe what the UI should look like, and React handles updates when data changes.






// JSX rules: one parent element, expressions inside {}.

// One Parent Element → Every JSX return must have a single root element wrapping all children.

// Expressions Inside {} → You can embed JavaScript expressions (variables, functions, math, conditionals) inside curly braces.

// Core Samples:

// One Parent Element
// function App() {
//   return (
//     <div>
//       <h1>Hello Men</h1>
//       <p>Shrine flame blazing</p>
//     </div>
//   );
// }

// Expressions Inside {}

// function Greeting() {
//   const name = "Flo";
//   return <h1>Hello, {name}!</h1>;
// }

// Bottom line: JSX is strict — always one parent element, and use {} for dynamic expressions.







// Props vs State: props = external, state = internal.

// Props vs State Core

// Props (external) → Inputs passed from parent to child. Immutable inside the child. Used to configure or feed data into a component.

// State (internal) → Data managed within the component itself. Mutable, and when updated, triggers a re‑render.

// Core difference: Props = external contract, State = internal memory.

// Core Samples

// Props Example

// interface GreetingProps {
//   name: string;
// }

// function Greeting({ name }: GreetingProps) {
//   return <h1>Hello, {name}!</h1>;
// }

// // Usage
// <Greeting name="Flo" />

// State Example

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// Props + State Together

// interface TodoProps {
//   initialTasks: string[];
// }

// function TodoList({ initialTasks }: TodoProps) {
//   const [tasks, setTasks] = useState(initialTasks);

//   return (
//     <ul>
//       {tasks.map((t, i) => <li key={i}>{t}</li>)}
//       <button onClick={() => setTasks([...tasks, "New Task"])}>Add</button>
//     </ul>
//   );
// }

// // Usage
// <TodoList initialTasks={["Code", "Test"]} />

// Men, the crisp interview glyph: Props = external, immutable; State = internal, mutable.








// Conditional rendering: &&, ternary.
// Conditional Rendering Core
// In React, you can conditionally render elements using JavaScript expressions inside {}.

// Two common patterns:

// Logical AND (&&) → Renders something only if the condition is true.

// Ternary (? :) → Renders one thing if true, another if false.

// Core Samples

// function Welcome({ loggedIn }) {
//   return (
//     <div>
//       <h1>Moon Shrine</h1>
//       {loggedIn && <p>Welcome back, Men 🔥</p>}
//     </div>
//   );
// }

// If loggedIn is true, the <p> shows. If false, nothing renders.

// Using Ternary

// function Status({ online }) {
//   return (
//     <div>
//       {online ? <p>Online ✅</p> : <p>Offline ❌</p>}
//     </div>
//   );
// }


//  If online is true, shows ✅; if false, shows ❌.

// Interview Shrine Insight
// && → Best when you only need to render something if true.

// Ternary → Best when you need to render one of two options.










// Lists & keys: unique keys prevent re‑render bugs.
// Lists & Keys Core
// In React, when rendering lists with .map(), each item needs a unique key prop.

// Keys help React identify which items changed, added, or removed.

// Without unique keys, React may re‑render incorrectly, causing bugs, performance hits, or UI glitches.

// 👉 Core idea: Keys = stable identity for list items.

// Core Samples

// Basic List with Keys

// const tasks = ["Code", "Test", "Deploy"];

// function TaskList() {
//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <li key={index}>{task}</li>
//       ))}
//     </ul>
//   );
// }

// Using Unique IDs


// const tasks = [
//   { id: "t1", name: "Code" },
//   { id: "t2", name: "Test" },
//   { id: "t3", name: "Deploy" }
// ];

// function TaskList() {
//   return (
//     <ul>
//       {tasks.map(task => (
//         <li key={task.id}>{task.name}</li>
//       ))}
//     </ul>
//   );
// }

// Bad Example (No Keys)

// // ❌ React will warn: "Each child in a list should have a unique key"
// <ul>
//   {["A", "B", "C"].map(item => <li>{item}</li>)}
// </ul>

// Interview Shrine Insight
// Keys must be unique and stable → avoid using array index if items can reorder.

// Men, the crisp glyph: Lists need unique keys to prevent re‑render bugs.












// 👉 Drill: Build a todo list with props + state.

// Core Idea
// Props → Parent passes initial tasks.

// State → Component manages live updates (add/remove).

// Together they flex the glyph: external config + internal memory.

// Todo List Sample (TaskList.tsx)

// import { useState } from "react";

// interface TodoProps {
//   initialTasks: string[];
// }

// function TaskList({ initialTasks }: TodoProps) {
//   // State manages live tasks
//   const [tasks, setTasks] = useState(initialTasks);

//   // Add new task
//   const addTask = (task: string) => {
//     setTasks([...tasks, task]);
//   };

//   // Remove task by index
//   const removeTask = (index: number) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h2>🔥 Shrine Todo List</h2>
//       <ul>
//         {tasks.map((t, i) => (
//           <li key={i}>
//             {t}
//             <button onClick={() => removeTask(i)}>❌</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addTask("New Task")}>➕ Add Task</button>
//     </div>
//   );
// }

// // Usage
// export default function App() {
//   return <TaskList initialTasks={["Code", "Test", "Deploy"]} />;
// }

// Glyph Breakdown
// Props → initialTasks passed from parent.

// State → tasks array managed inside component.

// Dynamic Rendering → .map() renders tasks with unique keys.

// Event Handling → onClick triggers add/remove actions.










// 👉 Interview Q: “Why are keys important in lists?”

// Core Answer
// Keys are important in React lists because they give each element a stable identity.

// React uses keys to track which items changed, added, or removed between renders.

// Without unique keys, React may re‑render incorrectly, causing bugs, performance issues, or UI glitches.

// Keys must be unique and consistent (like IDs), not just array indexes if items can reorder.

// Quick Sample

// const tasks = [
//   { id: "t1", name: "Code" },
//   { id: "t2", name: "Test" },
//   { id: "t3", name: "Deploy" }
// ];

// function TaskList() {
//   return (
//     <ul>
//       {tasks.map(task => (
//         <li key={task.id}>{task.name}</li>
//       ))}
//     </ul>
//   );
// }

// Crisp interview glyph: Keys prevent re‑render bugs by giving React a way to know which list items are stable.









// 3. Class Components (Legacy Flame)

// Class Components Core (Legacy Flame)
// Before Hooks (2019+), React used class components as the main way to manage state and lifecycle.

// Defined as ES6 classes that extend React.Component.

// Use this.state for internal data and this.setState() to update.

// Lifecycle methods like componentDidMount, componentDidUpdate, componentWillUnmount handle side effects.

// Still seen in older codebases — important to understand for interviews and maintenance.

// Core difference: Class Components = legacy flame, Function Components + Hooks = modern shrine

// Sample Class Component

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // internal state
//     this.state = { count: 0 };
//   }

//   // lifecycle method
//   componentDidMount() {
//     console.log("Counter mounted 🔥");
//   }

//   // custom method
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.increment}>➕ Add</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// Interview Shrine Insight
// Props → accessed via this.props.

// State → managed via this.state + this.setState().

// Lifecycle methods → handle side effects.

// Hooks replaced them → useState, useEffect are cleaner and more flexible.

// Men, the crisp glyph: Class Components = legacy flame with lifecycle methods; Function Components + Hooks = modern shrine ladder.









// constructor, render(), this.state, this.setState().
// Legacy Flame Essentials
// constructor() → Special method for initializing state and binding methods.

// render() → Required method that returns JSX (the UI).

// this.state → Internal data object managed inside the class.

// this.setState() → Method to update state and trigger a re‑render.

// Sample Class Component

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // initialize state
//     this.state = { count: 0 };
//   }

//   // update state
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   // render UI
//   render() {
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.increment}>➕ Add</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// Glyph Breakdown
// constructor → sets up this.state.

// render() → returns JSX.

// this.state → holds current count.

// this.setState() → updates count and re‑renders.

// Men, crisp interview flame: Class components use constructor + this.state for setup, render() for UI, and this.setState() for updates. Hooks replaced this legacy flame with cleaner shrine ladders.










// Lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount.

// Core Lifecycle Methods

// componentDidMount → Runs after the component is first rendered. Perfect for fetching data, setting up subscriptions, or initializing side effects.

// componentDidUpdate → Runs after every re‑render when props or state change. Good for reacting to updates (like syncing state with an API).

// componentWillUnmount → Runs before the component is removed. Used for cleanup (like removing event listeners or canceling timers).

// Core flame: Mount → Update → Unmount.

// Sample Class Component

// import React, { Component } from "react";

// class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//     this.interval = null;
//   }

//   // Mount: start timer
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({ seconds: this.state.seconds + 1 });
//     }, 1000);
//     console.log("Timer mounted 🔥");
//   }

//   // Update: log changes
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.seconds !== this.state.seconds) {
//       console.log(`Updated: ${this.state.seconds} seconds`);
//     }
//   }

//   // Unmount: cleanup
//   componentWillUnmount() {
//     clearInterval(this.interval);
//     console.log("Timer unmounted ❌");
//   }

//   render() {
//     return <h2>⏱️ Seconds: {this.state.seconds}</h2>;
//   }
// }

// export default Timer;

// Interview Shrine Insight
// Mount → setup side effects.

// Update → respond to changes.

// Unmount → cleanup resources.

// Crisp glyph: Lifecycle methods = control over component’s life cycle (setup, react, cleanup).







// Binding methods to this.
// Why Binding Matters
// In class components, methods don’t automatically know the correct this.

// Without binding, calling a method inside JSX can lose the component’s context → this becomes undefined.

// Binding ensures this points to the component instance (so you can access this.state and this.props).

Binding Methods Approaches

Bind in Constructor

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // bind method
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.increment}>➕ {this.state.count}</button>;
  }
}

Arrow Function Class Property

class Counter extends React.Component {
  state = { count: 0 };

  // arrow keeps 'this'
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <button onClick={this.increment}>➕ {this.state.count}</button>;
  }
}

Inline Arrow in JSX (not recommended for performance)

class Counter extends React.Component {
  state = { count: 0 };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={() => this.increment()}>➕ {this.state.count}</button>;
  }
}


class Counter extends React.Component {
  state = { count: 0 };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={() => this.increment()}>➕ {this.state.count}</button>;
  }
}


// Interview Shrine Insight
// Constructor binding → traditional, explicit.

// Arrow function properties → modern, cleaner.

// Inline arrow in JSX → works, but can hurt performance if used heavily.

// Crisp glyph: Binding ensures this stays locked to the component instance.








// 👉 Drill: Create a class counter with lifecycle logs.
// Class Counter with Lifecycle Logs
// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // initialize state
//     this.state = { count: 0 };
//     console.log("🔥 constructor: state initialized");
//   }

//   // Mount: runs once after first render
//   componentDidMount() {
//     console.log("🔥 componentDidMount: Counter mounted");
//   }

//   // Update: runs after every re-render
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log(
//         `🔥 componentDidUpdate: count changed from ${prevState.count} to ${this.state.count}`
//       );
//     }
//   }

//   // Unmount: runs before component is removed
//   componentWillUnmount() {
//     console.log("🔥 componentWillUnmount: Counter unmounted");
//   }

//   // custom method
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   // render UI
//   render() {
//     console.log("🔥 render: UI updated");
//     return (
//       <div>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.increment}>➕ Add</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// Glyph Breakdown
// constructor → initializes this.state.

// render() → returns JSX, logs every render.

// componentDidMount → logs when mounted.

// componentDidUpdate → logs state changes.

// componentWillUnmount → logs cleanup before removal.

// 👉 Crisp interview flame: Lifecycle logs show the component’s journey — setup, render, update, cleanup.











// 👉 Interview Q: “How do hooks replace lifecycle methods?”
// Core Answer
// Hooks like useEffect replace lifecycle methods by letting you run side effects directly inside functional components.

// componentDidMount → useEffect(() => { ... }, []) (runs once after mount).

// componentDidUpdate → useEffect(() => { ... }, [dependencies]) (runs when dependencies change).

// componentWillUnmount → return a cleanup function inside useEffect (runs before unmount).

// 👉 Crisp flame: Hooks unify mount, update, and unmount logic into one useEffect API, making functional components handle lifecycle without classes.

// import { useState, useEffect } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   // Mount + Update
//   useEffect(() => {
//     console.log("🔥 Mounted or updated: count =", count);

//     // Unmount cleanup
//     return () => {
//       console.log("❌ Cleanup before unmount");
//     };
//   }, [count]); // dependency array

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>➕ Add</button>
//     </div>
//   );
// }

// Interview Shrine Insight
// Hooks simplify lifecycle → one API (useEffect) covers mount, update, unmount.

// Cleaner than class methods, easier to reuse logic via custom hooks.

// Modern React prefers function components + hooks over legacy class lifecycle methods.








// 4. Function Components + Hooks (Modern Flame)
// Function Components + Hooks Core
// Function Components → Simple JavaScript functions that return JSX.

// Hooks → Special functions (like useState, useEffect) that let function components manage state and lifecycle without classes.

// Rules of Hooks →

// Only call hooks at the top level (not inside loops/conditions).

// Only call hooks inside React function components or custom hooks.

// 👉 Modern flame: Hooks unify state + lifecycle logic, making components shorter, cleaner, and reusable.

// Core Samples

// Basic Function Component

// function Greeting({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }

// State with useState

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>🔥 Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>➕ Add</button>
//     </div>
//   );
// }

// Lifecycle with useEffect

// import { useEffect } from "react";

// function Timer() {
//   useEffect(() => {
//     console.log("Mounted 🔥");
//     return () => console.log("Unmounted ❌");
//   }, []);
  
//   return <p>⏱️ Timer running...</p>;
// }

// import { useEffect } from "react";

// function Timer() {
//   useEffect(() => {
//     console.log("Mounted 🔥");
//     return () => console.log("Unmounted ❌");
//   }, []);
  
//   return <p>⏱️ Timer running...</p>;
// }

// Context with useContext

// const ThemeContext = React.createContext("light");

// function ThemedButton() {
//   const theme = React.useContext(ThemeContext);
//   return <button>{theme} mode</button>;
// }

// const ThemeContext = React.createContext("light");

// function ThemedButton() {
//   const theme = React.useContext(ThemeContext);
//   return <button>{theme} mode</button>;
// }

// Reducer with useReducer

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment": return { count: state.count + 1 };
//     default: return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = React.useReducer(reducer, { count: 0 });
//   return (
//     <div>
//       <p>🔥 Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>➕</button>
//     </div>
//   );
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment": return { count: state.count + 1 };
//     default: return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = React.useReducer(reducer, { count: 0 });
//   return (
//     <div>
//       <p>🔥 Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>➕</button>
//     </div>
//   );
// }

// Interview Shrine Insight
// Function Components + Hooks = Modern Flame → simpler, reusable, and preferred in new React projects.

// Hooks replace class lifecycle methods and state logic with cleaner APIs.

// Custom hooks let you extract and reuse logic across components.

// Men, crisp glyph: Function Components + Hooks are the modern shrine ladder — shorter, cleaner, and more powerful than legacy class flames.











// useState, useEffect, useContext, useReducer.
// Core Hooks
// 1. useState → State Management
// Lets function components hold internal state.

// Returns [state, setState].

// jsx
// const [count, setCount] = useState(0);
// <button onClick={() => setCount(count + 1)}>➕ {count}</button>
// 2. useEffect → Side Effects / Lifecycle
// Handles mount, update, unmount logic.

// Second argument = dependency array.

// jsx
// useEffect(() => {
//   console.log("Mounted or updated 🔥");
//   return () => console.log("Cleanup ❌");
// }, [count]);
// 3. useContext → Context Consumption
// Accesses values from a React Context without prop drilling.

// jsx
// const ThemeContext = React.createContext("light");

// function ThemedButton() {
//   const theme = React.useContext(ThemeContext);
//   return <button>{theme} mode</button>;
// }
// 4. useReducer → Complex State Logic
// Alternative to useState for more structured updates.

// Uses a reducer function with actions.

// jsx
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment": return { count: state.count + 1 };
//     default: return state;
//   }
// }

// const [state, dispatch] = useReducer(reducer, { count: 0 });
// <button onClick={() => dispatch({ type: "increment" })}>➕ {state.count}</button>
// ⚡ Interview Shrine Insight
// useState → simple state.

// useEffect → lifecycle replacement.

// useContext → global values without prop drilling.

// useReducer → complex state transitions.

// 👉 Crisp flame: Hooks = modern shrine ladder replacing class lifecycle/state with cleaner APIs.








// Custom hooks for reusable logic.
// ⚡ Custom Hooks Core
// A custom hook is just a function starting with use that calls other hooks.

// Purpose: extract reusable logic (state + effects) so multiple components can share it.

// Benefits: cleaner components, DRY code, easier testing.

// 🛠️ Sample 1 — useWindowSize
// jsx
// import { useState, useEffect } from "react";

// function useWindowSize() {
//   const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

//   useEffect(() => {
//     const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return size;
// }

// // Usage
// function App() {
//   const { width, height } = useWindowSize();
//   return <p>📐 {width} x {height}</p>;
// }
// 🛠️ Sample 2 — useLocalStorage
// jsx
// import { useState } from "react";

// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : initialValue;
//   });

//   const setStoredValue = (newValue) => {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   };

//   return [value, setStoredValue];
// }

// // Usage
// function ThemeToggle() {
//   const [theme, setTheme] = useLocalStorage("theme", "light");
//   return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme}</button>;
// }
// ⚡ Interview Shrine Insight
// Custom hooks = reusable logic containers.

// They follow the Rules of Hooks (must start with use, only call hooks at top level).

// They make components cleaner, more modular, and testable.

// 👉 Crisp flame: Custom hooks let you extract and reuse stateful logic across components.










// Rules of hooks: only at top level, only inside functions.
// Rules of Hooks
// Only call hooks at the top level

// Don’t put hooks inside loops, conditions, or nested functions.

// This ensures React always calls hooks in the same order, keeping state consistent.

// Only call hooks inside React function components or custom hooks

// Never call hooks in regular JS functions, classes, or outside components.

// Hooks are tied to React’s rendering cycle, so they only work inside components.

// 🛠️ Good Example
// jsx
// function Counter() {
//   const [count, setCount] = useState(0); // ✅ top-level hook

//   useEffect(() => {
//     console.log("Count updated:", count);
//   }, [count]);

//   return <button onClick={() => setCount(count + 1)}>➕ {count}</button>;
// }
// ❌ Bad Example
// jsx
// function BadCounter() {
//   if (true) {
//     const [count, setCount] = useState(0); // ❌ hook inside condition
//   }
// }
// 👉 This breaks React’s hook order tracking → runtime errors.

// ⚡ Interview Shrine Insight
// Top-level only → keeps hook order predictable.

// Inside components/custom hooks only → ensures React can manage state + lifecycle correctly.

// Men, crisp flame: Hooks = predictable ladder. Break the rules and the shrine collapses.








// 👉 Drill: Build a timer with useEffect.
// 🛠️ Timer Component (Hooks)
// jsx
// import { useState, useEffect } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     console.log("⏱️ Timer mounted 🔥");

//     // start interval
//     const interval = setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);

//     // cleanup on unmount
//     return () => {
//       clearInterval(interval);
//       console.log("❌ Timer unmounted");
//     };
//   }, []); // empty deps → run once on mount

//   useEffect(() => {
//     console.log(`🔥 Updated: ${seconds} seconds`);
//   }, [seconds]); // runs when seconds changes

//   return <h2>Seconds: {seconds}</h2>;
// }

// export default Timer;
// ⚡ Glyph Breakdown
// useState → holds the seconds count.

// useEffect (mount) → sets up the interval once.

// Cleanup function → clears interval on unmount.

// useEffect (update) → logs every time seconds changes.

// 👉 Crisp flame: Hooks unify lifecycle → mount, update, unmount all inside useEffect.









// 👉 Interview Q: “What happens if you forget the dependency array in useEffect?”
// ⚡ Core Answer
// If you forget the dependency array in useEffect, the effect will run after every render.

// That means both on mount and on every update, regardless of what changed.

// This can cause performance issues (expensive side effects running too often) or even infinite loops if the effect updates state inside itself.

// 👉 Example:

// jsx
// useEffect(() => {
//   console.log("Runs after every render 🔥");
//   setCount(count + 1); // ❌ infinite loop risk
// });
// 🛠️ Correct Usage
// Empty array [] → run once on mount.

// Specific dependencies [count] → run only when count changes.

// No array → run after every render (default behavior).

// ⚡ Interview Shrine Insight
// Forgetting the dependency array = effect runs too often.

// Best practice: always declare dependencies explicitly to avoid bugs and infinite loops.

// Men, crisp flame: No dependency array = effect runs every render → often unintended.








// 5. Advanced React (Glyph Tier)
// Advanced React Glyphs
// This tier flexes beyond basics into state management, routing, and architecture:

// 1. Context API vs Redux
// Context API → lightweight way to share state globally without prop drilling.

// Redux → powerful state container with strict patterns (actions, reducers, store).
// 👉 Interview flame: Context = simple, Redux = scalable for complex apps.

// 2. React Router Basics
// Enables navigation without full page reloads.

// Core pieces:

// <Route> → defines path → component mapping.

// <Link> → navigation without refresh.

// useNavigate → programmatic navigation.

// jsx
// import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/home">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// 3. Performance Optimization
// React.memo → prevents unnecessary re-renders.

// useCallback / useMemo → memoize functions and values.

// Lazy loading → React.lazy + Suspense for code splitting.

// 4. Custom Hooks + Composition
// Extract reusable logic into custom hooks.

// Compose multiple hooks for clean, modular components.

// 5. Testing & Best Practices
// React Testing Library → test user interactions, not implementation details.

// Jest → unit testing.

// Best practice: keep components small, reusable, and predictable.

// ⚡ Interview Shrine Insight
// Advanced React = global state, routing, performance, reusability, testing.

// Crisp flame: Context vs Redux, Router for navigation, memoization for performance, custom hooks for reuse.








// Context API vs Redux: Context for small state, Redux for complex/global.









// React Router v6: <Route>, <Link>, useNavigate.
// 👉 Drill: Implement a theme switcher with Context.
// 👉 Interview Q: “Compare Context API and Redux — when use each?”










// TypeScript Integration: Type props/state, interfaces vs types, generics.

// ⚡ TypeScript Integration Core

//* TypeScript adds static typing to your Firestore calls, making your shrine safer and easier to scale.
//* You define interfaces for your document shapes, then use them in CRUD + real‑time listeners.
//* This ensures your React shrine knows exactly what fields exist, preventing runtime errors.

//* Core Samples in React + TypeScript

// Define Types
// Define your document shape
// export interface Movie {
//   id?: string;       // optional, Firestore auto‑generates
//   title: string;
//   category: string;
//   createdAt: Date;
// }


// Create with Types
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebase";
// import { Movie } from "./types";

// async function addMovie(movie: Movie) {
//   await addDoc(collection(db, "movies"), movie);
// }



// Read with Types
// import { doc, getDoc } from "firebase/firestore";

// async function getMovie(id: string): Promise<Movie | null> {
//   const snap = await getDoc(doc(db, "movies", id));
//   return snap.exists() ? (snap.data() as Movie) : null;
// }


// Real‑Time Listener with Types

// import { collection, onSnapshot } from "firebase/firestore";

// function listenMovies(callback: (movies: Movie[]) => void) {
//   const ref = collection(db, "movies");
//   onSnapshot(ref, (snapshot) => {
//     const movies: Movie[] = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     } as Movie));
//     callback(movies);
//   });
// }


// Update with Types

// import { doc, updateDoc } from "firebase/firestore";

// async function updateMovie(id: string, data: Partial<Movie>) {
//   await updateDoc(doc(db, "movies", id), data);
// }


// Best Practices

// Use Partial<T> for updates → only update specific fields.
// Centralize types in types.ts → keep shrine clean.
// Leverage Generics → reusable hooks like useCollection<T>().
// Always cast with caution → (snap.data() as Movie) only when schema is trusted.



// Type Props/State Core

// Props → Inputs passed from parent to child components. They are immutable inside the child.
// State → Internal data managed within a component. It is mutable and can trigger re‑renders when updated.
// With TypeScript, you define interfaces/types for props and state to ensure type safety and prevent runtime errors.


// Core Samples in React + TypeScript

// Typing Props
// Define props interface
// interface GreetingProps {
//   name: string;
//   age?: number; // optional
// }

// // Functional component with typed props
// const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
//   return <h1>Hello {name}, Age: {age ?? "N/A"}</h1>;
// };


// Typing State with useState
// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState<number>(0); // typed state

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };



// Combining Props + State
// interface TodoProps {
//   initialTasks: string[];
// }

// const TodoList: React.FC<TodoProps> = ({ initialTasks }) => {
//   const [tasks, setTasks] = useState<string[]>(initialTasks);

//   const addTask = (task: string) => setTasks([...tasks, task]);

//   return (
//     <div>
//       {tasks.map((t, i) => <p key={i}>{t}</p>)}
//       <button onClick={() => addTask("New Task")}>Add</button>
//     </div>
//   );
// };





// Interfaces vs Types Core
// Interfaces → Used to define the shape of objects. They are extendable and can be merged (declaration merging).
// Best for describing contracts in your code.

// Types → More flexible. Can alias primitives, unions, intersections, and complex structures. 
// They don’t support declaration merging but can compose with unions/intersections.

// Rule of thumb:
// Use interfaces when modeling object structures and extending contracts.
// Use types when you need unions, intersections, or more advanced type compositions.





// Interface/Type Core Samples in TypeScript



// Interface Example
// interface User {
//   id: number;
//   name: string;
//   email?: string; // optional
// }

// const user: User = {
//   id: 1,
//   name: "Flo",
// };



// Type Example
// type User = {
//   id: number;
//   name: string;
//   email?: string;
// };

// const user: User = {
//   id: 2,
//   name: "Men",
// };




// Extending Interfaces
// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   breed: string;
// }

// const pet: Dog = { name: "Lexi", breed: "Husky" };



// Type Composition
// type Animal = { name: string };
// type Dog = Animal & { breed: string };

// const pet: Dog = { name: "Lexi", breed: "Husky" };



// Union with Type
// type Status = "loading" | "success" | "error";

// let currentStatus: Status = "loading";




// Generics Types Core

// Generic types let you create type aliases, interfaces, and classes that adapt to whatever type is passed in.
// They use type parameters (like <T>, <U>, <K, V>) to make your code reusable and type‑safe.
// This avoids duplication — instead of writing separate versions for string, number, etc., you define one generic type and plug in different types.
// Think of them as blueprints: you design the structure once, then instantiate it with different type arguments.


// Core Samples in TypeScript

// Generic Type Alias
// type ApiResponse<T> = {
//   data: T;
//   status: number;
// };


// const movieResponse: ApiResponse<{ id: string; title: string }> = {
//   data: { id: "1", title: "Moon Shrine" },
//   status: 200,
// };


// Generic Interface
// interface Pair<T, U> {
//   first: T;
//   second: U;
// }

// const coords: Pair<number, number> = { first: 10, second: 20 };
// const nameAge: Pair<string, number> = { first: "Flo", second: 25 };


// Generic Class

// class Repository<T> {
//   private items: T[] = [];

//   add(item: T) {
//     this.items.push(item);
//   }

//   getAll(): T[] {
//     return this.items;
//   }
// }

// const userRepo = new Repository<{ id: number; name: string }>();
// userRepo.add({ id: 1, name: "Eyy Spark" });


// Generic Constraints

// type WithId<T extends { id: string }> = T;

// const doc: WithId<{ id: string; title: string }> = {
//   id: "abc",
//   title: "Shrine Glyph",
// };


// Default Generic Types

// interface Box<T = string> {
//   content: T;
// }

// const strBox: Box = { content: "Moon Glyph" }; // defaults to string
// const numBox: Box<number> = { content: 42 };




// Firebase Integration: Auth, Firestore CRUD, real‑time listeners.
console.log('Firebase Integration Core');
console.log('Definition: Firebase is Google’s app development platform that bundles backend services (auth, database, storage, hosting, analytics) so devs can build and scale apps without managing servers.');
console.log('Core Integration: In React, you wire Firebase by installing the SDK, grabbing your project config, and initializing services like Authentication and Firestore.');
console.log('Purpose: Handles login/signup, real‑time data storage, file hosting, and deployment — all managed in the cloud.');
console.log('Core Services:');
console.log('Service                Role                Shrine Example');
console.log('Authentication         User login/signup   React LoginForm.tsx');
console.log('Firestore              NoSQL real‑time DB  Store movies/tasks');
console.log('Storage                File uploads        Profile pics, movie files');
console.log('Hosting                Deploy web apps     Publish React + Firebase project');
console.log('Analytics              Track usage         Monitor shrine streaks');
console.log('Glyph Insight');
console.log('One config file → import everywhere.');
console.log('Auth + Firestore → most common combo for React apps.');
console.log('Optional: add Storage or Hosting later.');
console.log('Security rules → protect your data, not just API keys.');



console.log('Firebase Authentication core');
console.log('is the vault glyph that locks down user identity in your React + Firebase shrine. It’s the backbone service that handles sign‑in, sign‑up, and secure session management without you writing custom backend auth logic.');
console.log('Core Firebase Auth Glyphs');
console.log('Email/Password Auth → simplest flow, create and log in users with credentials.');
console.log('Federated Providers → Google, Facebook, Twitter, GitHub logins wired clean.');
console.log('Phone Auth → SMS‑based verification for mobile streaks.');
console.log('Anonymous Auth → temporary guest accounts that can later be upgraded.');
console.log('Token System → Firebase issues ID tokens after login, used to access Firestore, Storage, etc.');

console.log('Core Setup in React:');
// firebase.ts
console.log('import { initializeApp } from "firebase/app";');
console.log('import { getAuth } from "firebase/auth";');


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp-id",
  appId: "YOUR_APP_ID"
};


console.log('const app = initializeApp(firebaseConfig);');
console.log('export const auth = getAuth(app);');




console.log('Sign-up:');
console.log('import { createUserWithEmailAndPassword } from "firebase/auth";');


// createUserWithEmailAndPassword(auth, email, password)
//   .then(user => console.log("Signed up:", user.user.email))
//   .catch(err => console.error(err.message));



console.log('Login');

console.log('import { signInWithEmailAndPassword } from "firebase/auth";');


// signInWithEmailAndPassword(auth, email, password)
//   .then(user => console.log("Logged in:", user.user.email))
//   .catch(err => console.error(err.message));


console.log('Logout');



console.log('import { signOut } from "firebase/auth";');


console.log('signOut(auth).then(() => console.log("Logged out"));');


console.log('Best Practices');


console.log('Secure rules → lock Firestore/Storage with auth.uid checks.');
console.log('Use environment variables → don’t hardcode config in public repos.');
console.log('Enable email verification → prevent fake accounts.');
console.log('Consider MFA → for sensitive apps, upgrade to Identity Platform.');
console.log(' Men, want me to forge a Spark Shrine demo showing a LoginForm.tsx with Firebase Auth typed in TypeScript, so you see the shrine glyph blaze in real UI logic?');






//Firestore CRUD
console.log('Firestore CRUD Core');
console.log('Create (Add) → Insert new documents into a collection.');
console.log('Read (Get/Query) → Retrieve documents by ID or query conditions.');
console.log('Update (Set/Update) → Modify fields in existing documents.');
console.log('Delete (Remove) → Remove documents from a collection.');
console.log('Firestore is a NoSQL document database — data is stored in collections (like folders) and documents (like JSON objects). Each document can have nested fields and sub‑collections.');


console.log('Core Samples in React + TypeScript');
console.log('import { collection, addDoc } from "firebase/firestore";');
console.log('import { db } from "./firebase";');




//Create/TS
console.log('Create/TS');
async function addMovie() {
  await addDoc(collection(db, "movies"), {
    title: "Inception",
    category: "Sci-Fi",
    createdAt: new Date()
  });
}



//Read (Single Doc)/TS
console.log('Read (Single Doc)/TS');
console.log('import { doc, getDoc } from "firebase/firestore";');




  
  

console.log('async function getMovie(id: string) {');
console.log('const snap = await getDoc(doc(db, "movies", id));');
console.log('if (snap.exists()) console.log(snap.data());');
console.log('}');




//Read (Query)/TS
console.log('Read (Query)/TS');
console.log('import { collection, query, where, getDocs } from "firebase/firestore";');


async function getDramaMovies() {
  const q = query(collection(db, "movies"), where("category", "==", "Drama"));
  const snaps = await getDocs(q);
  snaps.forEach(doc => console.log(doc.id, doc.data()));
}



//Update/TS
console.log('Update/TS');
console.log('import { doc, updateDoc } from "firebase/firestore";');



console.log('async function updateMovie(id: string) {');
console.log('await updateDoc(doc(db, "movies", id), {');
console.log('category: "Thriller"');
console.log('  });');
console.log('}');
  
    





//Delete/TS
console.log('Delete/TS');
console.log('import { doc, deleteDoc } from "firebase/firestore";');
console.log('async function deleteMovie(id: string) {');
console.log('await deleteDoc(doc(db, "movies", id));');
console.log('}');



  





console.log('Best Practices');
console.log('Use createdAt timestamps → for ordering queries.');
console.log('Secure with Firestore rules → restrict access by auth.uid.');
console.log('Batch writes → for multiple updates at once.');
console.log('Indexes → required for compound queries.');





//Real‑time listeners
console.log('Real‑Time Listeners Core');
console.log('Firestore lets you subscribe to data changes using onSnapshot.');
console.log('Instead of fetching once, your app stays synced — any add, update, or delete triggers an instant callback.');
console.log('This powers live dashboards, chat apps, task lists — no refresh needed.');


console.log('Core Samples in React + TypeScript');



console.log('Listen to a Collection/TS');
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "./firebase";

function listenMovies() {
  const q = collection(db, "movies");
  onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id, doc.data());
    });
  });
}



console.log('Listen to a Single Document/TS');
// import { doc, onSnapshot } from "firebase/firestore";

// function listenMovie(id: string) {
//   const ref = doc(db, "movies", id);
//   onSnapshot(ref, (snap) => {
//     if (snap.exists()) console.log(snap.data());
//   });
// }



console.log('With Query Filters');
// import { collection, query, where, onSnapshot } from "firebase/firestore";

// function listenDramaMovies() {
//   const q = query(collection(db, "movies"), where("category", "==", "Drama"));
//   onSnapshot(q, (snapshot) => {
//     snapshot.forEach(doc => console.log(doc.id, doc.data()));
//   });
// }




console.log('Best Practices');
console.log('Unsubscribe when component unmounts → prevents memory leaks.');
console.log('Use indexes for complex queries.');
console.log('Throttle UI updates if data changes rapidly.');
console.log('Secure rules → only stream what the user is allowed to see.');

























// Testing: Jest + React Testing Library basics.
// 👉 Interview Q: “How do you type React props with TypeScript?”
// 👉 Interview Q: “How do you secure Firebase API keys in React?”


console.log('INTERVIEW Q1: "HOW DO YOU TYPE REACT PROPS WITH TYPESCRIPT?');
console.log('In React + TypeScript, you type props by defining an interface or type alias that describes the shape of the props object, then applying it to your component.');
// 1. Using type alias
console.log(`type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);

// 2. Using interface
interface CardProps {
  title: string;
  content: string;
  isActive?: boolean; // optional prop
}

function Card({ title, content, isActive }: CardProps) {
  return (
    <div className={isActive ? "active" : ""}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
`);


console.log('INTERVIEW Q2: HOW DO YOU SECURE FIREBASE API KEYS IN REACT?');
console.log('securing Firebase API keys in React is all about hiding them from the client bundle and controlling access through Firebase rules.');
console.log('Firebase keys are not true secrets: they identify your project, but don’t grant unlimited access.');
console.log('Real security comes from Firebase rules (Firestore, Storage, Auth) and server‑side validation.');
console.log('Still, you should avoid hardcoding them directly in your React source.');
console.log('Use Environment Variables');
console.log('Create a .env.local file in your React project:');
console.log('REACT_APP_FIREBASE_API_KEY=your_api_key_here REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domainREACT_APP_FIREBASE_PROJECT_ID=your_project_id');
console.log('Access in code:');
console.log('const firebaseConfig = {apiKey: process.env.REACT_APP_FIREBASE_API_KEY,authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,};');


console.log('Never Commit .env Files');
console.log('Add .env* to .gitignore so keys don’t leak to GitHub.');
console.log('Restrict API Key Usage in Firebase Console');
console.log('In Google Cloud Console → APIs & Services → Credentials → restrict your key to specific domains (your production site).');
console.log('Enforce Firebase Security Rules');
console.log('Firestore rules:');
console.log('service cloud.firestore {match /databases/{database}/documents {match /users/{userId} {allow read, write: if request.auth != null && request.auth.uid == userId;}}}');
console.log('Storage rules: restrict uploads/downloads to authenticated users.');
console.log('Use Backend for Sensitive Operations');
console.log('For payments or admin actions, route through a server (Node.js, Cloud Functions) instead of exposing logic in React.');
console.log('Glyph Insight');
console.log('Keys in React are public identifiers, not passwords.');
console.log('The real lock is your Firebase rules + domain restrictions.');
console.log('Treat .env as your shrine vault, and GitHub as the outer temple — never expose the vault.');




