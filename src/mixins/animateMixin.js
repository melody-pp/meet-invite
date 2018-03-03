export const animateMixin = {
  props: ['moveIn'],
  methods: {
    reset () {
      const aniVar = this.$data.aniVar
      Object.keys(aniVar).forEach(key => aniVar[key] = null)
    }
  },
  watch: {
    moveIn (isMoveIn) {
      isMoveIn
        ? setTimeout(this.animate.bind(this), 700)
        : this.reset()
    }
  }
}
