<template>
  <div class="hello">
    <div class="search">
      <input type="text" v-model="search" v-on:keyup="searchProduct"/>
    </div>
    <div v-for="product in products" :key="product.id" class="card">
      <img :src="product.image_url" width="300px" height="250px"/> 
      <div class="container">
        <h3>{{ product.name }}</h3>
        <h5>{{ product.price }}</h5>
      </div>
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

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  text-align: left;
  display: inline-grid;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
}

.search {
  text-align: end;
  margin: 0px 50px 0px 50px;
}
</style>
