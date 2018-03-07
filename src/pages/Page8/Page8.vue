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
  import EXIF from 'exif-js'
  import { animateMixin } from '../../mixins'
  import { aniOnce, aniLoop } from '../../util'

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
        title: false
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
        this.fixImgOri(this.$refs.input.files[0])
      },
      fixImgOri (file) {
        let orientation
        const vm = this

        EXIF.getData(file, function () {
          orientation = +EXIF.getTag(this, 'Orientation')

          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = e => {
            const image = new Image()
            image.src = e.target.result
            image.onload = function () {
              let width = this.naturalWidth
              let height = this.naturalHeight

              const canvas = document.createElement('canvas')
              const ctx = canvas.getContext('2d')
              canvas.width = width
              canvas.height = height
              ctx.drawImage(image, 0, 0, width, height)

              if (navigator.userAgent.match(/iphone/i) && orientation && orientation !== 1) {
                switch (orientation) {
                  case 6://需要顺时针（向左）90度旋转
                    vm.rotateImg(this, 'left', canvas)
                    break
                  case 8://需要逆时针（向右）90度旋转
                    vm.rotateImg(this, 'right', canvas)
                    break
                  case 3://需要180度旋转
                    vm.rotateImg(this, 'right', canvas)//转两次
                    vm.rotateImg(this, 'right', canvas)
                    break
                }
              }

              vm.uploadImg(vm.dataURLtoFile(canvas.toDataURL('image/jpg', 0.8)))
            }
          }
        })
      },
      rotateImg (img, direction, canvas) {
        const height = img.naturalHeight
        const width = img.naturalWidth
        const step = direction === 'right' ? 3 : 1

        //旋转角度以弧度值为参数
        const degree = step * 90 * Math.PI / 180
        const ctx = canvas.getContext('2d')
        switch (step) {
          case 0:
            canvas.width = width
            canvas.height = height
            ctx.drawImage(img, 0, 0)
            break
          case 1:
            canvas.width = height
            canvas.height = width
            ctx.rotate(degree)
            ctx.drawImage(img, 0, -height)
            break
          case 2:
            canvas.width = width
            canvas.height = height
            ctx.rotate(degree)
            ctx.drawImage(img, -width, -height)
            break
          case 3:
            canvas.width = height
            canvas.height = width
            ctx.rotate(degree)
            ctx.drawImage(img, -width, 0)
            break
        }
      },
      dataURLtoFile (dataUrl) {
        const arr = dataUrl.split(',')
        const mime = arr[0].match(/:(.*?);/)[1]
        const bstr = atob(arr[1])
        let n = bstr.length
        const u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }

        return new File([u8arr], 'file', {type: mime})
      },
      uploadImg (file) {
        const formData = new FormData
        const xhr = new XMLHttpRequest()

        formData.append('file', file)
        xhr.open('post', '/nianhui/index.php/Meet/upload')
        xhr.send(formData)
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            this.$emit('getSelfie', xhr.responseText)
          }
        }
      }
    },
    watch: {
      moveIn (newVal) {
        setTimeout(() => {
          this.rocket = newVal
          this.title = newVal
        }, 500)

      }
    }
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
