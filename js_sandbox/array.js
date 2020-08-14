//Create some arrays

const numbers=[23,43,56,36,5,45,34];
const numbers2 = new Array(22,33,45,67,54);

const fruit =['Apple','mango','Orange','Pear'];
const mixed =[22,'Hello', true, undefined, null,{a:1,b:2},new Date()];

console.log(mixed);

let val;

//Get array length
val=numbers.length;
//Check is Array
val= Array.isArray(numbers);
// Get single value
val = numbers[3];
//insert into array
numbers[2]= 100;
//find index of value
val=numbers.indexOf(36)

//Mutating Arrays
// //ADD on the end
// numbers.push(250);
// //Add on the front
// numbers.unshift(120);
// //Take off from end
// numbers.pop();
// //Take off from the front
// numbers.shift();
// //splice values
// numbers.splice(1,3);
// //reverse
// numbers.reverse();
// //concatenation array
// val=numbers.concat(numbers2);

//Sorting 
val = fruit.sort();
// val= numbers.sort();

// //Use the "compare function"
// val=numbers.sort(function(x,y){
//   return x-y;
// })

// //Reverse sort
// val=numbers.sort(function(x,y){
//   return y-x;
// })

//Find
function under50(num){
  return num < 50;
}
val= numbers.find(under50);

function over50(num){
  return num > 50;
}
val= numbers.find(over50);

console.log(numbers);
console.log(val);