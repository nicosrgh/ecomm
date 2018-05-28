<template>
<div class="detail-product">
    <h3>{{ product.name }}</h3>
</div>    
</template>

<script>
import axios from 'axios';
/* eslint no-template-curly-in-string: "error" */
export default {
  name: 'detail-product',
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios
      .get(`http://ecomm-api.test/api/products/${this.id}`)
      .then((response) => {
        this.product = response.data;
      });
  },
};
</script>
