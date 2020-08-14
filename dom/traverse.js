let val;

const list =document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val=listItem
val=list;

//Get child nodes
val =list.childNodes;
val= list.childNodes[0];
val= list.childNodes[0].nodeName;
val= list.childNodes[1].nodeType;

//1- Element
//2 -Attribute
//3 - Text node
//8 -comment
//9- Document itself
//10- DocType

//Get children element nodes
val= list.children;
val = list.children[0];
list.children[0].textContent ='Hello';

//Children of children
val=list.children[3].children[0].id='test-link';
val=list.children[3].children[0];

//first child
val=list.firstChild;
val=list.firstElementChild;

//Last child
val=list.firstChild;
val=list.lastElementChild;

//Count child elements
val=list.childElementCount;

//get parent node
val= listItem.parentNode;
val = listItem.parentElement;

//Parent of parent
val=listItem.parentElement.parentElement;

//Get next sibling
val= listItem.nextSibling;
val= listItem.nextElementSibling;
val= listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//Get next sibling
//val= listItem.previousSibling;
//val= listItem.previousElementSibling;
// val= listItem.previousElementSibling.previousElementSibling;

console.log(val);