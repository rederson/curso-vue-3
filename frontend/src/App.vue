<template>

  <input type="text" name="" v-model="userName">

<template v-for="user in users" >
<input type="checkbox" name="" @click="userName =  user.firstName" :checked="userName == user.firstName">{{ user.firstName }}
</template>


  <select name="" v-model="userName">
    <option :value="user.firstName" v-for="user in users">{{ user.firstName }}</option>

  </select>
  
</template>

<script>
export default {
data() {
  return {
      userName:'Alexandre',
      users:[
        {
          id:1,
          firstName:'Alexandre'
        },
        {
          id:2,
          firstName:'João'
        },
        {
          id:1,
          firstName:'Maria'
        },

      ]
  }
}
}
</script>

<style scoped>

</style>