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

          p
            small {{results}}

      .container
        .columns
          .column(v-for="track in tracks")
            p {{track.name}} - {{track.artist}}
</template>

<script>

const tracks = [
  { name: 'Song 1', artist: 'Artist 1' },
  { name: 'Song 2', artist: 'Artist 2' },
  { name: 'Song 3', artist: 'Artist 3' },
  { name: 'Song 4', artist: 'Artist 4' }
]

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
      this.tracks = tracks
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
