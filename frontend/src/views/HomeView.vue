<template>
  <button @click="increment(10)" >Add Event button</button>

  {{ count }}

  <hr>

  {{ getCounter }}
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

export default {

computed:{
  ...mapState(['count']),
  ...mapGetters(['getCounter'])
}, 

/* com actions se faz desse modo com spreed (...)
methods:{
  //...mapActions(['increment']),
  //...mapMutations(['increment']),
  increment(){
    console.log({...mapActions(['increment', 'teste'])});
  }
  */
 methods:mapMutations(['increment']) // se não usar actions trabalha assim
  
};
</script>
