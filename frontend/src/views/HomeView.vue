<template>
  <h2>Admin</h2>
  <ul>
    <template v-for="(user, index) in users" :key="index"> 
      <li v-if="user.is_admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not Admin</h2>
  
  <ul id="dois">
      <li v-for="(user, index) in usersNotAdmin" :key="index">{{ user.firstName }}</li>
  </ul>

  {{  countComputer }}
  <button @click="computedCount++">Add computed</button>
  <br>

  {{ countFunction() }}
  <button @click="functionCount++">Add function</button>

</template>
<script setup>
import { computed, reactive, ref } from "vue";

const user = reactive({
  firstName: "Alexandre",
  lastName: "Cardoso",
});

const computedCount = ref(0);
const functionCount = ref(0);

const users = reactive([
  {
    firstName: "Alexandre",
    is_admin: 1,
  },
  {
    firstName: "Maria",
    is_admin: 0,
  },
  {
    firstName: "João",
    is_admin: 1,
  },
]);

const fullName = computed(() => {
  return user.firstName + " " + user.lastName;
});

const usersNotAdmin = computed(() => {
 return users.filter((user) => user.is_admin === 0);
}) 

const countComputer = computed(() => {
  console.log('called computed count');
  return computedCount.value
})

function countFunction() {
  console.log('called function count');
  return functionCount.value
}

</script>
