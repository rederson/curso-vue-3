<template>
  <h2>Lista de Users</h2>

  <ul>
    <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
  </ul>
 
</template>

<script> 
import http from '@/services/http.js';

export default {
  
 data(){
  return {
    users: []

  }
 },

 async mounted() {
  try {
 const {data} = await http.get('http://localhost:8000/api/users');
 //console.log(data);
 this.users = data;
  } catch (error) {
       console.log(error);
  }
 },
 updated(){
  console.log('upadated');
 }

}
</script>

<style scoped>

</style>
