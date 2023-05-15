<template>
  <button @click="openModal = true">Abrir Modal</button>

  <template v-if="openModal">
    <Modal>
      <template #header> <h2>Header do Modal</h2>  </template>

      <template #default>Valor default</template>

      <template #footer>Footer do modal</template>
    </Modal>

</template>

</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      openModal: false,
      countComputed: 0,
      countFunction: 0,
      user: [
        {
          firstName: "Alexandre",
          lastName: "Cardoso",
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
        {
          firstName: "Pedro",
          is_admin: 0,
        },
      ],
    };
  },
  computed: {
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },

    usersIsNotAdmin() {
      return this.user.filter((user) => user.is_admin === 0);
    },

    computedCount() {
      console.log("called computed");
      return this.countComputed;
    },
  },
  methods: {
    functionCount() {
      console.log("called function");
      return this.countFunction;
    },
  },
};
</script>


