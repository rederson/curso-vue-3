<template>
<div>
  <!-- View -->
  <button @click="increment" >Add</button>
   {{ count }}
</div>

 
  
</template>


<script setup>
//state
import { ref } from "vue";


const count = ref(0);

// action
function increment() {
  count.value++;
} 
</script>

<style>

</style>