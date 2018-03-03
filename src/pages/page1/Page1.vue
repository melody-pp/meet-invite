<template>
  <div class="page1">
    <img v-show="dot === 0" src="../../assets/p1/0.png">
    <img v-show="dot === 1" src="../../assets/p1/1.png">
    <img v-show="dot === 2" src="../../assets/p1/2.png">
    <img v-show="dot === 3" src="../../assets/p1/3.png">
    <img v-show="dot === 4" src="../../assets/p1/4.png">
    <img v-show="text === 0" src="../../assets/p1/wenzi01.png">
    <img v-show="text === 1" src="../../assets/p1/wenzi02.png">
    <img v-show="earth === 0" src="../../assets/p1/01.png">
    <img v-show="earth === 1" src="../../assets/p1/02.png">
    <img v-show="earth === 2" src="../../assets/p1/03.png">
    <img v-show="earth === 3" src="../../assets/p1/04.png">
    <img v-show="rocket === 0" src="../../assets/p1/huojian01.png">
    <img v-show="rocket === 1" src="../../assets/p1/huojian02.png">
    <img v-show="UFO === 0" src="../../assets/p1/feidie01.png">
    <img v-show="UFO === 1" src="../../assets/p1/feidie02.png">
  </div>
</template>

<script>
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page1',
    data () {
      return {
        dot: null,
        text: null,
        earth: null,
        rocket: null,
        UFO: null
      }
    },
    mounted () {
      aniLoop(this, 'earth', 4)
      aniLoop(this, 'rocket', 2)
      aniLoop(this, 'UFO', 2)

      aniOnce(this, 'dot', 5).then(() => aniLoop(this, 'text', 2))
    },
  }
</script>

<style scoped lang="scss">
  .page1 {
    width: 100vw;
    height: 100vh;
    background-color: #014d87;
  }
</style>
