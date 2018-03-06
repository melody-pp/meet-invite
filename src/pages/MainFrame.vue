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
      <Page6 :moveIn="current===5"/>
    </div>
    <div class="page">
      <Page7 :moveIn="current===6"/>
    </div>
    <div class="page">
      <Page8 :moveIn="current===7" @getSelfie="setSelfie"/>
    </div>
    <div class="page">
      <Page9 :moveIn="current===8" @setGender="setGender"/>
    </div>
    <div class="page">
      <Male v-show="gender" :moveIn="current===9" :imgUrl="imgUrl"/>
      <Female v-show="!gender" :moveIn="current===9" :imgUrl="imgUrl"/>
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
  import Page6 from './page6/Page6'
  import Page7 from './page7/Page7'
  import Page8 from './page8/Page8'
  import Page9 from './Page9/Page9'
  import Male from './Page10/Male'
  import Female from './Page10/Female'

  export default {
    name: 'main-frame',
    components: {Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Male, Female},
    data () {
      return {
        current: 0,
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
        if (this.isMoving || this.current >= 9) {
          return
        }

        // 拍照页、选择性别页禁止直接往下翻
        if (!force && (this.current === 7 || this.current === 8)) {
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
        if (this.current === 8) {
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
