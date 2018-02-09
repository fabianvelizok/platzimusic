<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text"
            placeholder="Search songs"
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Search
          a.button.is-danger.is-large &times;

      .container
        small {{results}}

      .container
        .columns
          .column(v-for="track in tracks")
            strong {{track.name}}
            div
              span(v-for="artist in track.artists")
                |{{artist.name}} |
</template>

<script>

import trackService from './services/track'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return

      trackService.search(this.searchQuery)
        .then(response => {
          this.tracks = response.tracks.items
        })
    }
  },
  computed: {
    results () {
      return `${this.tracks.length} results`
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
