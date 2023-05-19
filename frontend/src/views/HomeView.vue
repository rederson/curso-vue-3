<template>
  <!--
    <div>
  <button @click="showSomething()">Show</button>
  </div>

 <teleport to="#input">
   <input type="text" ref="inputElement">
 </teleport>

<teleport to="#lorem">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis id
  officia laborum quae cumque rerum molestiae officiis. Provident ad quis
  mollitia sunt exercitationem, voluptatum dolores possimus sint ea rem?
-->
<div>
  <button @click="open=!open" >Show</button>
</div>

<teleport to="#modal">
<Modal v-if="open">
  Conteúdo do modal vai aqui
</Modal>
</teleport>
</template>
<script setup>
import { nextTick, ref } from "vue";
import Modal from "@/components/Modal.vue";

const showElement = ref(false);
const inputElement = ref(null);
const open = ref(false);

async function showSomething() {
  showElement.value = true;

  setTimeout(() => {
    inputElement.value.focus();

    console.log(inputElement.value);
  }, 100);

  await nextTick(() => {
    inputElement.value.focus();
    //console.log(inputElement.value);
    console.log("focus");
  });

  console.log("carregou");
}

</script>

<style>
#app {
  color: red;
}
</style>