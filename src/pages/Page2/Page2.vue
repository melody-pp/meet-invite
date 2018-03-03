<template>
  <div class="page2">
    <img v-show="aniVar.dot === 0" src="../../assets/p2/jiazai0.png">
    <img v-show="aniVar.dot === 1" src="../../assets/p2/jiazai1.png">
    <img v-show="aniVar.dot === 2" src="../../assets/p2/jiazai2.png">
    <img v-show="aniVar.dot === 3" src="../../assets/p2/jiazai3.png">
    <img v-show="aniVar.dot === 4" src="../../assets/p2/jiazai4.png">
    <img v-show="aniVar.dot === 5" src="../../assets/p2/jiazai5.png">
    <img v-show="aniVar.text === 0" src="../../assets/p2/1.png">
    <img v-show="aniVar.text === 1" src="../../assets/p2/2.png">
    <img v-show="aniVar.work === 0" src="../../assets/p2/5.png">
    <img v-show="aniVar.work === 1" src="../../assets/p2/6.png">
    <img v-show="aniVar.work === 2" src="../../assets/p2/7.png">
    <img v-show="aniVar.bulb === 0" src="../../assets/p2/3.png">
    <img v-show="aniVar.bulb === 1" src="../../assets/p2/4.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page2',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          dot: null,
          text: null,
          work: null,
          bulb: null,
        },
      }
    },
    methods: {
      animate () {
        this.aniVar.work = 0
        this.aniVar.bulb = 0

        aniOnce(this, 'dot', 6).then(() => {
          aniLoop(this, 'text', 2)

          setTimeout(() => {
            aniLoop(this, 'work', 3)
            aniLoop(this, 'bulb', 2)
          }, 600)
        })
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
