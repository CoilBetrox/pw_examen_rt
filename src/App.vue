<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> --> 
  <vuelo-uso></vuelo-uso>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import VueloUso from './components/VueloUso.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    VueloUso
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
  margin-top: 60px;
}
</style>
