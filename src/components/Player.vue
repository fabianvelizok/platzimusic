<template lang="pug">
  .content(v-if="track && track.album")
    p.is-128x128
      img(:src="track.album.images[1].url")
    p
      |{{track.name}}
      small &nbsp;- {{track.duration_ms | ms-to-mm}}
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>
