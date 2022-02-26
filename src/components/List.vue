<template>
  <div>
    <input id="input" name="textbox" v-model:value="newToDo">
    <button class="add-button" id="addButton" @click="addToList()">Add</button>
    <ul class="todo-list">
      <ListItem class="todo-list-item"
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
      />
    </ul>
  </div>
</template>
<script>
import ListItem from "@/components/ListItem";
import {mapGetters} from "vuex";
export default {
  name: 'List',
  components: {ListItem},
  data() {
    return {
      newToDo: ''
    }
  },
  created() {
     this.$store.dispatch('getTodos');
  },
  computed: {
    ...mapGetters(["todos"])
  },
  methods: {
    addToList() {
      this.$store.dispatch('addTodo', this.newToDo)
      this.newToDo = ''
    }
  }
}
</script>
