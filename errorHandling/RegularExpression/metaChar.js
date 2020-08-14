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


//Str to match
// const str ='hBrad Hello World'
// const str ='Hllo'
// const str ='Grey'
const str ='Grey?'

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