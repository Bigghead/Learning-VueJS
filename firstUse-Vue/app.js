new Vue({
  el:'#app',
  data: {
    title: 'Hello From VueJS!'
  },
  methods: {
    changeTitle : function(event){
      this.title = event.target.value;
    }
  }
});
