<template>
  <div class="detailed-view">

    <BackButton />

    <transition name="fade">
      <Loader v-if="loading" :loading="loading" />
    </transition>

    <template v-if="!loading">
      <h1>{{ product.name }}</h1>

      <Categories :categories="product.categories" />

      <h2>SKU: {{ product.sku }}</h2>

      <h3>Price: {{ `$${product.price}` }}</h3>

      <div class="adore-product-description" v-html="product.description"></div>
    </template>

  </div>
</template>


<script>
import { mapState } from 'vuex';
// import { mdChip } from 'vue-material/dist/components';
import Categories from '@/components/Categories.vue';
import BackButton from '@/components/BackButton.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'Detail',
  components: {
    Categories,
    Loader,
    BackButton,
  },

  data: function() {
    return {
      loading: true,
    }
  },

  computed: mapState([
    'product'
  ]),

  watch: {
    '$router': 'fetchData',
    'product': 'hasLoaded',
  },

  methods: {
    fetchData() {
      this.$store.dispatch('loadProduct', this.$route.params.id);
    },
    hasLoaded() {
      this.loading = false;
    },
  },

  created() {
    this.fetchData();
  }
}
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .detailed-view {
    min-height: 380px;
  }

  h1 {
    margin-bottom: 24px;
  }

  h2 {
    margin: 24px 0;
  }
</style>
