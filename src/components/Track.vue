<template lang="pug">
  .card
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
            strong {{track.name}}
          div
            p.subtitle.is-6
              span(v-for="artist in track.artists")
                |{{artist.name}} |
      .content
        small
        nav.level
          .level-left
            a.level-item
              span.icon.is-small ▶
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  }
}
</script>

