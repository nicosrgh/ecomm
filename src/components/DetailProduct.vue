<template>
<div class="detail-product">
    <h3>{{ this.product.name }} </h3>
</div>    
</template>

<script>
/* eslint no-template-curly-in-string: "error" */
export default {
  name: 'detail-product',
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    await this.$store.dispatch('getDetailProduct', this.$route.params.id);
    this.product = this.$store.state.products;
  },
};
</script>
