<template>
  <div class="page1">
    <img v-show="aniVar.dot === 0" src="../../assets/p1/jiazai0.png">
    <img v-show="aniVar.dot === 1" src="../../assets/p1/jiazai1.png">
    <img v-show="aniVar.dot === 2" src="../../assets/p1/jiazai2.png">
    <img v-show="aniVar.dot === 3" src="../../assets/p1/jiazai3.png">
    <img v-show="aniVar.dot === 4" src="../../assets/p1/jiazai4.png">
    <img v-show="aniVar.dot === 5" src="../../assets/p1/jiazai6.png">
    <img v-show="aniVar.text === 0" src="../../assets/p1/1.png">
    <img v-show="aniVar.text === 1" src="../../assets/p1/2.png">
    <img v-show="aniVar.earth === 0" src="../../assets/p1/7.png">
    <img v-show="aniVar.earth === 1" src="../../assets/p1/8.png">
    <img v-show="aniVar.earth === 2" src="../../assets/p1/9.png">
    <img v-show="aniVar.earth === 3" src="../../assets/p1/10.png">
    <img v-show="aniVar.rocket === 0" src="../../assets/p1/5.png">
    <img v-show="aniVar.rocket === 1" src="../../assets/p1/6.png">
    <img v-show="aniVar.UFO === 0" src="../../assets/p1/3.png">
    <img v-show="aniVar.UFO === 1" src="../../assets/p1/4.png">
    <img class="loading" v-show="aniVar.loading === 0" src="../../assets/p1/loading1.png">
    <img class="loading" v-show="aniVar.loading === 1" src="../../assets/p1/loading2.png">
    <img class="loading" v-show="aniVar.loading === 2" src="../../assets/p1/loading3.png">
    <transition enter-active-class="animated fadeIn">
      <img v-show="loaded" class="finger" src="../../assets/shouzhi.png">
    </transition>
    <!--<FileUpload class="FileUpload"/>-->
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'
  import FileUpload from '../fileUpload'

  export default {
    name: 'page1',
    mixins: [animateMixin],
    components: {FileUpload},
    data () {
      return {
        aniVar: {
          dot: null,
          text: null,
          earth: null,
          rocket: null,
          UFO: null,
          loading: null,
        },
        loaded: false
      }
    },
    mounted () {
      this.animate()
    },
    methods: {
      animate () {
        const loadingTimer = aniLoop(this, 'loading', 3, 500)

        aniLoop(this, 'earth', 4, 100)
        aniLoop(this, 'rocket', 2)
        aniLoop(this, 'UFO', 2)

        window.addEventListener('load', () => {
          clearInterval(loadingTimer)
          this.aniVar.loading = null
          this.loaded = true
          this.$emit('loaded')
          aniOnce(this, 'dot', 6).then(() => aniLoop(this, 'text', 2))
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page1 {
    width: 100vw;
    height: 100vh;
    background-color: #014d87;
    .finger {
      width: 8.933vw;
      height: auto;
      position: absolute;
      left: 50%;
      bottom: 3vh;
      transform: translateX(-50%);
    }
    .loading {
      width: 45.6vw;
      height: auto;
      position: absolute;
      bottom: 16vh;
      left: 50%;
      transform: translateX(-50%);
    }
    .FileUpload {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      img {
        border: none;
      }
    }
  }
</style>
