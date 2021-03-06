let re
//Literal characters
re=/hello/
re=/hello/i

//Metacharacter symbols
re=/^h/i  //Must start with
re=/world$/i  //Must End with
re =/^hello$/i  //Must begin and end
re =/^h.llo$/i  //Matches any one character
re =/h*llo/i    //Matches any character 0 or more times
re = /gre?a?y/i  //Optional character
re = /gre?a?y\?/i  //Escape character


//Brackets[]- Character Sets
re =/gr[ae]y/i  //Must be an a or e
re =/[GF]ray/i  //Must be a G or F 
re =/[^GF]ray/i  //Match anything except G or F
// re =/^[GF]ray/i //Starts with G or F
re =/[A-Z]ray/   //Match any uppercase letter
re =/[a-z]ray/   //Match any lowercase letter
re =/[A-Za-z]ray/   //Match any letter
re =/[0-9][0-9]ray/   //Match any digit


//Braces {} - Quantifiers

re =/Hel{2}o/i //Must occur exactly {m} amount of times
re =/Hel{2,4}o/i //Must occur exactly {m} amount of times
re =/Hel{2,}o/i //Must occur exactly {m} amount of times

//Paranthesis ()- Grouping
re = /^([0-9]x){3}$/

//Shorthand Character Classes
re =/\w/ //Word character -alphanumeric or _
re =/\w+/ //+ - one or more char
re =/\W/ //Non-Word character -non-alphanumeric or _
re= /\d/  //Match any digit
re= /\d+/  //Match any digit 0 or more times
re =/\D/  //Match any Non-digit
re= /\D+/
re =/\s/ //Match whitespace char
re= /\S/  //Match non-whitespace char
re= /Hell\b/i //Word boundary

//Assertions
re=/x(?=y)/ //Match x only if followed by y
re=/x(?!y)/ //Match x only if NOT followed by y 

//Str to match
// const str ='hBrad Hello World'
// const str ='Hllo'
// const str ='Grey'
// const str ='10ray'
// const str ='Hello'
//  const str ='3x3x3x'
// const str ='Hello, welcome to Hell'
const str ='dkjekdxydjekdj'

//Log results
const result= re.exec(str)
console.log(result)


function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`)
  }
  else{
    console.log(`${str} doesn't matches ${re.source}`)
  }
}