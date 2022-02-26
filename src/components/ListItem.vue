<template>
  <li>
    {{todo.id}} . <span class="todo-list-item">{{todo.text}}</span>
  </li>
</template>


<script>
export default {
  name: "ListItem",
  props: {
    todo: {
      type: Object,
      isRequired: true,
    }
  },
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
