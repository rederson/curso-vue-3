<!-- There are
   multiple root elements -->
<template>

<img :src="imageSrc" alt="" class="my-default-class" :class="{'my-class':is_admin,'my-other-class':!is_admin}" />
  
<button @click="add('teste')">Clique aqui {{ count }}</button>
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
    add(teste){
      console.log(teste);
      this.count++;
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
