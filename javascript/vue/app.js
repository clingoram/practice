let d7 = Vue.component('d7');

Vue.component('MainIndex', {
  component: {
    d7
  },
  // data: function () {
  //   return {
  //     count: 0
  //   }
  // },
  // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
//  './components/MainIndex.vue'
new Vue({
  el: '#app',
})