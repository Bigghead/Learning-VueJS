
new Vue({
  el: '#app',
  data:{
    counter : 0,
    x : 0,
    y : 0,
    value :''
  },
  methods:{
    count: function(number){
      this.counter += number;
    },
    updateCoor: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alert: function(){
      alert('I was clicked');
    },
    changeVal : function(event){
      this.value = event.target.value;
    }
  }
});
