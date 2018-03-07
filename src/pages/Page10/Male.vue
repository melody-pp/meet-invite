<template>
  <div class="male">
    <div :class="{avatarBox:true,rotateLeft,rotateRight}" :style="{backgroundImage:`url(${imgUrl})`}"></div>

    <img class="earth" v-show="aniVar.earth === 0" src="../../assets/p1/7.png">
    <img class="earth" v-show="aniVar.earth === 1" src="../../assets/p1/8.png">
    <img class="earth" v-show="aniVar.earth === 2" src="../../assets/p1/9.png">
    <img class="earth" v-show="aniVar.earth === 3" src="../../assets/p1/10.png">
    <img v-show="aniVar.rocket === 0" src="../../assets/p1/5.png">
    <img v-show="aniVar.rocket === 1" src="../../assets/p1/6.png">
    <img v-show="aniVar.UFO === 0" src="../../assets/p1/3.png">
    <img v-show="aniVar.UFO === 1" src="../../assets/p1/4.png">
    <img v-show="aniVar.superman === 0" src="../../assets/p10/4.png">
    <img v-show="aniVar.superman === 1" src="../../assets/p10/5.png">
    <img v-show="words === 0" class="wordsAnimate" src="../../assets/p10/1.png">
    <img v-show="words === 1" class="wordsAnimate" src="../../assets/p10/2.png">
    <img v-show="words === 2" class="wordsAnimate" src="../../assets/p10/3.png">
  </div>
</template>

<script>
  import { animateMixin, fixImgOriMixin } from '../../mixins'
  import { aniLoop } from '../../util'

  export default {
    name: 'male',
    mixins: [animateMixin, fixImgOriMixin],
    data () {
      return {
        aniVar: {
          earth: null,
          rocket: null,
          UFO: null,
          superman: null,
        },
        words: null,
      }
    },
    methods: {
      animate () {
        this.aniVar.superman = 0
        this.words = Math.floor(Math.random() * 3)
        aniLoop(this, 'earth', 4, 100)
        aniLoop(this, 'rocket', 2)
        aniLoop(this, 'UFO', 2)

        aniLoop(this, 'superman', 2)
      },
    },
  }
</script>

<style scoped lang="scss">
  .male {
    width: 100vw;
    height: 100vh;
    background-color: #00447c;
    .avatarBox {
      width: 20vw;
      height: 15.5vh;
      overflow: hidden;
      position: absolute;
      right: 35.5vw;
      top: 29.4vh;
      transform-origin: center;
      background-size: cover;
      background-position: center center;

      &.rotateRight {
        width: 15.5vh;
        height: 20vw;
        transform: rotateZ(90deg);
      }
      &.rotateLeft {
        width: 15.5vh;
        height: 20vw;
        transform: rotateZ(-90deg);
      }
    }
    .earth {
      top: 3vh;
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
