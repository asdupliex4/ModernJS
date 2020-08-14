const form = document. querySelector('form')
const taskInput =document.getElementById('task');
const select = document.querySelector('select');

//Clear input
taskInput.value ='';

// form.addEventListener('submit', runEvent);

// //Keydown
// taskInput.addEventListener('keydown', runEvent);

// //Keyup
// taskInput.addEventListener('keyup', runEvent);

//Keypress
//taskInput.addEventListener('keypress', runEvent);

//Focus
// taskInput.addEventListener('focus', runEvent);

//Blur
// taskInput.addEventListener('blur', runEvent);

// //Cut
// taskInput.addEventListener('cut', runEvent);

// //paste
// taskInput.addEventListener('paste', runEvent);

// //copy
// taskInput.addEventListener('copy', runEvent);

// //input
// taskInput.addEventListener('input', runEvent);

select.addEventListener('change',runEvent)

function runEvent(e){
 console.log(`EVENT TYPE: ${e.type}`); 
 // console.log(e.target.value);

//  console.log(e.target.value);
//Get input value
// console.log(taskInput.value);

// e.preventDefault();
}