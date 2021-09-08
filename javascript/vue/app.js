
let vm = new Vue({
  el: '#section-for-vue',
  data() {
    return {
      link: {
        content: 'Google',
        href: "http://www.google.com/",
        target: "_blank",
        fontColor: "red"
      },
      input: {
        type: "text"
      }
    }
  }

})