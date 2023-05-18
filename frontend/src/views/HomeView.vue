<template>
  <button @click="showSomething()">Show</button>
 
 <input type="text" v-if="showElement" ref="inputElement">
</template>
<script setup>

import { nextTick, ref } from "vue";

const showElement = ref(false);
const inputElement = ref(null);

async function showSomething() {
  showElement.value = true;

  setTimeout(() => {
      inputElement.value.focus()

        console.log(inputElement.value);
  }, 100);

await nextTick(()=>{
  inputElement.value.focus()
  //console.log(inputElement.value);
  console.log('focus');
})

  console.log('carregou');
}

</script>

<style scoped>

</style>