function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
}

// Magazine constructor.
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constructor.
Magazine.prototype.constuctor = Magazine;

// Instantiate an Magazine Obj.
const mag = new Magazine('Vogue', 'Eugenia de la Torriente', '1892', 'Dec.');
console.log(mag.getSummary());