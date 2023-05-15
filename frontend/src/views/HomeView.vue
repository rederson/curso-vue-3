<template>

  <input type="text" name="" id="" placeholder="Search" @keyup="search">

<ul>
  <li v-for="(user,index) in users" :key="index">
  {{ user.firstName }} {{ user.lastName }}
  </li>
</ul>


<div v-html="userNotFound"></div> 

</template>

<script>
import http from '@/services/http.js';
import _ from 'lodash';

export default {
  data() {
    return {
      users:[],
      loading: true
    }
  },

computed: {
userNotFound() {
  return (!this.loading && this.users.length <= 0) ? '<span id="notFound">Nenhum user encontrado</span>' : ''
}
},

  async mounted(){
    try {
      const {data} = await http.get('/api/users');
      this.loading = false;
      this.users = data
    } catch (error) {
      console.log(error.response.data);
    }
  },
  methods:{
    search: _.debounce(async function(event) {
      try {
        const {data} = await http.get('/api/users/search', {
          params:{
            user: event.target.value
          }
        })
        //console.log(data);
        this.users = data;
        
      } catch (error) {
        console.log(error.response.data);
      }
    },1000)
  }
}
</script>

<style >
#notFound {
  color:red;
}

</style>
