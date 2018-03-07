<template>
  <div class="page8">
    <img v-show="aniVar.circle === 0" src="../../assets/p8/2.png">
    <img v-show="aniVar.circle === 1" src="../../assets/p8/3.png">
    <img v-show="aniVar.circle === 2" src="../../assets/p8/4.png">
    <img v-show="aniVar.circle === 3" src="../../assets/p8/5.png">
    <img v-show="aniVar.circle === 4" src="../../assets/p8/6.png">

    <transition enter-active-class="animated zoomIn">
      <img v-show="title" src="../../assets/p8/1.png">
    </transition>
    <img @click="choseFile" v-show="aniVar.btnBg === 0" src="../../assets/p8/7.png">
    <img @click="choseFile" v-show="aniVar.btnBg === 1" src="../../assets/p8/8.png">
    <img :class="{rocket: true, active:rocket}" src="../../assets/p8/huojian.png">
    <input ref="input" type="file" accept="image/*" @change="changeFile">
  </div>
</template>

<script>
  import { animateMixin } from '../../mixins'
  import { aniLoop } from '../../util'

  export default {
    name: 'page8',
    mixins: [animateMixin],
    data () {
      return {
        aniVar: {
          circle: null,
          btnBg: null,
        },
        y: 0,
        startY: null,
        rocket: false,
        title: false,
      }
    },
    methods: {
      animate () {
        aniLoop(this, 'circle', 5, 300)
        aniLoop(this, 'btnBg', 2, 300)
      },
      choseFile () {
        this.$refs.input.click()
      },
      setSelfie (imgUrl) {
        this.$emit('setSelfie', imgUrl)
      },
      changeFile () {
        const formData = new FormData
        const xhr = new XMLHttpRequest()

        formData.append('file', this.$refs.input.files[0])
        xhr.open('post', '/nianhui/index.php/Meet/upload')
        xhr.send(formData)
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            this.$emit('getSelfie', xhr.responseText)
          }
        }
      },
    },
    watch: {
      moveIn (newVal) {
        setTimeout(() => {
          this.rocket = newVal
          this.title = newVal
        }, 500)
      },
    },
  }
</script>

<style scoped lang="scss">
  .page8 {
    width: 100vw;
    height: 100vh;
    background-color: #014d87;
    .rocket {
      width: 5.73vw;
      height: auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 30vh;
      opacity: 0;
      &.active {
        opacity: 1;
        bottom: 37vh;
        transition: all 1s ease-out;
      }
    }
    input {
      position: absolute;
      top: -20vh;
    }
  }
</style>
