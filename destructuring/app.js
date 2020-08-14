// Destructuring Assigment

let a,b
// [a,b] =[100,200]

//Rest Pattern(Doubt)
// [a, b,c, ...rest] = [100,200,300,400,500]

({a,b,...rest}={a:100, b:200, c:300})

console.log(a)
console.log(b)
console.log(rest)

//Array Destructuring

// const people = ['John', 'Beth', 'Mike']

// const[person1,person2,person3] =people
// console.log(person1,person2,person3)

// function getPeople(){
//   return ['John','Beth','Mike']
// }

// let person1,person2,person3
// [person1,person2,person3] =getPeople()

// console.log(person1, person2, person3)

//OBJECT DESTRUCTURING

const person ={
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender:'Male',
  sayHello: function(){
    console.log('Hello')
  }
}

// Old ES5
// const name= person.name,
// age=person.age,
// city =person.city

 
//New ES6 Destructuring
const{name, age, city,sayHello} =person

console.log(name, age,city)

sayHello()