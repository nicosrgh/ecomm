<template>
  <div class="hello">
    <input type="text" v-model="search" v-on:keyup="searchProduct"/>
    <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
/* eslint no-template-curly-in-string: "error" */
export default {
  name: 'hello',
  data() {
    return {
      products: null,
      search: '',
    };
  },
  mounted() {
    axios
      .get('http://ecomm-api.test/api/products')
      .then((response) => {
        this.products = response.data;
      });
  },
  methods: {
    searchProduct() {
      axios
        .get(`http://ecomm-api.test/api/products?search=${this.search}`)
        .then((response) => {
          this.products = response.data;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
