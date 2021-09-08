let dataM = {
  question: '',
  message: 'Hey Girl.',
  count: 0,
  firstName: 'Michael',
  middleName: 'Joseph',
  lastName: 'Jackson',
  copyright: new Date().getFullYear()
}

let vm = new Vue({
  el: '#section-for-vue',
  data: dataM,
  // callAPI 要call watch，在行為的當下(ING)監聽
  // 觸發行為:watch
  // 單純產生資料:computed
  // method比較少人用來連動資料(避免用method產生資料)
  watch: {
    askQuestion: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce(call func, 毫秒)，為的就是避免使用者過於頻繁的輸入
    // 在確認都打完字後，5秒再call getAnswer
    // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  // 資料(參數)直接處理資料(資料產生資料)可以用computed，如果會用到來源資料，資料有變動就會連動，這個會跟著連動，如果在HTML沒有呼叫，基本上就不會有作用，但Vue會全部做
  // computed 會將結果"暫存"起來，當參考到的資料改變時，computed 才會重新計算。
  // computed 是根據相依的資料改變時才做計算，而 method 是不管有無相依都會計算。
  computed: {
    wholeName: {
      // return this.firstName + ' ' + this.lastName;
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
    // m1: function () {
    //   console.log('1');
    //   return this.count + 1;
    // },
    // m2: function () {
    //   console.log('2');
    //   return this.m1 + 1;
    // },
    // reverseMessageCom: function () {
    //   console.log('computed');
    //   return this.message.split('').reverse().join('');
    // },
  },
  // 若computed property和methods同名，會優先較methods，若不同名，則是computed
  // mwthods要呼叫，每呼叫一次就重新執行
  methods: {
    reverseMessage: function () {
      console.log('method');
      // 因為是吃dataM的meeage，所以一旦dataM的meeage有改變，所有跟message有關的(不管是computed、method都會跟著變)
      return this.message.split('').reverse().join('');
    },
    getAnswer: function () {

    }
  },
})