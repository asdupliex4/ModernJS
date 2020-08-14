const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried : function(newLastName) {
    this.lastName = newLastName
  }
}

const aman = Object.create(personPrototypes)

aman.firstName= 'Aman';
aman.lastName = 'Sharma'
aman.age = 23;

aman.getsMarried('Elordi Perez')

console.log(aman.greeting())

const brad = Object.create(personPrototypes, {
  firstName:{value:'Brad'},
  lastName:{value:'Traversy'},
  age: {value: 36}
} )

console.log(brad)

console.log(brad.greeting())