// comment
// console.log('Hey World')

// variables

// => cannot be a reserved a keyword
// => should be meaningful
// => cannot start with a number
// => cannot contain a space or hyphen(-)
// => Are case sensitive

// let name = 'Haroon';
// console.log(name);

// constants

const interest = 0;
console.log('interest = ' + interest)

// primitive types

// strings
// Number
// Booleean
// Undefined
// Null

// let name = 'Haris'; // String literal
// let age = 22; // Number literal
// let isApproved = false; // Boolean literal
// let firstName = undefined;
// let SelectedColor = null;

// Dynamic Typing

// let name = 'Haris';
// // typeof name;
// name = 3;

// Objects

// reference types

// Object
// Array
// Function

// let name = 'Ahmad';
// age = 21;

let person = {
    name: 'Ahmad',
    age: 21
}

// dot notation

person.name = 'Furqan';
console.log(person.name)

// bracket notation

person["name"] = 'Mary';

console.log(person)

// Arrays

let selestedColors = ['red', 'white'];
// console.log(selestedColors[0])
selestedColors[2] = 1;
selestedColors[3] = 'green';

console.log(selestedColors.length)

console.log(selestedColors)

// Functions

// function greet(name, lastName) {
//     console.log('Hey, ' + name + ' ' + lastName)
// }

// greet('Ahmad', 'Hassan');

// Types of functions

// performing a task

function greet(name, lastName) {
    console.log('Hey, ' + name + ' ' + lastName)
}

// calculating a value
function square(number) {
    return number * number;
}

console.log(square(5) )
greet('Ahmad', 'Hassan');