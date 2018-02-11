<template lang="pug">
  div
    pm-loader(v-if="isLoading")
    .container(v-if="!isLoading")
      .columns
        .column.is-3.has-text-centered
          figure.media-left
            img.image(:src="track.album.images[0].url")
          p
            a.button.is-primary.is-large
              span.icon(@click="selectTrack")
        .column.is-8
          .panel
            .panel-heading
              h1.title {{track.name}}
            .panel-block
              article.media
                .media-content
                  .content
                    ul(v-for="(v, k) in track")
                      li
                        strong {{k}}:&nbsp;
                        span {{k}}




                nav.level
                  .level-left
                    a.level-item
</template>

<script>
import trackService from '@/services/track'
import PmLoader from '@/components/shared/Loader.vue'
import trackMixing from '@/mixins/track'

export default {
  mixins: [
    trackMixing
  ],
  components: {
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


