const trackMixin = {
  methods: {
    selectTrack () {
      this.$emit('selectedTrack', this.track.id)
      // Global $emit
      this.$bus.$emit('setTrack', this.track)
    }
  }
}

export default trackMixin
