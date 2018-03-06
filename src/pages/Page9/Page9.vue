<template>
  <div class="page9">
    <img v-show="aniVar.title === 0" src="../../assets/p9/1.png">
    <img v-show="aniVar.title === 1" src="../../assets/p9/2.png">
    <img v-show="aniVar.picture === 0" src="../../assets/p9/3.png">
    <img v-show="aniVar.picture === 1" src="../../assets/p9/4.png">
    <img class="boy" @touchstart="setGender(1)" src="../../assets/p9/nan.png">
    <img class="girl" @touchstart="setGender(0)" src="../../assets/p9/nv.png">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

  export default {
    name: 'page9',
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
        aniLoop(this, 'picture', 2)
      },
      setGender (gender) {
        this.$emit('setGender', gender)
      }
    }
  }
</script>

<style scoped lang="scss">
  .page9 {
    width: 100vw;
    height: 100vh;
    background-color: #06427a;
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
  }
</style>
