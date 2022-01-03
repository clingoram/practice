// 都一樣能達到同樣目的，卻得重複寫好幾次
const book = {
  title: 'Harry Poter',
  author: 'JK.Rowling',
  year: '1997',
  getSumary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  },
  getBookAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old.`;
  }
}

const book2 = {
  title: 'The Rock from the Sky',
  author: 'Klassen, Jon',
  year: '2021',
  getSumary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  },
  getBookAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old.`;
  }
}
// Instantiate an Obj.
console.log(book.title);
console.log(book.getBookAge());

console.log(book2.title);
console.log(book2.getBookAge());
