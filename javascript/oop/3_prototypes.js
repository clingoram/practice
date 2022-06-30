function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
}
Book.prototype.getBookAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} old.`;
}

// Instantiate an Obj.
const book1 = new Book('Daughter of the Deep', 'Rick Riordan', '2021');
console.log(book1.getSummary());