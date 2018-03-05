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
    <img class="finger" src="../../assets/shouzhi.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page1',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          dot: null,
          text: null,
          earth: null,
          rocket: null,
          UFO: null
        }
      }
    },
    mounted () {
      this.animate()
    },
    methods: {
      animate () {
        aniLoop(this, 'earth', 4, 100)
        aniLoop(this, 'rocket', 2)
        aniLoop(this, 'UFO', 2)

        aniOnce(this, 'dot', 6).then(() => aniLoop(this, 'text', 2))
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
      bottom: 1vh;
      transform: translateX(-50%);
    }
  }
</style>
