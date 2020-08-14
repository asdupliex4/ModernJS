
//Book Constructor
function Book(title, author, isbn){
  this.title=title
  this.author=author
  this.isbn=isbn
}

//UI Constructor
function UI() {}

//Add Book to list
UI.prototype.addBookToList = function(book){
 
 //console.log(book)
   const list= document.querySelector('tbody')
   //Create tr element
   const row = document.createElement('tr')
  
  
  // console.log(row)
  
   //Insert cols

   row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>` 
  
  list.appendChild(row)
}

//Show Alert

UI.prototype.showAlert= function(msg, className){
  //Create div
  const div = document.createElement('div')
  //Add classes
  div.className = `alert ${className}`
  // Add text
  div.appendChild(document.createTextNode(msg))
  //Get parent
  const container = document.querySelector('.container')
  //Get form
  const form = document.querySelector('#book-form')
  //Insert alert
  container.insertBefore(div, form)

  //Timeout
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000)
}

UI.prototype.deleteBook= function(target){
  if(target.className  ==='delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value=''
  document.getElementById('author').value=''
  document.getElementById('isbn').value=''
}

document.getElementById('book-form').addEventListener('submit', function(e){
  //Get form values
  const title = document.getElementById('title').value,
        author =document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author,isbn)
  
  //Instantiate UI
  const ui= new UI()

  console.log(ui)

  //Validate
  if(title === '' || author === '' || isbn === ''){
    // Error alert
    ui.showAlert('Please fill in the book','error')
  }
  else{
    //Add book to list
  ui.addBookToList(book)

  //Show success
  ui.showAlert('Book Added!','success')
  // Clear fields
  ui.clearFields();

  }
    
   e.preventDefault();
 
})

//Event Listener for delete
document.querySelector('.book-list').addEventListener('click',function(e){

  //Instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target)

  ui.showAlert('Book removed!','success')

  e.preventDefault()
})