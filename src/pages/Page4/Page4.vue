<template>
  <div class="page4">
    <img v-show="aniVar.dot === 0" src="../../assets/p4/jiazai0.png">
    <img v-show="aniVar.dot === 1" src="../../assets/p4/jiazai1.png">
    <img v-show="aniVar.dot === 2" src="../../assets/p4/jiazai2.png">
    <img v-show="aniVar.dot === 3" src="../../assets/p4/jiazai3.png">
    <img v-show="aniVar.dot === 4" src="../../assets/p4/jiazai4.png">
    <img v-show="aniVar.dot === 5" src="../../assets/p4/jiazai5.png">
    <img v-show="aniVar.text === 0" src="../../assets/p4/1.png">
    <img v-show="aniVar.text === 1" src="../../assets/p4/2.png">
    <img v-show="aniVar.leader === 0" src="../../assets/p4/3.png">
    <img v-show="aniVar.leader === 1" src="../../assets/p4/4.png">
    <img v-show="aniVar.leader === 2" src="../../assets/p4/5.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page4',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          dot: null,
          text: null,
          leader: null,
        },
      }
    },
    methods: {
      animate () {
        this.aniVar.leader = 0

        aniOnce(this, 'dot', 6).then(() => {
          aniLoop(this, 'text', 2)

          setTimeout(() => {
            aniLoop(this, 'leader', 3)
          }, 800)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page4 {
    width: 100vw;
    height: 100vh;
    background-color: #76BA3A;
  }
</style>
