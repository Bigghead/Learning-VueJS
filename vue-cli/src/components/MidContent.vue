<template id="">
  <div class="">
    <hr>
    <div class="row">
      <div class="col-xs-6">
        <ul class='list-group'>
          <li class='list-group-item' v-for='index in 5'>
            Server # {{ index }}
          </li>
        </ul>
      </div>

      <div class="col-xs-6">
        <p>
          Server Details are not currently updated
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {

  }
</script>
