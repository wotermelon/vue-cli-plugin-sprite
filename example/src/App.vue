<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <div
        v-for="n in 10"
        :key="n"
        :class="['icon', `icon-logo-${n + 1}`]"></div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
@import url(./assets/less/sprite.less);

html {
  /* 1080px */
  font-size: 9.25925926vw;
  -webkit-font-smoothing: antialiased;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 14px;
}
</style>
