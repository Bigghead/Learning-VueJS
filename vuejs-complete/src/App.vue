<template id="">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">

        <button v-on:click="selectedComponent = 'quote'">Quote</button>
        <button v-on:click="selectedComponent = 'quoteAuthor'">Author</button>
        <button v-on:click="selectedComponent = 'quoteNew'">New</button>

        <p>
          {{ selectedComponent }}
        </p>

        <component v-bind:is="selectedComponent">

        </component>
        <!-- <quote >
          <h2>Quote</h2>
          <p>
            A Wonderful Quote
          </p>
        </quote> -->
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import Quote  from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New    from './components/New.vue';

  export default{
    data: function(){
      return {
        quote: 'A Wonderful Quote',
        selectedComponent: 'quote'
      }
    },
    components:{
      quote: Quote,
      quoteAuthor: Author,
      quoteNew : New
    }
  }
</script>

<style media="screen">

</style>
