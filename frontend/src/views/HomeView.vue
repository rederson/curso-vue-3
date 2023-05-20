<template>
  <button @click="increment" >Add</button>
  <!-- Posso criar o metodo direto no evento do botão como no vue-->
  <button @click="$store.commit('increment')" >Add Event button</button>

  {{ $store.state.count }}

  <hr>

  {{ $store.getters.getCounter }}
</template>

<script>

export default {


  methods:{
    increment(){
      //this.$store.dispatch('increment'); // usa o dispatch se tiver action
      // quando não houver action pode comitar direto a mutation
      this.$store.commit('increment');
    }
  }
  
  
};
</script>
