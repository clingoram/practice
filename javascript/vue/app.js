
let vm = new Vue({
  el: '#section-for-vue',
  data() {
    return {
      isActive: true,
      activeClass: 'active',
      errorClass: 'text-danger',
      link: {
        content: 'Google',
        href: 'http://www.google.com/',
        target: '_blank',
        // for style
        fontColor: 'red'
      },
      input: {
        type: 'text'
      },
      // object
      classObj: {
        // key:value
        aaa: true,
        bbb: false
      },
      // 比class obj還差一些，因為這樣他在HTML上會顯示全部陣列，容易出錯。也能用三元運算式(不好)
      classArray: ['apple', 'orange'],
      // for style(use obj type)
      styleObj: {
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  computed: {
    classComponent: function () {
      return {
        active: this.isActive
      }
    }
  }

})