class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }

  getBookAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old.`;
  }
}

// Magazie subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Obj.
const mag = new Book('Vogue', 'Eugenia de la Torriente', '1892');
console.log(mag.getBookAge());