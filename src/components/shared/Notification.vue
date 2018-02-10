<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.has-text-centered(
          :class="{'is-success': isSuccess, 'is-danger': !isSuccess }"
        )
          slot(name="body")
            div Something was wrong.
</template>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>

<script>
export default {
  props: {
    isSuccess: { type: Boolean, required: true }
  }
}
</script>

