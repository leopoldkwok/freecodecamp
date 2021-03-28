// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (originalBookList, bookName) {

  // originalBookList.concat(bookName);
  return [...originalBookList, bookName]
  
  // Change code above this line
}

// Change code below this line
function remove (originalBookList, bookName) {
  var book_index = originalBookList.indexOf(bookName);
  if (book_index >= 0) {

    let newBookList = [...originalBookList];
    newBookList.splice(book_index, 1)
    return newBookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
