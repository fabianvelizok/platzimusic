<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[2].url")
        .media-content
          p.title.is-6
            strong
              router-link(:to="{ name: 'track', params: { id: this.track.id } }") {{track.name}}
          div
            p.subtitle.is-6
              span(v-for="artist in track.artists")
                |{{artist.name}} |
      .content
        small
        nav.level
          .level-left
            a.level-item
              span.icon.is-small(@click="selectedTrack") ▶
            router-link.level-item(:to="{ name: 'track', params: { id: this.track.id } }")
              |🔗

</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    selectedTrack () {
      this.$emit('selectedTrack', this.track.id)
      // Global $emit
      this.$bus.$emit('setTrack', this.track)
    }
  }
}
</script>

