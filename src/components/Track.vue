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
            strong.track-name {{track.name}}
          div
            p.subtitle.is-6.track-artists
              span(v-for="artist in track.artists")
                |{{artist.name}} |
      .content
        small {{track.duration_ms | ms-to-mm}}
        nav.level
          .level-left
            button.level-item.button.is-primary.play-button(@click="selectTrack")
              span.icon.is-small ▶
            router-link.level-item.button(
              tag="button",
              :to="{ name: 'track', params: { id: this.track.id } }"
            )
              span.icon.is-small 🔗

</template>

<script>
import trackMixing from '@/mixins/track'

export default {
  mixins: [
    trackMixing
  ],
  props: {
    track: { type: Object, required: true }
  }
}
</script>

