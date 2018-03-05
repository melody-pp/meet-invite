<template>
  <div class="main" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove"
       :style="{transform: `translate3d(0,-${current*100}vh,0)`}">
    <div class="page">
      <Page1 :moveIn="current===0"/>
    </div>
    <div class="page">
      <Page2 :moveIn="current===1"/>
    </div>
    <div class="page">
      <Page3 :moveIn="current===2"/>
    </div>
    <div class="page">
      <Page4 :moveIn="current===3"/>
    </div>
    <div class="page">
      <Page5 :moveIn="current===4"/>
    </div>
    <div class="page">
      <Page9 :moveIn="current===5" @getSelfie="setSelfie"/>
    </div>
    <div class="page">
      <Page10 :moveIn="current===6" @setGender="setGender"/>
    </div>
    <div class="page">
      <Male v-if="gender" :moveIn="current===7" :imgUrl="imgUrl"/>
      <Female v-else :moveIn="current===7" :imgUrl="imgUrl"/>
    </div>
  </div>
</template>

<script>
  import { clearAll } from '../util'
  import Page1 from './page1/Page1'
  import Page2 from './page2/Page2'
  import Page3 from './page3/Page3'
  import Page4 from './page4/Page4'
  import Page5 from './page5/Page5'
  import Page9 from './page9/Page9'
  import Page10 from './page10/Page10'
  import Male from './Page11/Male'
  import Female from './page11/Female'

  export default {
    name: 'main-frame',
    components: {Page1, Page2, Page3, Page4, Page5, Page9, Page10, Male, Female},
    data () {
      return {
        current: 5,
        isMoving: false,
        gender: 1,
        imgUrl: ''
      }
    },
    methods: {
      touchstart (event) {
        this.startY = event.changedTouches[0].pageY
      },
      touchmove (event) {
        event.preventDefault()
      },
      touchend (event) {
        const endY = event.changedTouches[0].pageY

        if (endY - this.startY < -5) {
          this.moveDown()
        }
        if (endY - this.startY > 5) {
          this.moveUp()
        }
      },
      moveDown (force) {
        if (this.isMoving || this.current >= 8) {
          return
        }

        // 拍照页、选择性别页禁止直接往下翻
        if (!force && (this.current === 5 || this.current === 6)) {
          return
        }

        clearAll()
        this.current++
        this.$emit('flip')
        this.isMoving = true
        setTimeout(() => this.isMoving = false, 1000)
      },
      moveUp () {
        if (this.isMoving || !this.current) {
          return
        }

        clearAll()
        this.current--
        this.$emit('flip')
        this.isMoving = true
        setTimeout(() => this.isMoving = false, 1000)
      },
      setSelfie (imgUrl) {
        this.imgUrl = imgUrl
        this.moveDown(true)
      },
      setGender (gender) {
        this.gender = gender
        this.moveDown(true)
      }
    },
  }
</script>

<style lang='scss'>
  .main {
    transition: all 700ms ease-out;
    img {
      width: 100vw;
      height: 100vh;
      position: absolute;
      /*top: 0;*/
      left: 0;
    }
  }

  .page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

  }
</style>
