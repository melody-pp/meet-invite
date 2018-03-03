<template>
  <div class="page3">
    <img v-show="aniVar.dot === 0" src="../../assets/p3/jiazai0.png">
    <img v-show="aniVar.dot === 1" src="../../assets/p3/jiazai1.png">
    <img v-show="aniVar.dot === 2" src="../../assets/p3/jiazai2.png">
    <img v-show="aniVar.dot === 3" src="../../assets/p3/jiazai3.png">
    <img v-show="aniVar.dot === 4" src="../../assets/p3/jiazai4.png">
    <img v-show="aniVar.dot === 5" src="../../assets/p3/jiazai5.png">
    <img v-show="aniVar.text === 0" src="../../assets/p3/1.png">
    <img v-show="aniVar.text === 1" src="../../assets/p3/2.png">
    <img v-show="aniVar.hotPints === 0" src="../../assets/p3/3.png">
    <img v-show="aniVar.hotPints === 1" src="../../assets/p3/4.png">
    <img v-show="aniVar.hotPints === 2" src="../../assets/p3/5.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page3',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          dot: null,
          text: null,
          hotPints: null,
        },
      }
    },
    methods: {
      animate () {
        this.aniVar.hotPints = 0

        aniOnce(this, 'dot', 6).then(() => {
          aniLoop(this, 'text', 2)

          setTimeout(() => {
            aniLoop(this, 'hotPints', 3)
          }, 800)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page3 {
    width: 100vw;
    height: 100vh;
    background-color: #CB0D1B;
  }
</style>
