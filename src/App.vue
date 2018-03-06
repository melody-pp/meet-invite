<template>
  <div id="app">
    <MainFrame @flip="flip"/>
    <div class="musicBtn">
      <img @click="pause" v-show="music" src="./assets/on.png">
      <img @click="play" v-show="!music" src="./assets/off.png">
    </div>
    <audio ref="flip" src="./assets/mp3/flip.mp3"></audio>
    <audio ref="bg" src="./assets/mp3/bg.mp3" autoplay loop></audio>
  </div>
</template>

<script>
  import MainFrame from './pages/MainFrame'

  export default {
    name: 'App',
    components: {MainFrame},
    data () {
      return {
        music: true
      }
    },
    mounted () {
      this.$refs.bg.play()
    },
    methods: {
      play () {
        this.music = true
        this.$refs.bg.play()
      },
      pause () {
        this.music = false
        this.$refs.bg.pause()
      },
      flip () {
        this.$refs.flip.play()
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    text-align: center;
    position: relative;
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .musicBtn {
    position: absolute;
    top: 2vh;
    right: 5vw;
    img {
      width: 17.07vw;
    }
  }

  video, audio {
    display: none;
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }

</style>
