//String 

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo='bar'
// console.log(name1)
// console.log(name2)

console.log(typeof name1)
console.log(typeof name2)

if(name2 === 'Jeff'){
  console.log('yes')
}else{
  console.log('No')
}

//Number
const num1 =5,
      num2 = new Number(5);
console.log(typeof num1)
console.log(typeof num2)

//Boolean
const bool1 = true;
const bool2 = new Boolean(true)
console.log(typeof bool1)
console.log(typeof bool2)

//Function
const getSum1 = function(x,y){
  return x+y;
}

const getSum2 = new Function('x','y', 'return x+y')

console.log(getSum1(1,1))
console.log(getSum2(1,3))
console.log(typeof getSum2)

//Object
const john1 ={name:"John"}
const john2 = new Object({name:"John"})
console.log(john1)
console.log(john2)

//Arrays
const arr1 =[1,2,3,4];
const arr2 = new Array(1,2,3,4)

//Regular Expressions
const re1 =/\w+/;
const re2 = new RegExp('\w+')
const re3 = new RegExp('\\w+')

console.log(re1)
console.log(re2)
console.log(re3)