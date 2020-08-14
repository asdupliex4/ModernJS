class Person{
   constructor(firstName, lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob)
   }

   greeting(){
     return `Hello there ${this.firstName} ${this.lastName}`
   }
   calculateAge(){
     const diff = Date.now()- this.birthday.getTime()
     const ageDate = new Date(diff)
     return Math.abs(ageDate.getUTCFullYear()-1970)
   }

   getsMarried(newLastName){
     this.lastName = newLastName
   }
   static addNumbers(x, y){
    return x+y;
}
}

const aman = new Person('Aman', 'Sharma','11-06-1996')

console.log(aman)

aman.getsMarried('Elordi Perez')

console.log(aman.greeting())
console.log(aman.calculateAge())
console.log(Person.addNumbers(1,1))