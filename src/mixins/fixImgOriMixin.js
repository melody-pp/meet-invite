import EXIF from 'exif-js'

export const fixImgOriMixin = {
  props: ['imgUrl'],
  data () {
    return {
      rotateLeft: false,
      rotateRight: false,
      isIphoneX: /iphone/gi.test(navigator.userAgent) && (screen.height === 812 && screen.width === 375)
    }
  },
  methods: {
    fixImgOri (img) {
      const vm = this
      EXIF.getData(img, function () {
        const orientation = EXIF.getTag(this, 'Orientation')
        vm.rotateRight = orientation === 6
        vm.rotateLeft = orientation === 8
      })
    },
  },
  watch: {
    imgUrl (url) {
      const image = new Image()
      image.src = url
      image.onload = () => {
        this.fixImgOri(image)
      }
    },
  },
}
