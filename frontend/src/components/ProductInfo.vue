<template>
    Likes: {{ likes }} 
    Comments: {{ comments }}
</template>

<script>
export default {
  props: {
    likes: Number|String,
    comments: Number|String,
  },
};
</script>

<style>
</style>