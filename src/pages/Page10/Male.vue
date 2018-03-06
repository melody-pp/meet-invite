<template>
  <div class="male">
    <div class="avatarBox" :style="{backgroundImage:`url(${imgUrl})`}"></div>

    <img v-show="aniVar.earth === 0" src="../../assets/p1/7.png">
    <img v-show="aniVar.earth === 1" src="../../assets/p1/8.png">
    <img v-show="aniVar.earth === 2" src="../../assets/p1/9.png">
    <img v-show="aniVar.earth === 3" src="../../assets/p1/10.png">
    <img v-show="aniVar.rocket === 0" src="../../assets/p1/5.png">
    <img v-show="aniVar.rocket === 1" src="../../assets/p1/6.png">
    <img v-show="aniVar.UFO === 0" src="../../assets/p1/3.png">
    <img v-show="aniVar.UFO === 1" src="../../assets/p1/4.png">
    <img v-show="aniVar.superman === 0" src="../../assets/p10/4.png">
    <img v-show="aniVar.superman === 1" src="../../assets/p10/5.png">
    <img v-show="aniVar.superman === 2" src="../../assets/p10/6.png">
    <img v-show="aniVar.superman === 3" src="../../assets/p10/7.png">
    <img src="../../assets/p10/1.png">
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
      animate () {

        aniLoop(this, 'earth', 4, 100)
        aniLoop(this, 'rocket', 2)
        aniLoop(this, 'UFO', 2)

        aniOnce(this, 'superman', 3)
      }
    }
  }
</script>

<style scoped lang="scss">
  .male {
    width: 100vw;
    height: 100vh;
    background-color: #00447c;
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
    .avatarBox {
      width: 20vw;
      height: 15.5vh;
      overflow: hidden;
      position: absolute;
      right: 41vw;
      top: 27vh;
      background-size: cover;
      background-position: center;
    }

  }
</style>
