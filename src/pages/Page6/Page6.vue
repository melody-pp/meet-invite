<template>
  <div class="page6">
    <img v-show="aniVar.dot === 0" src="../../assets/p6/jiazai0.png">
    <img v-show="aniVar.dot === 1" src="../../assets/p6/jiazai1.png">
    <img v-show="aniVar.dot === 2" src="../../assets/p6/jiazai2.png">
    <img v-show="aniVar.dot === 3" src="../../assets/p6/jiazai3.png">
    <img v-show="aniVar.dot === 4" src="../../assets/p6/jiazai4.png">
    <img v-show="aniVar.dot === 5" src="../../assets/p6/jiazai5.png">
    <img v-show="aniVar.text === 0" src="../../assets/p6/1.png">
    <img v-show="aniVar.text === 1" src="../../assets/p6/2.png">
    <img src="../../assets/p6/3.png">
    <img :class="{rocket: true, active}" src="../../assets/p6/4.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page6',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          dot: null,
          text: null,
          struggle: null,
        },
        active: false
      }
    },
    methods: {
      animate () {
        this.active = false

        aniOnce(this, 'dot', 6).then(() => {
          this.active = true
          aniLoop(this, 'text', 2)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page6 {
    width: 100vw;
    height: 100vh;
    background-color: #008589;
  }

  .rocket {
    top: 20vh;
    &.active {
      top: 0;
      transition: all 1s ease-out;
    }
  }
</style>
