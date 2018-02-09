<template lang="pug">
  #app
    pm-header

    section.section
      nav.nav
        .container
          input.input.is-large(
            type="text"
            placeholder="Search songs"
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Search
          a.button.is-danger.is-large &times;

      div
        pm-loader(v-show="isLoading")

        div(v-show="!isLoading")
          .container
            small {{results}}

          .container.results
            .columns.is-multiline
              .column.is-one-quarter(v-for="track in tracks")
                pm-track(
                  :class="{ 'is-active': track.id === currentTrackId}"
                  :track="track",
                  @selectedTrack="setSelectedTrack"
                )

    pm-footer
</template>

<script>

import trackService from '@/services/track'
import PmHeader from '@/components/layout/Header.vue'
import PmFooter from '@/components/layout/Footer.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',
  components: {
    PmHeader,
    PmFooter,
    PmTrack,
    PmLoader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      totalTracks: 0,
      isLoading: false,
      currentTrackId: ''
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(response => {
          this.tracks = response.tracks.items
          this.totalTracks = response.tracks.total
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    setSelectedTrack (trackId) {
      this.currentTrackId = trackId
      console.log(trackId)
    }
  },
  computed: {
    results () {
      return `${this.totalTracks} results`
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active .level-item {
    color: #23d160;
  }
</style>
