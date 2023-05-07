<template>
<div class="">
  
  <h2>App</h2>
  {{ count }}
{{ userName }}

<ul>
  <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
</ul>


<button v-on:click="showHeader = !showHeader" >Toggle header</button>


<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>

</div>
<div>
  
</div>
  <router-view></router-view>


</template>

<script setup>

import { onMounted, onUpdated, reactive, ref } from 'vue';

const count = ref(0);
const userName =  ref('Alexandre');

const users = reactive([
  {
    firstName:'Alexandre',
    age: 40
  },
  {
    firstName:'Maria',
    age: 40
  }
])

onMounted(()=>{
  console.log('mounted');
})
onUpdated(()=> {
  console.log('upadate');
})

</script>
<style>
</style>