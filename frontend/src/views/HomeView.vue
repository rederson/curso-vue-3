<template>
  <div>
      <input style=" ; margin: 10px 10px;" type="text" v-model="user.firstName" placeholder="First Name">
      <input type="text" v-model="lastName" placeholder="Last Name">
  </div>
 <div>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }} <input type="text" v-model="item.name"></li>
  </ul>
 </div>
 <div>
  <span>Conteudo do span</span>
 </div>
</template>
<script setup>
import { ref, watch, reactive, computed, onMounted, watchEffect } from 'vue';

const firstName = ref('');
const lastName = ref('');
const span = ref(null);

const user = reactive({
  firstName:'',
  lastName:''
});

const items = reactive([
  {
    id: 1,
    name: 'Alexandre'
  },
  {
    id: 2,
    name: 'João'
  },
  {
    id: 3,
    name: 'Maria'
  }
]);

//watch(lastName, (value, oldValue)=> {
// console.log(value, oldValue);
// })

//watch([firstName, lastName], ([valueFirstName, valueLastName], oldValue)=> {
 //console.log(valueFirstName, valueLastName);
 //console.log('observando watch');
//});

//watchEffect(()=>{
 // console.log(firstName.value, lastName.value);
//})

//watchEffect(()=>{
 //console.log(items);
 //items.forEach((item) => {
 // console.log(item.name);
// })
//})
onMounted(()=> {
  console.log(span.value.textContent);
});

watch(
  () => user.firstName,
  (value, oldValue) => {
    console.log(value, oldValue);
  })

watchEffect(()=>{
  //console.log('observando watch effect');
  // Não funciona porque carrega antes do carregamento do DOM
  //console.log(spán.value.textContent); 
  console.log(user.firstName.value);
});
</script>

<style scoped>

</style>