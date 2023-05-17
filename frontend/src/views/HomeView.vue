<template>
  <input
    type="text"
    name=""
    id=""
    placeholder="Search"
    @keyup="search"
    v-model="searchInput"
  />

  <ul>
    <li v-for="(user, index) in users.data" :key="index">
      {{ user.firstName }} {{ user.lastName }}
    </li>
  </ul>

  <Bootstrap5Pagination
    :data="users"
    @pagination-change-page="handlePagination"
    :limit="5"
    :show-desabled="true"
    size="small"
    align="center"
  >
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
import { Bootstrap5Pagination } from "laravel-vue-pagination";

export default {
  components: { Bootstrap5Pagination },
  data() {
    return {
      users: [],
      loading: true,
      searchInput: '',
      searched: false,
    }
  },

  computed: {
    userNotFound() {
      return !this.loading && this.users.data.length <= 0
        ? '<span id="notFound">Nenhum usuário encontrado</span>'
        :'';
    },
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    handlePagination(page) {
      return this.searched ? this.searchUsers(page) : this.getUsers(page);
    },

    async getUsers(page = 1) {
      try {
        //console.log(page);
        const { data } = await http.get("/api/users?page=" + Number(page));
        this.loading = false;
        //console.log(data);
        this.users = data;
      } catch (error) {
        console.log(error.response.data);
      }
    },

    async searchUsers(page = 1) {
      try {
        const { data } = await http.get('/api/users/search?page='+Number(page),
          {
            params: {
              user: this.searchInput,
            }
          })
        console.log(this.searchInput, data);

        if (!this.searchInput) {
          this.searched = false;
          this.getUsers();
        } else {
          this.searched = true;
          //console.log(data);
          this.users = data;
        }
      } catch (error) {
        console.log(error.response.data);
      }
    },

    search: _.debounce(function () {
      this.searchUsers();
    }, 1000),
  },
};
</script>

<style >
#notFound {
  color: red;
}
</style>
