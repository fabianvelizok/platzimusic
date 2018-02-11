<template lang="pug">
  main
    transition(name="move")
      pm-notification(
        :is-success="isSuccess"
        v-show="showNotification"
      )
        div(slot="body") {{notificationMessage}}

    section.section
      nav.nav
        .container
          input.input.is-large(
            type="text"
            placeholder="Search songs"
            v-model="searchQuery"
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Search
          a.button.is-danger.is-large &times;

      div
        transition(name="move")
          pm-loader(v-show="isLoading")

        div(v-show="!isLoading")
          .container
            small {{results}}

          .container.results
            .columns.is-multiline
              .column.is-one-quarter(v-for="track in tracks")
                pm-track(
                  v-blur="track.preview_url"
                  :class="{ 'is-active': track.id === currentTrackId}"
                  :track="track",
                  @selectedTrack="setSelectedTrack"
                )
</template>

<script>

import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      totalTracks: 0,
      isLoading: false,
      currentTrackId: '',
      showNotification: false,
      notificationMessage: '',
      isSuccess: false
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return

      this.showNotification = false
      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(response => {
          this.tracks = response.tracks.items
          this.totalTracks = response.tracks.total

          // Notification vars
          this.isSuccess = !!this.totalTracks
          this.notificationMessage = this.totalTracks
            ? `${this.totalTracks} results.` : 'No results.'
        })
        .catch(() => {
          // Notification vars
          this.isSuccess = false
          this.notificationMessage = 'Ups... Something was wrong.'
        })
        .finally(() => {
          this.showNotification = true
          this.isLoading = false
        })
    },
    setSelectedTrack (trackId) {
      this.currentTrackId = trackId
    }
  },
  computed: {
    results () {
      return `${this.totalTracks} results`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .results {
    margin-top: 50px;
  }

  .is-active .level-item {
    color: #23d160;
  }
</style>
