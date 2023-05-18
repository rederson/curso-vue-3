<template>
  <div style="padding: 10px;">
  <input style="margin-right: 10px;" type="text" v-model="user.firstName" placeholder="First Name">
  <input type="text" v-model="user.lastName" placeholder="Last Name">
  </div>
  <hr>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} 
        <input type="text" v-model="item.name">
     </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, watch, reactive } from 'vue';

const firstName = ref('')
const lastName = ref('')

const user = reactive({
  firstName:'',
  lastName:''
})


const items = reactive([
  {
    id:1,
    name: 'Alexandre'
},
{
    id:2,
    name: 'João'
},
])

/** exemplo watch
//watch([firstName, lastName], ([valueFirstName, valueLastName], [oldValueFirstName, oldValueLastName]) => {
//  console.log('new => '+ valueFirstName, 'old => '+ oldValueFirstName);
//} )
watch(
  user, // monitorar todos campos
  (value) => {
    console.log(value.firstName);
  }
  )
**/
watch(
  items, 
  (value) => {
    value.forEach((item) => {
      if (!Number.isInteger(Number(item))) {
        console.log('not a number '+item.name);
      }
    })
  }
)
</script>

<style scoped>

</style>