/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr2.push(5);
console.log("Second array:", arr2);
console.log("First Array", arr1);

// Copying an array
let arr3 = [6, 7, 8];
let arr4 = [...arr3];
arr4.push(9);

console.log("Third array:", arr3);
console.log("Fourth Array", arr4);

// Copying an object
let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};
let obj3 = {...obj1, b:5};

console.log("First object:", obj1);
console.log("Second object:", obj2);
console.log("Third object:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
