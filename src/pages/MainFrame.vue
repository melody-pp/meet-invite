<template>
  <div class="main" @touchstart="touchstart" @touchend="touchend"
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
  </div>
</template>

<script>
  import { clearAll } from '../util'
  import Page1 from './page1/Page1'
  import Page2 from './page2/Page2'
  import Page3 from './page3/Page3'
  import Page4 from './page4/Page4'
  import Page5 from './page5/Page5'

  export default {
    name: 'main-frame',
    components: {Page1, Page2, Page3, Page4, Page5},
    data () {
      return {
        current: 0,
        isMoving: false,
      }
    },
    methods: {
      touchstart (event) {
        this.startY = event.changedTouches[0].pageY
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
      moveDown () {
        if (this.isMoving) {
          return
        }

        clearAll()
        this.current++
        this.$emit('flip')
        this.isMoving = true
        setTimeout(() => this.isMoving = false, 1000)
      },
      moveUp () {
        if (this.isMoving) {
          return
        }

        clearAll()
        this.current--
        this.$emit('flip')
        this.isMoving = true
        setTimeout(() => this.isMoving = false, 1000)
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
      top: 0;
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
