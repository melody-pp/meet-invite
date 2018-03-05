<template>
  <div class="page9">
    <img :src="imgUrl" class="avatar">

    <img v-show="aniVar.earth === 0" src="../../assets/p1/7.png">
    <img v-show="aniVar.earth === 1" src="../../assets/p1/8.png">
    <img v-show="aniVar.earth === 2" src="../../assets/p1/9.png">
    <img v-show="aniVar.earth === 3" src="../../assets/p1/10.png">
    <img v-show="aniVar.rocket === 0" src="../../assets/p1/5.png">
    <img v-show="aniVar.rocket === 1" src="../../assets/p1/6.png">
    <img v-show="aniVar.UFO === 0" src="../../assets/p1/3.png">
    <img v-show="aniVar.UFO === 1" src="../../assets/p1/4.png">
    <img v-show="aniVar.superman === 0" src="../../assets/p11/4.png">
    <img v-show="aniVar.superman === 1" src="../../assets/p11/5.png">
    <img v-show="aniVar.superman === 2" src="../../assets/p11/6.png">
    <img src="../../assets/p11/7.png">
    <img src="../../assets/p11/1.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'male',
    props: ['imgUrl'],
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          earth: null,
          rocket: null,
          UFO: null,
          superman: null
        },
      }
    },
    methods: {
      // animate () {
      //
      //   aniLoop(this, 'earth', 4, 100)
      //   aniLoop(this, 'rocket', 2)
      //   aniLoop(this, 'UFO', 2)
      //
      //   aniOnce(this, 'superman', 3)
      // }
    }
  }
</script>

<style scoped lang="scss">
  .page9 {
    width: 100vw;
    height: 100vh;
    background-color: #014d87;
    .boy {
      width: 22.4vw;
      height: auto;
      bottom: 13vh;
      left: 18vw;
    }
    .girl {
      width: 23.73vw;
      height: auto;
      bottom: 13vh;
      left: auto;
      right: 16vw;
    }
    .avatar {
      width: 28vw;
      height: auto;
      position: absolute;
      left: auto;
      right: 36vw;
      top: 40vw;
    }
  }
</style>
