<template>
  <div class="main" @touchstart="touchstart" @touchend="touchend"
       :style="{transform: `translate3d(0,-${current*100}vh,0)`}">

    <div class="page">
      <Page1/>
    </div>

    <div class="page">
      <Page2/>
    </div>
  </div>
</template>

<script>
  import Page1 from './page1/Page1'
  import Page2 from './page2/Page2'

  export default {
    name: 'main-frame',
    components: {Page1, Page2},
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

        this.current++
        this.isMoving = true
        setTimeout(() => this.isMoving = false, 1000)
      },
      moveUp () {
        if (this.isMoving) {
          return
        }

        this.current--
        this.isMoving = true
        setTimeout(() => this.isMoving = false, 1000)
      }
    },
  }
</script>

<style scoped>
  .main {
    transition: all 700ms ease-out;
  }

  .page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
</style>
