<script setup>

import http from '@/services/http.js';

import { onMounted, reactive, ref } from "vue";

let users = reactive({users:[]});
const imageSrc = ref('https://picsum.photos/200/300');
const is_admin = ref(false);
const count = ref(0);
const userName= ref('');

function add(teste) {
  console.log(teste);
  count.value++
}

function changeName() {
  userName.value = event.target.value;
}

onMounted( async ()=>{
  try {
    const {data} = await http.get('api/users');
    //console.log(data);
    users.users = data;
  } catch (error) {
    console.log(error);
  }
})
</script>
<template>
  <h2>Lista de users</h2>
  
  <img :src="imageSrc" alt="" class="my-default-class" :class="{'my-class':is_admin,'my-other-class':!is_admin}" />

 <button @click="add('teste')">Clique aqui {{ count }}</button>

 {{ userName }}
 
<!--<input type="text" @keyup="changeName" placeholder="Name">-->
<input type="text" v-model="userName" placeholder="Name">
  <ul>
    <li v-for="user in users.users" :key="user.id">{{ user.firstName }}</li>
  </ul>

</template>

<style scoped>
.my-class {
  border: solid 4px red;
}
.my-other-class {
  border: solid 4px blue;
}

</style>
