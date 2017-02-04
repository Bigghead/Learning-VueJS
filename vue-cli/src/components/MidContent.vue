<template id="">
  <div class="">
    <hr>
    <div class="row">
      <div class="col-xs-6">
        <ul class='list-group'>
          <li class='list-group-item'
              v-for='server in servers'
              v-on:click="status = server.status">
            Server #{{ server.id }}. Status: {{ server.status }}
          </li>
        </ul>
      </div>

      <div class="col-xs-6">
        <p>
          Server Details:{{ status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data: function(){
      return {
        servers: [
          {id: 1, status: 'Critical'},
          {id: 2, status: 'Normal'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Unknown'},
          {id: 5, status: 'Critical'},
          {id: 6, status: 'Critical'}

        ],
        status: ''
      }
    }
  }
</script>
