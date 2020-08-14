//Object.prototype
//Person.prototype

function Person(firstName, lastName,dob){
  this.firstName = firstName
  this.lastName = lastName
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now()- this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  //}
}

//Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now()- this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person.prototype.getFullName= function(){
  return `${this.firstName} ${this.lastName}`
}

//Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('John','Doe','8-12-90')
const aman = new Person('Aman','Sharma','November 6 1996')

console.log(aman)

console.log(aman.calculateAge())
console.log(aman.getFullName())

aman.getsMarried('Elordi Perez')

console.log(aman.getFullName())
console.log(aman.hasOwnProperty('firstName'))
console.log(aman.hasOwnProperty('getFullName'))