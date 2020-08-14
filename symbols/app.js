 // create a Symbol

//  const symb1=Symbol();
//  const symb2=Symbol('sym2');

//  console.log(symb1)
//  console.log(symb2)
//  console.log(typeof symb2)

// console.log(Symbol()===Symbol())
// console.log(Symbol('123')===Symbol('123'))
// console.log(`Hello ${String(symb1)}`)
// console.log(`Hello ${symb1.toString()}`)

//unique Object Keys
const KEY1 =Symbol()
const KEY2 = Symbol('sym2')

const myObj={}

myObj[KEY1] ='Prop1'
myObj[KEY2] ='Prop2'
myObj.key3 ='Prop3'
myObj.key4 ='Prop4'

// console.log(myObj[KEY1])
// console.log(myObj[KEY2])

for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`)
}

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key:'prop'}))
console.log(JSON.stringify({[Symbol('symb1')]:'prop'}))