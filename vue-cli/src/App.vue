<template>

<div class="container">

  <app-header></app-header>
  <mid-content></mid-content>
  <app-footer></app-footer>


</div>


</template>

<script>
import Header from './Header.vue'
import MidContent from './MidContent.vue'
import Footer from './Footer.vue'
  export default{
    components: {
      'app-header': Header,
      'mid-content' : MidContent,
      'app-footer': Footer
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
img{

}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
