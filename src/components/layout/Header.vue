<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 🎧 Platzi Music
          .nav-right.nav-menu
            router-link.nav-item(to="/") search
            router-link.nav-item(to="about") About us

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Great tracks!
        pm-player
</template>

<script>

import PmPlayer from '@/components/Player.vue'

export default {
  components: {
    PmPlayer
  }
}
</script>
