<template>
  <div class="adore-back">
    <router-link class="adore-back__button" :to="'/'">&lt; Back to list</router-link>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
}
</script>

<style scoped lang="scss">
  .adore-back {
    text-align: left;

    &__button {
      padding: 8px 8px 8px 0;
    }
  }
</style>
