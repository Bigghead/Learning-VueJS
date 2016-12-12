new Vue({
  el: '#exercise',
  data: {
    name : 'Dodo',
    age : 7,
    link: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/shiba-inu-dog-breed-picutres/7-senior.jpg'
  },

  methods:{
    age3 : function(){
      return this.age * 3;
    },
    randomNum : function(){
      return Math.random();
    }
  }
})
