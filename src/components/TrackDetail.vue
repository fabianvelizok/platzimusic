<template lang="pug">
  div
    pm-loader(v-show="isLoading")
    div(v-if="track && track.id")
      .container(v-show="!isLoading")
        .columns
          .column.is-3.has-text-centered
            figure.media-left
              img.image(:src="track.album.images[0].url")
            p
              a.button.is-primary.is-large
                span.icon(@click="selectTrack") ▶
          .column.is-8
            .panel
              .panel-heading
                h1.title {{this.trackTitle}}
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
import PmLoader from '@/components/shared/Loader.vue'
import trackMixing from '@/mixins/track'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  mixins: [
    trackMixing
  ],
  components: {
    PmLoader
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  methods: {
    ...mapActions(['getTrackById'])
  },
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.isLoading = true

      this.getTrackById({ id })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .column {
    padding: 20px;
  }

  .button-bar {
    margin-top: 20px;
  }
</style>


