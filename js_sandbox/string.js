const firstName='William';
const age =36;
const lastName ='Johnson';
const str = 'Hello there my name is Aman'
const tags ='web design, web development'

let val;

val = firstName + lastName;

//Concatenation

val = firstName +' '+ lastName;

//Append

val ='Brad ';

val +='Traversy'

val ='Hello, my name is '+ firstName +' and I am '+ age 

//Escaping
val= 'That\'s awesome, I can\'t wait';

//length
val= firstName.length;

//concat
val= firstName.concat(' ',lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//indexof
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt
val= firstName.charAt('2')
val = firstName.indexOf('z');

//Get last Char
val =firstName.charAt(firstName.length-1)

//Pull substring out of String

val = firstName.substring(0, 4);

//slice

val = firstName.slice(0,4);
val = firstName.slice(-3);

//split

val =str.split(' ');
val = tags.split(',');

//replace
val = str.replace('Aman','Jack');

//includes 
val = str.includes('Hello')
val = str.includes('foo')

console.log(val);