<template>
  <div>
    <input id="input" name="textbox">
    <button class="add-button" id="addButton" @click="addToList()">Add</button>
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
    addToList(){

    }
  }
}
</script>
