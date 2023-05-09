<!-- There are
   multiple root elements -->
<template>

<img :src="imageSrc" alt="" class="my-default-class" :class="{'my-class':is_admin,'my-other-class':!is_admin}" />
  
<button @click="count++">Clique aqui {{ count }}</button>

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
