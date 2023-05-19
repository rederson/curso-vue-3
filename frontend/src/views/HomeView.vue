<template>
  <button @click="increment" >Add</button>
  {{ count }} 
  
  <hr>

  <ul>
    <li v-for="(user, index) in usersData" :key="index">{{ user.firstName }}</li>
  </ul>
{{ getTotalUsers }}
<hr>
{{ name }}

</template>

<script>
import count from '@/mixins/count.js';
import users from '@/mixins/users.js';

export default {
  mixins:[count, users],
  data(){
    return {
      name: 'Alexandre'
    }
  },
  
  mounted(){
    console.log('chamou de dentro do mouted do componente home view');
  }
};
</script>

<style >
#app {
  color: red;
}
</style>
