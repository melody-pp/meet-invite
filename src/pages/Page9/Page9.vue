<template>
  <div class="page9">
    <img v-show="aniVar.circle === 0" src="../../assets/p9/2.png">
    <img v-show="aniVar.circle === 1" src="../../assets/p9/3.png">
    <img v-show="aniVar.circle === 2" src="../../assets/p9/4.png">
    <img v-show="aniVar.circle === 3" src="../../assets/p9/5.png">
    <img v-show="aniVar.circle === 4" src="../../assets/p9/6.png">
    <img src="../../assets/p9/1.png">
    <img v-show="aniVar.btnBg === 0" src="../../assets/p9/7.png">
    <img v-show="aniVar.btnBg === 1" src="../../assets/p9/8.png">
    <img v-show="aniVar.btnBg === 2" src="../../assets/p9/9.png">
    <img class="rocket" src="../../assets/p9/huojian.png"
         @touchmove="touchmove" @touchend="touchend"
         :style="{bottom: `calc(9.5vh + ${y}px)`}">
    <input ref="input" type="file" accept="image/*" @change="changeFile">
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
          circle: null,
          btnBg: null,
        },
        y: 0,
        startY: null
      }
    },
    methods: {
      animate () {
        aniLoop(this, 'circle', 5)
        aniLoop(this, 'btnBg', 3, 300)
      },
      touchmove (event) {
        if (this.y > 150) {
          return this.choseFile()
        }

        const currentY = event.changedTouches[0].clientY
        if (this.startY) {
          this.y += this.startY - currentY
        }

        this.startY = currentY
      },
      touchend () {
        this.startY = null
      },
      choseFile () {
        this.$refs.input.click()
      },
      setSelfie (imgUrl) {
        this.$emit('setSelfie', imgUrl)
      },
      changeFile(){
        const reader = new FileReader()
        const file = this.$refs.input.files[0]

        reader.readAsDataURL(file)
        reader.onload = e => this.$emit('getSelfie',e.target.result)

        const formData = new FormData
        formData.append('file',file)

        const  request = new XMLHttpRequest();
        request.open("POST", "http://foo.com/submitform.php");
        request.send(formData);
      }
    }
  }
</script>

<style scoped lang="scss">
  .page9 {
    width: 100vw;
    height: 100vh;
    background-color: #014d87;
    .rocket {
      width: 14.27vw;
      height: auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    input {
      position: absolute;
    }
  }
</style>
