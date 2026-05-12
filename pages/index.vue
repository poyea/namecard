<template>
  <div class="container">
    <vue-namecard />
  </div>
</template>

<script>
import vueNamecard from "~/components/NameCard.vue"
export default {
  components: {
    vueNamecard
  }
}
</script>

<style>
.container {
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  height: 100dvh;
}
</style>
