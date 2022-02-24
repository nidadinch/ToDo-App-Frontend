<template>
  <div>
    <input id="input" name="textbox">
    <button className="add-button" id="addButton" @click="addToList()">Add</button>
    <ul className="todo-list">
      <li className="todo-list-item"
          v-for="item in items"
      >{{ it em }}
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
    addToList() {
      
    }
  }
}
</script>
