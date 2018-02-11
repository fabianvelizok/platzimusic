<template lang="pug">
  #app
    pm-header
    router-view
    pm-footer
</template>

<script>

import PmHeader from '@/components/layout/Header.vue'
import PmFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    PmHeader,
    PmFooter
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  $green: #23d160;

  .results {
    margin-top: 50px;
  }

  .is-active {
    .play-button {
      background-color: $green;
      color: #fff;
    }
    .track-name, .track-artists {
      color: $green;
    }
  }
</style>
