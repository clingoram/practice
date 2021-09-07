let dataM = {
  message: 'Hey Girl.',
  // html: '<span style="color:red">Turn red</span>',
  copyright: new Date().getFullYear()
}

// Object.freeze(dataM);


// game's data type
// let game = {
//   img: 'src',
//   // img: {
//   //   src: String,
//   //   alt: String
//   // },
//   title: 'string / html',
//   description: 'string / html',
//   price: Number,
//   price: {
//     type: String,
//     count: Number
//   },
//   count: Number
// }

let vm = new Vue({
  el: '#section-for-vue',
  // template: '<span style="color:red">Turn red</span>',
  template: '#test',
  data: dataM,
  creatd: function () {
    console.log(this);
  },
  method() {

  }
})