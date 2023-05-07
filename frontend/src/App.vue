<template>

{{ count }}
{{ userName }}

<ul>
  <li v-for="user in users">{{  user.firstName }} - {{ user.age }}</li>
</ul>

  <div v-if="showHeader">
  <Header />
</div>

<button v-on:click="showHeader = !showHeader" >Toggle header</button>

  <h2>App</h2>

<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>

<router-view></router-view>

</template>

<script>
import Header from '@/components/Header.vue'

export default {
components:{Header},
  data() {
    return {
      count:0,
      showHeader:false,
      userName:'Alexandre',
      users:[
        {
        firstName:'Alexandre',
        age:40,
      },
      {
        firstName:'Maria',
        age:34,
      }
      ]
    }
  },
  mounted(){
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  }
}


</script>
<style>
</style>