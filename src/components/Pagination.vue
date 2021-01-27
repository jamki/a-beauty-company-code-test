<template>
  <div class="adore-pagination">
    <button :disabled="page === 1"
      @click="changePage(page - 1)">previous page</button>

    <button v-for="index in 10"
      :disabled="page === index"
      :key="`page-${index}`"
      class="adore-pagination__numbers"
      @click="changePage(index)">{{index}}</button>

    <button disabled class="adore-pagination__mobile-indicator">{{ page }}</button>

    <button :disabled="page === 10"
      @click="changePage(page + 1)">next page</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ListView',
  props: {
    msg: String
  },

  data: function() {
    return {
      loading: true,
      paginationLimit: 10,
    }
  },

  computed: mapState([
    'page'
  ]),

  watch: {
    'products': 'hasLoaded',
  },

  methods: {
    changePage(pageNumber) {
      this.$emit('change-page', pageNumber);
    },
  },

  mounted () {
  },
}
</script>

<style scoped lang="scss">
  .adore-pagination {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    width: 100%;

    &__mobile-indicator {
      display: none;

      @media screen and (max-width: 600px) {
        display: inline-block;
      }
    }

    &__numbers {
      display: inline-block;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    button {
      background: var(--adore-tertiary);
      border: 0;
      cursor: pointer;
      margin-right: 8px;
      min-width: 15px;
      padding: 16px;
      text-transform: uppercase;
    }
  }  
</style>
