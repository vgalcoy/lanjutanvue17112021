<template>
  <qrscanner/>
</template>

<script>
import Qrcodescanner from '../view/qrscanner.vue'
export default {
  name: 'App',
  components: {
    qrscanner: Qrcodescanner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.flex{
    width: 360px;
    height: 800px;
}
</style>