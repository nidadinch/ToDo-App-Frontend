<template>
  <div>
    <ul class="todo-list">
      <li class="todo-list-item"
           v-for="item in items"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'List',
  data(){
    return{
      items:[],
    }
  },
  async mounted() {
  },
  methods:{
  }
}
</script>
