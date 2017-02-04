<template id="">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class='btn btn-danger'>Load Red Template</button>
        <button class='btn btn-primary'>Load Blue Template</button>
        <button class='btn btn-info'>Load Green Template</button>
        <hr>

        <red>
          <h2>Red</h2>
        </red>
        <blue>Blue</blue>
        <green>
          <h2>Green</h2>
        </green>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import Red from './components/Red.vue';
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';

  export default{
    components:{
      red: Red,
      blue: Blue,
      green: Green
    }
  }

</script>

<style media="screen">

</style>
