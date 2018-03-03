<template>
  <div id="app">
    <MainFrame/>
  </div>
</template>

<script>
  import MainFrame from './pages/MainFrame'

  export default {
    name: 'App',
    components: {MainFrame}
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    text-align: center;
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
