<template>
  <button @click="add">Add from child</button>
</template>

<script>
export default {
    methods:{
        add() {
            this.$emit('addCount',10)
        }
    }
}
</script>

<style>

</style>