<template>
  <div>
    <h2>Modal</h2>
      <slot />
  </div> 
</template>

<script setup>
const emit = defineEmits(['close']);

function close() {
    emit('close');
}

</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>