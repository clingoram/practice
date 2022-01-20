// Object of protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old.`;
  }
}

// Create Object.
// way 1.
// const book1 = Object.create(bookProtos);
// book1.title = 'Daughter of the Deep';
// book1.author = 'Rick Riordan';
// book1.year = '2021';
// way 2.
const book1 = Object.create(bookProtos, {
  title: { value: 'Daughter of the Deep' },
  author: { value: 'Rick Riordan' },
  year: { value: '2021' }
});
console.log(book1); 