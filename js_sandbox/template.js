const name ='John';
const age = 30;
const job = 'Web developer';
const city = 'Miami';
let html;

//without template String (es5)

html = '<ul>'
'<li> Name: ' + name +'</li>'+
'<li>Age: '+ age +'</li>'+
'<li>Job: '+ job +'</li>'+
'<li>City: '+ city +'</li>'+
'</ul>';

function hello(){
  return 'hello'
}

//With template strings (es6)
html =`
<ul>
<li>Name : ${name}</li>
<li>Age : ${age}</li>
<li>Job : ${job}</li>
<li>City : ${city}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age > 20 ? 'Over 30':'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;