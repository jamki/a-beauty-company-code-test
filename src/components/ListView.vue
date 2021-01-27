<template>
  <div class="list-view">
    <div class="adore-wrapper">
      <h1>All Products</h1>

      <table class="adore-table" v-show="!loading">

        <transition name="fade">
          <Loader v-if="loading" :loading="loading" />
        </transition>

        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Sku</th>
          </tr>
        </thead>
        <template v-for="product in products">
          <tr :key="product.id">
            <td><router-link :to="`/about/${product.id}`">{{ product.id }}</router-link></td>
            <td><router-link :to="`/about/${product.id}`">{{ product.name }}</router-link></td>
            <td><router-link :to="`/about/${product.id}`">{{ product.sku }}</router-link></td>
          </tr>
        </template>
      </table>
    </div>

    <Pagination v-on:change-page="setPage"/>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '@/components/Loader.vue';
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'ListView',
  components: {
    Loader,
    Pagination,
  },

  data: function() {
    return {
      loading: true,
      paginationLimit: 10,
    }
  },

  computed: mapState([
    'page',
    'products',
  ]),

  watch: {
    'page': 'getProducts',
    'products': 'hasLoaded',
  },

  methods: {
    hasLoaded() {
      this.loading = false;
    },
    getProducts() {
      this.$store.dispatch('loadProducts');
      this.loading = true;
    },
    setPage(pageNumber) {
      this.$store.dispatch('setPage', pageNumber);
    },
  },

  created() {
    this.$store.dispatch('loadProducts');
  },
}
</script>

<style scoped lang="scss">
  .adore-wrapper {
    min-height: 380px;
  }

  .adore-table {
    position: relative;
    text-align: left;
    width: 100%;

    td {
      padding-right: 16px;

      &:last-child {
        padding-right: 0;
      }
    }
  }
</style>
