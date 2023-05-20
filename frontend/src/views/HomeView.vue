<template>
<div>
  <button @click="increment" >Add</button>
  
  <br /> ou <br />
  <button @click="store.dispatch('increment')"> Add com função no botão</button>
  <hr>
  <br /> ou <br />
  <button @click="store.commit('increment',10)"> Add com função no botão direto mutations</button>
  <hr>
   {{ store.state.count }}

   <hr>
   {{ store.getters.getCounter }}
</div>

</template>


<script setup>
import { useStore } from "vuex";

const store = useStore();

function increment(){
  store.dispatch('increment');
}

</script>

<style>

</style>