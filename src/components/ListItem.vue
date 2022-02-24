<template>
  <li>
    {{todo.id}} . {{todo.text}}
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
