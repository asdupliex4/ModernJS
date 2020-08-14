// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('Hello World')
// // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', OnClick);

function OnClick(e){
  // console.log('Clicked');

  let val;
  val=e;

  //Event target element
  val= e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

// val = e.target.innerText='Hello world';
  
//Event type
val = e.type;

//Timmestamp
val =e.timeStamp

//Coord event relative to the window
val=e.clientY;
val=e.clientX;

//Coord event relative to the element
val=e.offsetY;
val=e.offsetX;


  console.log(val);
}