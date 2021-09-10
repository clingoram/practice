const mapping = {
  A: 'A content',
  B: 'B content',
  C: 'C content'
}

let vm = new Vue({
  el: '#section-for-vue',
  data() {
    return {
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
    }
  },
  // 做一次會cache(暫存)下來;methods:每次都會做
  computed: {
    conditionalContent: function () {
      return mapping[this.type] || 'No content';
    },
    // 在源頭這裡過濾資料
    filterMusic: function () {
      return this.music.filter(function (singer) {
        return singer.gender === 'F';
      })
    }
  }
})