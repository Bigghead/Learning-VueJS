function random (){
  return Math.floor(Math.random()* 11);
}
new Vue({
  el: '#app',
  data: {
    gameOver: true,
    playerHealth: 100,
    monsterHealth : 100,
    playDamage: 0,
    playHeal : 0,
    heal: false,
    monDamage: 0,
    gameStart: false
  },
  methods:{

        healing: function(){
          this.heal = true;
          this.playHeal = 0;
          var num = random();
          this.playerHealth += num;
          this.playHeal += num;
          var num2 = random();
          this.playerHealth -= num2;
        },

    playAttack: function(){

      var num = random();
      this.playDamage = 0;
      this.playDamage += num;
      this.playerHealth -= num;

      var num2 = random();
      this.monDamage = 0;
      this.monDamage += num2;
      this.monsterHealth -= num2;
      this.gameStart = true;
      if(this.playerHealth <= 0 || this.monsterHealth <= 0){
        this.gameOver = true;
        this.playerHealth = 100,
        this.monsterHealth = 100;
      }
    }

  }


});
