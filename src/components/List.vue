<template>
  <div>
    <input id="input" name="textbox" v-model:value="newToDo">
    <button class="add-button" id="addButton" @click="addToList()">Add</button>
    <ul class="todo-list">
      <li class="todo-list-item"
          v-for="item in items"
      >{{ item }}
      </li>
    </ul>
  </div>
</template>

<script>

import API from "@/api";

export default {
  name: 'List',
  data() {
    return {
      items: [],
      newToDo: ''
    }
  },
  async created() {
    try {
      this.items = await API.getItemList()
    } catch (e) {
      console.error(e)
    }
  },
  async mounted() {
  },
  methods: {
    async addToList() {
      await API.addTodoItem(this.newToDo)
    }
  }
}
</script>
