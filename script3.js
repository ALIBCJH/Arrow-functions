function calcAddition(number1, number2){
  return number1 + nummber2;
}
calcAddition()
console.log(calcAddition(6,9));
/* In the example code above, we have created a function named calcAddition
that takes two numbers as the parameter and returns the addition of the 2 numbers
*/

//ARROW FUNCTION 
const a = ["Hydrogen","Helium", "Lithium", "Berylium"];

const a2 = a.map(function (s){
  return s.length;
});
console.log("Normal way", a2);

const a3 = a.map((s) => s.length);
console.log("Using Arrow Function", a3);
//ARROW FUNCTION 
const a = ["Hydrogen","Helium", "Lithium", "Berylium"];

const a2 = a.map(function (s){
  return s.length;
});
console.log("Normal way", a2);

const a3 = a.map((s) => s.length);
console.log("Using Arrow Function", a3);
//Parameter are additional information passed to a functio

function multiply(a,b){
    b = typeof b !== "undefined" ? b:1;
    return a*b;
    
}
console.log(multiply(69));
// Function Call


function welcomeMsg(name){
  return ("Hello" + name + "welcome to GeeksforGeeks");
  
}
let nameVal = "Admin"

console.log(welcomeMsg(nameVal));
let function_name = argument1 => expression /*this is one is for passing single arguments */
 
let function_name = (argument1, argument2,) => expression

//Tradditional way of defining java script functions
 function multiply(a,b){
     return a * b;
 }
 console.log(multiply(3,5));
 
 //Defining Java script functions using arrow function
 value = (a,b) => ;
 console.log(value(3,5)); // Arrow functions are more popular among developers beacuse they are succintness
 //Arrow functions with no parameters
 const string = () => "geeksforgeeks";
 console.log(string);
 
 //NESTED FUNCTIONS IN  ARROW FUNCTIONS
 let array = ['sam', 'serah', 'john'];
 
 let lengths = array.map((string) => string.length);
 
 console.log(lengths);
 //output = [3,4,5]

 const name = ()=>{
  return "I Love coding!!!"
 }
 console.log(name);

 function sum (a, b) {
  return a+b;
 }
 sum(1, '2');

 //The output of the above code is 12 
 function sum (a, b); =>{
  return a+b;
 };
 sum(1 + 2);

 export const Greet = () => {
  return(
    <div>
      <h1>Welcome to coding in react</h1>
    </div>
  )
 }
// Function with default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Call the function without providing a parameter
greet(); // Output: Hello, Guest!

// Call the function with a parameter
greet("John"); // Output: Hello, John!

function achimMark(){
  return "I am Achim mark";
}
achimMark();
console.log(achimMark());

function jumaSimon(name,course){
  return `Hello ${name} you are studying ${course}`
}
jumaSimon(mark);
console.log(jumaSimon());