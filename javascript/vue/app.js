let dataM = {
  message: 'Hey Girl.',
  copyright: new Date().getFullYear()
}

let vm = new Vue({
  el: '#section-for-vue',
  data: dataM,
  // 資料參數直接處理資料可以用computed
  computed: {
    reverseMessageCom: function () {
      console.log('computed');
      return this.message.split('').reverse().join('');
    },
  },
  // 若computed property和methods同名，會優先較methods，若不同名，則是computed
  // mwthods要呼叫，每呼叫一次就重新執行
  methods: {
    reverseMessage: function () {
      console.log('method');
      // 因為是吃dataM的meeage，所以一旦dataM的meeage有改變，所有跟message有關的(不管是computed、method都會跟著變)
      return this.message.split('').reverse().join('');
    }
  },
})