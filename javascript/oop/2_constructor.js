// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
}

// Instantiate an Obj.
const book1 = new Book('Daughter of the Deep', 'Rick Riordan', '2021');
console.log(book1.getSummary());