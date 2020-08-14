// if(something){
//   do something
// }
// else{
//   do something else
// }

const id= 100;

// //Equal to
// if (id== 101){
//   console.log('Correct');
// }
// else{
//   console.log('Incorrect');
// }


// //Not Equal to
// if (id!= 101){
//   console.log('Correct');
// }
// else{
//   console.log('Incorrect');
// }

// //Equal to value and type
// if (id=== 100){
//   console.log('Correct');
// }
// else{
//   console.log('Incorrect');
// }

// //Not Equal to value & type
// if (id!== 100){
//   console.log('Correct');
// }
// else{
//   console.log('Incorrect');
// }


// if (typeof id!=='undefined'){
//  console.log(`The ID is ${id}`);  
// }else{
//   console.log('No id')
// }

// if (typeof id==='undefined'){
//   console.log('No id')  
//  }else{
//   console.log(`The ID is ${id}`);
//  }

// if(id<=100){
//   console.log('Correct');
// }else{
//   console.log('Incorrect')
// }

// const color='yellow';

// if(color==='red'){
//   console.log('Color is red');
// }
// else if(color==='blue'){
// console.log('Colr is blue')
// }
// else{
//   console.log('color is not red or blue')
// }

const name ='Steve';
const age =24;

if(age>0 && age<12){
  console.log(`${name} is a child`);
}else if(age >=13 && age <= 19){
  console.log(`${name} is a tennager`)
}
else {
  console.log(`${name} is an adult`)
}

//OR ||

if(age <16 || age >65){
  console.log(`${name} can not run in the race`)
}
else{
  console.log(`${name} is registered for the race`)
}

//Ternary operators
console.log(id===100? 'Correct':'Incorrect')

//Without braces 
if(id===100)
console.log('Correct')
else
console.log('Incorrect')