//conditional statements in js
// if statement

let age = 20;
if(age >= 18){
    console.log("you are eligible to vote");
}

// if else statement
let mode = "dark"; 
if(mode === "dark"){ 
    console.log("dark mode is on");  
}else{ 
    console.log("light mode is on"); 
} 
 
let num = 3   
if (num %2 === 0){  
    console.log("number is even");  
}else{  
    console.log("number is odd");  
}  
  
// if else if statement  
let marks = 85; 
if(marks >= 90){ 
    console.log("grade A"); 
} 
else if(marks >= 80){ 
    console.log("grade B"); 
} 
else if(marks >= 70){ 
    console.log("grade C"); 
}       
else if(marks >= 60){
    console.log("grade D");    
}           
else{
    console.log("grade F");
}

// loops in javaScript

// for loop
let a = "Avika mane";
for(let i =1 ; i<=5; i++){
    console.log(a);
}
console.log("for loop ended");
// calcute the sum of 1 to n numbers 

for(let i = 1; i <= 10; i++){
   console.log("i = ", i);

}

// while loop
let sum = 0;
let i = 1;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log("Sum =", sum);

// do while loop
let j = 1;
do {
    console.log("j = ", j);
    j++;
} while (j <= 5);

// break statement
for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }   
    console.log("i = ", i);
}

// continue statement
for(let i = 1; i <= 10; i++){
    if(i === 5){    
        continue;
    }
    console.log("i = ", i);
}

// nested loops
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log("i = ", i, "j = ", j);
    }
}

// for of loop
let fruits = ["apple", "banana", "orange"];
for(let fruit of fruits){
    console.log(fruit);
}

// for in loop
let person = {
    name: "Avika",
    age: 20,
    city: "Pune"
};  
for(let key in person){
    console.log(key, ":", person[key]);
}

// array 
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers.length);
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);

// object
let student = {
    name: "Avika",
    age: 20,
    city: "Pune"
};
console.log(student.name);
console.log(student["age"]);
student.age = 21;
console.log(student);

// functions
function greet(name){
    console.log("Hello, " + name);
}
greet("Avika");

function add(a, b){
    return a + b;
}
let sum1 = add(5, 10);
console.log("Sum =", sum1);

function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(5));

// arrow function
let greet2 = (name) => {
    console.log("Hello, " + name);
}
greet2("Avika");
let add2 = (a, b) => {
    return a + b;
}   
let sum2 = add2(5, 10);
console.log("Sum =", sum2);

// template literals
let name = "Avika";
let age1 = 20;
console.log(`My name is ${name} and I am ${age1} years old.`);  

// destructuring
let person1 = {
    name: "Avika",
    age: 20,
    city: "Pune"
};
let {name: personName, age: personAge} = person1;
console.log("Name:", personName);
console.log("Age:", personAge); 

// spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);
let obj1 = {a: 1, b: 2};
let obj2 = {...obj1, c: 3};
console.log(obj2);




