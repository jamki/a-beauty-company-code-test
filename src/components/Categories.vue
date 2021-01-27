<template>
  <ul class="adore-categories" v-show="namedCategories">
    <li class="adore-categories__category"
      v-for="(category, index) in namedCategories"
      :key="`category-${index}`">
      {{ category }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    categories: Array
  },

  data: function() {
    return {
      loading: true,
      namedCategories: [],
    }
  },

  watch: {
    'categories': 'getCategories',
  },

  methods: {
    getCategories() {
      this.categories.forEach(categoryId => {
        this.getCategory(categoryId);
      })
    },
    // This is a terrible idea to do in general, so I do not recommend this!
    // From the product I'm grabbing the ids, and passing that to the category
    // API, I couldn't see an option to pass an array of arguments - so I
    // went with this solution, just for the demo.
    getCategory(categoryId) {
      const categoriesUrl = 'https://www.adorebeauty.com.au/api/ecommerce/catalog/categories/';

      fetch(categoriesUrl + categoryId)
      .then(response => response.json())
      .then(data => {
        const { name } = data?.data;

        if (name) {
          this.addCategoryLookup(categoryId, name);
        }        
      });
    },
    addCategoryLookup(id, name) {
      this.namedCategories.push(name);
    },
  },

  mounted () {
    this.getCategories();
  },
}
</script>

<style scoped lang="scss">
  .adore-categories {
    min-height: 30px;
    overflow: auto;
    position: relative;
    white-space: nowrap;

    &::after {
      content: '';
      background: linear-gradient(281deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%);
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
    }

    &__category {
      background: var(--adore-secondary);
      border-radius: 8px;
      display: inline-block;
      margin-right: 8px;
      padding: 4px 8px;
      
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
