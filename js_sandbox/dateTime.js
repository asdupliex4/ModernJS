let val;

const today = new Date();

// let birthday = new Date('6-11-1996 11:25:00');
let birthday = new Date('November 11 1996 11:25:00');
// val = today.toString();

// console.log(typeof val);

// val= birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2)
birthday.setDate(12)
birthday.setFullYear(1986)
birthday.setHours(3)
birthday.setMinutes(30)
birthday.setSeconds(25)

console.log(birthday);
console.log(val);

