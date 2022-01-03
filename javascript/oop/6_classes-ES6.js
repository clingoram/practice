// 這一個OOP寫法和PHP物件導向比較類似，但其實是JS ES6語法糖的用法
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

  static topSale() {
    return 'Harray Potter';
  }
}
// Instantiate an Obj.
const book1 = new Book('Daughter of the Deep', 'Rick Riordan', '2021');
console.log(book1.getBookAge());
console.log(Book.topSale());