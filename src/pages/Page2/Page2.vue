<template>
  <div class="page2">
    <img v-show="dot === 0" src="../../assets/p2/jiazai0.png">
    <img v-show="dot === 1" src="../../assets/p2/jiazai1.png">
    <img v-show="dot === 2" src="../../assets/p2/jiazai2.png">
    <img v-show="dot === 3" src="../../assets/p2/jiazai3.png">
    <img v-show="dot === 4" src="../../assets/p2/jiazai4.png">
    <img v-show="dot === 5" src="../../assets/p2/jiazai5.png">
    <img v-show="text === 0" src="../../assets/p2/1.png">
    <img v-show="text === 1" src="../../assets/p2/2.png">
    <img src="../../assets/p2/5.png">
    <img v-show="work === 0" src="../../assets/p2/6.png">
    <img v-show="work === 1" src="../../assets/p2/7.png">
    <img v-show="bulb === 0" src="../../assets/p2/3.png">
    <img v-show="bulb === 1" src="../../assets/p2/4.png">
  </div>
</template>

<script>
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page2',
    props: ['moveIn'],
    data () {
      return {
        dot: null,
        text: null,
        work: null,
        bulb: null,
      }
    },
    methods: {
      animate () {
        aniLoop(this, 'work', 2)
        aniLoop(this, 'bulb', 2)

        aniOnce(this, 'dot', 6).then(() => aniLoop(this, 'text', 2))
      },
      reset () {
        this.dot = null
        this.text = null
        this.work = null
        this.bulb = null
      }
    },
    watch: {
      moveIn (isMoveIn) {
        isMoveIn
          ? this.animate()
          : this.reset()
      }
    }
  }
</script>

<style scoped lang="scss">
  .page2 {
    width: 100vw;
    height: 100vh;
    background-color: #6451ad;
  }
</style>
