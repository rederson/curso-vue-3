<template>
<div>
  <button @click="increment"> Add Increment</button>
  <button @click="decrement"> Add Decrement</button>
   {{ count }}
   <hr>

<template v-if="data.length > 0">
  <button @click="hideUsers">Hide Users</button>
  <ul>
    <li v-for="(user, index) in data" :key="index">{{ user.firstName }}</li>
  </ul>
</template>
<template v-else>
  <button @click="getUsers">Get Users</button>
</template>
</div>

</template>


<script setup>
import { computed } from "vue";
import { useStore } from "vuex";


const store = useStore();

const count = computed(()=> store.state.counter.count)
//const totalCount = computed(()=> store.getters['counter/getCounter'])
const data = computed(()=> store.state.users.data)


const increment = () => store.dispatch('counter/increment')
const decrement = () => store.commit('counter/decrement')
const getUsers = () => store.dispatch('users/getUsers')
const hideUsers = () => store.commit('users/setUsers',[])

</script>

<style>

</style>