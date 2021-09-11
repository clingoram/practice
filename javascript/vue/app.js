const mapping = {
  A: 'A content',
  B: 'B content',
  C: 'C content'
}

let vm = new Vue({
  el: '#section-for-vue',
  data() {
    return {
      /*
       Event Handling.
       v-on
      */
      count: 0,
      eventArray: ['apple', 'pineapple', 'watermelon'],
      /*
       Rendering start
      */
      // 若show=true(顯示)
      show: false,
      type: 'A', // defalut
      // 資料數量多可以外面用陣列包裝，裡面用key:value，包成一組
      music:
        [
          // type obj(key:value) is much better.
          { singer: 'MAMAMOO', song: 'Traveler', gender: 'F', nation: 'Korea' },
          { singer: 'MAMAMOO', song: 'Wind Flower', gender: 'F', nation: 'Korea' },
          { singer: 'Maroon 5', song: 'Beautiful Mistakes', gender: 'M', nation: 'USA' },
          { singer: 'Jolin', song: '玫瑰少年 Womxnly', gender: 'F', nation: 'Taiwan' },
          { singer: 'Justin Biber', song: 'Stay', gender: 'M', nation: 'Canada' },
        ],
      person:
        [
          { name: 'Solar', gender: 'F', age: 30, description: 'Leader of MAMAMOO.' },
        ],
      // array.no key:value
      color: ['red', 'blue', 'orange', 'pink']
      /*
      Rendering end
      */
    }
  },
  // computed:資料處理資料，做一次會cache(暫存)下來;methods:每次都會做;watch:資料傳事件、資料傳行為(監聽資料，若有更改，傳到行為)
  computed: {
    /*
      Rendering start
    */
    conditionalContent: function () {
      return mapping[this.type] || 'No content';
    },
    // 在源頭這裡過濾資料
    filterMusic: function () {
      return this.music.filter(function (singer) {
        return singer.gender === 'F';
      })
    }
    /*
     Rendering end
    */
  },
  methods: {
    // event
    clickHandler: function (event) {
      this.count = event.target
    }
  }
})