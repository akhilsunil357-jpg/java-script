


// Creating the book object
let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,

  // Method inside the object
  getSummary: function() {
    return "The book '" + this.title + 
           "' was written by " + this.author + 
           " in " + this.year + ".";
  }
};

// Function outside the object
function printBookSummary(bookObj) {
  console.log(bookObj.getSummary());
}

// Calling the function
printBookSummary(book);

