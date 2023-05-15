<template>
  <button @click="openModal = true">Open Modal</button>
  <br>

<template v-if="openModal">
<Modal>

  <template #header>Header do Slot</template>
  <template #default>
    <form action="" method="get">
      <input type="text" placeholder="Email">
      <input type="text" placeholder="senha">
      <button>Login</button>
    </form>
    
    Modal de conteundo default</template>
  <template #footer>Footer do slot</template>

</Modal>
</template>


</template>
<script setup>
import { computed, reactive, ref } from "vue";
import Modal from '@/components/Modal.vue';

const user = reactive({
  firstName: "Alexandre",
  lastName: "Cardoso",
});

const openModal = ref(false);

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
