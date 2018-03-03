<template>
  <div class="page5">
    <img v-show="aniVar.dot === 0" src="../../assets/p5/jiazai0.png">
    <img v-show="aniVar.dot === 1" src="../../assets/p5/jiazai1.png">
    <img v-show="aniVar.dot === 2" src="../../assets/p5/jiazai2.png">
    <img v-show="aniVar.dot === 3" src="../../assets/p5/jiazai3.png">
    <img v-show="aniVar.dot === 4" src="../../assets/p5/jiazai4.png">
    <img v-show="aniVar.dot === 5" src="../../assets/p5/jiazai5.png">
    <img v-show="aniVar.text === 0" src="../../assets/p5/1.png">
    <img v-show="aniVar.text === 1" src="../../assets/p5/2.png">
    <img v-show="aniVar.struggle === 0" src="../../assets/p5/3.png">
    <img v-show="aniVar.struggle === 1" src="../../assets/p5/4.png">
    <img v-show="aniVar.struggle === 2" src="../../assets/p5/5.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page5',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          dot: null,
          text: null,
          struggle: null,
        },
      }
    },
    methods: {
      animate () {
        this.aniVar.struggle = 0

        aniOnce(this, 'dot', 6).then(() => {
          aniLoop(this, 'text', 2)

          setTimeout(() => {
            aniLoop(this, 'struggle', 3)
          }, 800)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page5 {
    width: 100vw;
    height: 100vh;
    background-color: #FFD243;
  }
</style>
