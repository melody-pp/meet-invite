<template>
  <div class="female">
    <div :class="{avatarBox:true,rotateLeft,rotateRight}" :style="{backgroundImage:`url(${imgUrl})`}"></div>
    <img v-show="aniVar.earth === 0" src="../../assets/p1/7.png">
    <img v-show="aniVar.earth === 1" src="../../assets/p1/8.png">
    <img v-show="aniVar.earth === 2" src="../../assets/p1/9.png">
    <img v-show="aniVar.earth === 3" src="../../assets/p1/10.png">
    <!--<img v-show="aniVar.rocket === 0" src="../../assets/p1/5.png">-->
    <!--<img v-show="aniVar.rocket === 1" src="../../assets/p1/6.png">-->
    <!--<img v-show="aniVar.UFO === 0" src="../../assets/p1/3.png">-->
    <!--<img v-show="aniVar.UFO === 1" src="../../assets/p1/4.png">-->
    <img v-show="aniVar.superwoman === 0" src="../../assets/p11/5.png">
    <img v-show="aniVar.superwoman === 1" src="../../assets/p11/4.png">
    <img v-show="words === 0" class="wordsAnimate" src="../../assets/p11/1.png">
    <img v-show="words === 1" class="wordsAnimate" src="../../assets/p11/2.png">
    <img v-show="words === 2" class="wordsAnimate" src="../../assets/p11/3.png">

  </div>
</template>

<script>
  import { animateMixin, fixImgOriMixin } from '../../mixins'
  import { aniLoop } from '../../util'

  export default {
    name: 'female',
    mixins: [animateMixin, fixImgOriMixin],
    data () {
      return {
        aniVar: {
          earth: null,
          // rocket: null,
          // UFO: null,
          superwoman: null,
        },
        words: null,
      }
    },
    methods: {
      animate () {
        this.words = Math.floor(Math.random() * 3)
        aniLoop(this, 'earth', 4, 100)
        // aniLoop(this, 'rocket', 2)
        // aniLoop(this, 'UFO', 2)
        aniLoop(this, 'superwoman', 2)
      },
    },
  }
</script>

<style scoped lang="scss">
  .female {
    width: 100vw;
    height: 100vh;
    background-color: #faa844;
    .avatarBox {
      width: 20vw;
      height: 15.5vh;
      overflow: hidden;
      position: absolute;
      right: 32vw;
      top: 17vh;
      transform-origin: center;
      background-size: cover;
      background-position: center;
      &.rotateRight {
        width: 15.5vh;
        height: 20vw;
        right: 26.8vw;
        top: 19.6vh;
        transform: rotateZ(90deg);
      }
      &.rotateLeft {
        width: 15.5vh;
        height: 20vw;
        right: 26.8vw;
        top: 19.6vh;
        transform: rotateZ(-90deg);
      }
    }
    .wordsAnimate {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: wordsAnimate;
      animation-iteration-count: infinite;
    }
    @keyframes wordsAnimate {
      from {
        transform: rotate3d(0, 0, 0, 0);
      }

      50% {
        transform: rotate3d(0, 0, 1, 5deg);
      }
    }
  }
</style>
