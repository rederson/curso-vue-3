<template>
  <input type="text" name="" id="" placeholder="Search" @keyup="search" />

  <ul>
    <li v-for="(user, index) in users.data" :key="index">
      {{ user.firstName }} {{ user.lastName }}
    </li>
  </ul>

  <Bootstrap5Pagination  :data="users" @pagination-change-page="getUsers">
  <template #prev-nav>
    <span>&lt; Anterior</span>
  </template>
  <template #next-nav>
    <span>Próximo &gt;</span>
  </template>
  </Bootstrap5Pagination>

  <div v-html="userNotFound"></div>
  
</template>

<script>
import http from "@/services/http.js";
import _ from "lodash";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';




export default {
  components: { Bootstrap5Pagination  },
  data() {
    return {
      users: [],
      loading: true,
    };
  },

  computed: {
    userNotFound() {
      return !this.loading && this.users.length <= 0
        ? '<span id="notFound">Nenhum user encontrado</span>'
        : "";
    },
  },

  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers(page = 1) {
      console.log(page);
      try {
        const { data } = await http.get('/api/users?page='+Number(page));
        this.loading = false;
        console.log(data);
        this.users = data;
      } catch (error) {
        console.log(error.response.data);
      }
    },
    search: _.debounce(async function (event) {
      try {
        const { data } = await http.get("/api/users/search", {
          params: {
            user: event.target.value,
          },
        });
        //console.log(data);
        this.users = data;
      } catch (error) {
        console.log(error.response.data);
      }
    }, 1000),
  },
};
</script>

<style >
#notFound {
  color: red;
}
</style>
