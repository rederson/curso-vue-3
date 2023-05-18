<template>
  <button @click="showSomething()">Show</button>

  <button @click="open = !open">Open Modal</button>

  <teleport to="#modal"> <!-- envia para outra página = teleport -->
      <Modal v-if="open">
          Qualquer coisa aqui dentro! 
      </Modal> 
  </teleport>


  <!--<teleport to="#input">
    <input type="text" ref="inputElement" />
  </teleport>
-->
  <!--<teleport to="#lorem">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque
    sequi, inventore perspiciatis a, ratione natus molestias aperiam, nam sit
    quae iure quia quibusdam dignissimos veniam iste quasi repellendus mollitia?
  </teleport>
  -->
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  data() {
    return {
      showElement: false,
      open: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    async showSomething() {
      //console.log('show');
      this.showElement = true;

      await this.$nextTick(() => {
        this.$refs.inputElement.focus();
        console.log("focus");
      });
      console.log("carregou");
      /** ou trabalhar com setTimeout */
      /** setTimeout(() => {
        this.$refs.inputElement.focus();
        console.log(this.$refs.inputElement);
      }, 100);
*/
    },
  },
};
</script>

<style >
#app {
  color: red;
}
</style>
