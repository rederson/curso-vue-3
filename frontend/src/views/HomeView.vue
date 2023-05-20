<template>
  <button style="margin-left: 10px; margin-right: 10px" @click="increment(10)">
    Add
  </button>
  {{ count }}
  <hr>
  {{ totalCount }}
  <hr />
  <h2>Users</h2>
  <template v-if="data.length > 0">
    <button @click="hideUsers">Hide Users</button>

    <ul>
      <li v-for="(user, index) in data" :key="index">
        {{ user.firstName }}
      </li>
    </ul>
  </template>
  <template v-else>
    <button @click="getUsers">Get Users</button>
  </template>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
 computed:{
  ...mapState({
      count: state => state.counter.count,
      data: state => state.users.data
  }),

  ...mapGetters({
        totalCount: 'counter/getCounter',
  })
 },
  methods: {
    ...mapActions('users', [
      'getUsers', 'hideUsers'
    ]),
    ...mapMutations('counter',['increment'])
    //increment() {
     // this.$store.commit("counter/increment", 10);
    //},
  },
};
</script>
