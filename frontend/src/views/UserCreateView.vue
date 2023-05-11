<template>
  <form action="">
    <input type="text" placeholder="FistName" v-model="user.firstName" />
    <span v-if="errors['firstName']" class="error">{{ errors['firstName'][0] }}</span>
    <input type="text" placeholder="LastName" v-model="user.lastName" />
    <span v-if="errors['lastName']" class="error">{{ errors['lastName'][0] }}</span>
    <input type="text" placeholder="Email" v-model="user.email" />
    <span v-if="errors['email']" class="error">{{ errors['email'][0] }}</span>
    <input type="text" placeholder="Password" v-model="user.password" />
    <span v-if="errors['password']" class="error">{{ errors['password'][0] }}</span>
    <button @click.submit.prevent="create">Cadastrar</button>
  </form>
</template>

<script>
import http from "@/services/http.js";

export default {
  name: "UserCreateView.vue",
  data() {
    return {
      user: {},
      errors:[]
    };
  },
  methods: {
    async create() {
      try {
        const { data } = await http.post("api/user", this.user);
        console.log(data);
      } catch (errors) {
        if(errors.response?.data){
          this.errors = errors.response.data['errors'];
        }
        console.log(this.errors);
      }
    },
  },
};
</script>

<style scoped>
.error{
  color: red;
}
</style>