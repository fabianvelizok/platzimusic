<template lang="pug">
  div
    pm-loader(v-if="isLoading")
    .container(v-if="!isLoading")
      .columns
        .column.is-5.is-offset-4
          pm-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  components: {
    PmTrack,
    PmLoader
  },
  data () {
    return {
      track: {},
      isLoading: false
    }
  },
  created () {
    const id = this.$route.params.id
    this.isLoading = true

    trackService.getById(id)
      .then((response) => {
        this.track = response
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
</script>

<style lang="scss" scoped>
  .column {
    padding: 20px;
  }
</style>


