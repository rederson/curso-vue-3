<!-- There are
   multiple root elements -->
<template>

<img :src="imageSrc" alt="" class="my-default-class" :class="{'my-class':is_admin,'my-other-class':!is_admin}" />
  
<button @click="count++">Clique aqui {{ count }}</button>

<form action="http://google.com.br">
  <input type="text" placeholder="Buscar">
  <!--botão sem prevent--><button type="submit">Buscar</button>
  <button @click.submit.prevent="search">Buscar</button>
</form>

<a href="http://google.com.br" @click.prevent="search">Ir para o google (prevent)</a> <br />

<input type="text" placeholder="Digite algo aqui" @keyup.enter="keyModifier">

{{ age }}

<button @click.prevent.once="age++">Executa 1 vez (once)</button>

{{ userName }}

<!--<input type="text" @keyup="(event) => {this.count+=Number(event.target.value) }" placeholder="Qualquer coisa" name="" id="">-->
<!--<input type="text" @keyup="myName" placeholder="Qualquer coisa" name="" id=""></input>  >-->
<input type="text" v-model="userName" name="" id="">


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
      count:0,
      age:40,
      userName:'',
      imageSrc:'https://picsum.photos/200/300',
      //classImage:'my-class'
      is_admin:false,
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
  methods:{
    myName(event){
      this.userName=event.target.value;
     // this.count+=Number(event.target.value);
     // console.log(event.target.value);
      
    },
    search(event){
console.log('buscou');
    },
    keyModifier() {
      console.log('precionou o enter');
    }
  }
};
</script>

<style scoped>
.my-class{
border: solid 4px red;
}
.my-other-class {
  border: solid 4px blue;;
}
</style>
