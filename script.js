//Variables Types (var, let, const)
//using the variableType "var"
var favouriteDrink = "chocolateFlavour";
console.log(favouriteDrink);
//here, we have the "favouriteDrink" to be the "Variable", while we have "chocolateFlavour" to be the "Value"

//using the variableType "let"
let favouriteColor = "babyPink";
console.log(favouriteColor);

//using the variableType "const"
const favouriteFood = "jollofRice and friedChicken";
console.log(favouriteFood);

//difference between "let" and "const" Variable (The clear difference is that Variables can be reused in "let" while Variables cannot be reused in "const")
let favourite = "Yam and friedEgg";
favourite = "Spaghetti and Chicken";
console.log(favourite);

//trying to use "const" by reusing variable, though it will display error, but let's try.
//const color = "royalBlue";
//color = "pepperRed";
//console.log(color);
//it's an error

//single-string, double-string, back-tick
//single-string ('')
let bestQuote = "Believe you can and you are halfway there.";
console.log(bestQuote);

//double-string ("")
let bestSayings = "it always seems impossible until it's done.";
console.log(bestSayings);

//back-tick (I got to learn amazing things with back-ticks, let's display that)
let goodMeat = "Ogunfe";
const goodFood = `Amala and Gbegiri and ${goodMeat} is a nutritious African food`;
console.log(goodFood);

const value = 100 + 50;
console.log(value); //otherwise, with using back-stick,we can solve it as;
const integar = `${300 * 30}`;
console.log(integar);

//DATA TYPES (As given, Data types are String, Numbers, Boolean, Null, Undefined, Object)
//STRING
const firstName = "AnjolaAnnabi";
const name = `My name is Owonikoko Hawau ${firstName}`;
console.log(name);

//NUMBERS
let y = 20;
x = 30;
let add = `${y * x}`;
console.log(add);

//BOOLEANS
const goToSchool = true;
if (goToSchool) {
  console.log("Motivate and pay school fees");
} else {
  console.log("Beat him and don't pay school fees");
}

const age = 30;
console.log(age > 25);
console.log(age < 30);

//NULL
let result = "Null";
console.log(result);

//UNDEFINED (This simply means Variables that Values aren't assigned to)
let m;
console.log(m);

//OBJECTS (They can be used to store multiple values)
const personalData = {
  surName: "Owonikoko",
  lastName: "Hawau",
  institution: "University of Ilorin",
  courseOfStudy: "Andragogy",
  level: 400,
  bestCourse: "Psychology of Education",
};
console.log(personalData);
