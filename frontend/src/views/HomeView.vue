<template>
  <h2>Admin</h2>
  <!--{{ user.firstName }}  {{ user.lastName }}-->
  <ul>
    <template v-for="(user, index) in user" :key="index">
      <li v-if="user.is_admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not Admin</h2>

  <ul>
    <li v-for="(user, index) in usersIsNotAdmin" :key="index">
      {{ user.firstName }}
    </li>
  </ul>

  {{ functionCount() }}
  <button @click="countFunction++">add function</button>
<br />
  {{ computedCount }}
  <button @click="countComputed++">add computed</button>
</template>

<script>
export default {
  data() {
    return {
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


