<template>
  <button @click="openModal = true">Open Modal</button>
  <br />

  <Modal v-if="openModal" @close="openModal = false">
    <template #header>Header do modal</template>
    <template #default>
    <form action="" method="get">
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="senha" />
      <button>Login</button>
    </form>
  </template>
  <template #footer>Footer do modal</template>
  </Modal>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
import Modal from "@/components/Modal.vue";

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
});

const countComputer = computed(() => {
  console.log("called computed count");
  return computedCount.value;
});

function countFunction() {
  console.log("called function count");
  return functionCount.value;
}
</script>
