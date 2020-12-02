<template>
  <div id="app">
    <p>{{number }}</p>
    <p>{{ msg }}</p>
    <button @click="add"></button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  props: {
    msg: String
  },
  // name: "test",
  setup() {
    let number = ref(0)

    function add() {
      number.value++
    }

    return {
      add,
      number
    }
  }
}
</script>

<style scoped>
#app {
  width: 200px;
  height: 200px;
  background: #FF6B01;
}
</style>