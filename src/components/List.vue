<template>
  <div>
    <input id="input" name="textbox">
    <button class="add-button" @click="">Add</button>
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
