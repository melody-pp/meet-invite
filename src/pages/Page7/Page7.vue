<template>
  <div class="page7">

    <img v-show="aniVar.picture === 0" src="../../assets/p7/3.png">
    <img v-show="aniVar.picture === 1" src="../../assets/p7/4.png">
    <img v-show="aniVar.picture === 2" src="../../assets/p7/5.png">
    <img v-show="aniVar.picture === 3" src="../../assets/p7/6.png">
    <img v-show="aniVar.title === 0" src="../../assets/p7/1.png">
    <img v-show="aniVar.title === 1" src="../../assets/p7/2.png">
    <img src="../../assets/p7/7.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page7',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          title: null,
          picture: null,
        },
      }
    },
    methods: {
      animate () {
        aniLoop(this, 'title', 2)
        aniLoop(this, 'picture', 4)
      }
    }
  }
</script>

<style scoped lang="scss">
  .page7 {
    width: 100vw;
    height: 100vh;
    background-color: #00447c;
  }
</style>
