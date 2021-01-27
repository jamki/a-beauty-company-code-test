import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Took me a while, had a few CORS issues - googled default nuxt.js port (:3000)!!
const listViewUrl = 'https://adorebeauty.com.au/api/ecommerce/catalog/products?limit=10&page=';
const productsUrl = 'https://adorebeauty.com.au/api/ecommerce/catalog/products';

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    page: 1,
  },
  getters: {
    products: state => {
      return state.products;
    },
    product: state => {
      return state.product;
    },
    page: state => {
      return state.page;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setPage(state, pageNumber) {
      state.page = pageNumber;
    }
  },
  actions: {
    loadProducts({ commit, getters }) {
      const pageNumber = getters.page;

      fetch(listViewUrl + pageNumber)
      .then(response => response.json())
      .then(data => {
        const productsResponse = data.data;
        commit('setProducts', productsResponse);
      }).catch(e => console.warn(e));
    },
    loadProduct({ commit }, productId) {
      fetch(`${productsUrl}/${productId}`)
      .then(response => response.json())
      .then(data => {
        const productResponse = data.data;

        // The response is pretty huge, let's use destructuring to
        // get what we really need to render the view:
        // 1. id, 2. name, 3. categories[],  4.sku, 5.price, 6. description
        const compactProductResponse = (({ id, name, categories, sku, price, description }) => ({ id, name, categories, sku, price, description }))(productResponse);
        commit('setProduct', compactProductResponse);
      }).catch(e => console.warn(e));
    },
    setPage({ commit }, pageNumber) {
      commit('setPage', pageNumber);
    },
  },
})
