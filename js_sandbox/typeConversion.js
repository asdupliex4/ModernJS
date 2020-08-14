let val;

//Number to String
// val=5;
val =String(544);
val =String(4+4);

//Bool to String
val= String(true);
//Date to String
val= String(new Date())

// array to String
val =String([1,2,3,4])

//toString()
val = (5).toString();
val = (true).toString();

//String to number
let value;
value=Number('5');
value=Number(true);
value=Number(false);
value=Number(null);
value=Number('hello');
value=Number([1,2,3]);
value=parseInt('100.38')
value=parseFloat('100.38')

//Type cohersion

const val1=String(5);
const val2=6;
const sum = Number(val1+val2);

console.log(sum);
console.log(typeof sum)

//Output
console.log(val);
console.log(typeof val)
console.log(val.length)

console.log('String to number')
console.log(value.toFixed(2));


