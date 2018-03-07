<template>
  <div id="app">
    <MainFrame @flip="playFlip"/>
    <div class="musicBtn">
      <img @click="pause" v-show="music" src="./assets/on.png">
      <img @click="play" v-show="!music" src="./assets/off.png">
    </div>
  </div>
</template>

<script>
  import MainFrame from './pages/MainFrame'

  export default {
    name: 'App',
    components: {MainFrame},
    data () {
      return {
        music: true,
        bgm: null,
        flip: null
      }
    },
    mounted () {
      this.initBgm()
      this.initFlip()
      this.wxTrick()
    },
    methods: {
      wxTrick () {
        const wx = require('weixin-js-sdk')

        wx.config({})
        wx.ready(() => {
          this.bgm.play()
          this.flip.play()
        })
      },
      initBgm () {
        this.bgm = new Audio()

        this.bgm.src = require('./assets/mp3/bg.mp3')
        this.bgm.autoplay = true
        this.bgm.loop = true
        this.bgm.load()
      },
      initFlip () {
        this.flip = new Audio()

        this.flip.src = require('./assets/mp3/flip.mp3')
        this.flip.load()
      },
      play () {
        this.music = true
        this.bgm.play()
      },
      pause () {
        this.music = false
        this.bgm.pause()
      },
      playFlip () {
        this.flip.play()
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
    animation-fill-mode: both;
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

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInUp {
    animation-name: fadeInUp;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }

  .zoomIn {
    animation-name: zoomIn;
  }

</style>
