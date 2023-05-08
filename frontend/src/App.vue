<template>
  <Header v-if="showHeader" />
  <hr />

  <template v-if="showHeader">
    <Header />
  </template>

  <hr />

  <h2>Lista de Users</h2>

  <ul>
    <template v-for="user in users" :key="user.id">
      <li v-if="user.is_admin === 1">
        {{ user.firstName }}
      </li>
    </template>
  </ul>

<hr />

<ul>
    <li v-for="user in users" :key="user.id">
      {{ user.firstName }}
      <button v-if="user.is_admin">Change to not admin</button>
      <button v-else>Change to admin</button>
    </li>
  </ul>






</template>

<script>
import http from "@/services/http.js";
import Header from "@/components/Header.vue";

export default {
  components: { Header },
  data() {
    return {
      users: [],
      showHeader: false,
    };
  },

  async mounted() {
    try {
      const { data } = await http.get("api/users");
      //console.log(data);
      this.users = data;
    } catch (error) {
      console.log(error);
    }
  },
  updated() {
    console.log("upadated");
  },
};
</script>

<style scoped>
</style>
