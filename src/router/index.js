import Vue from 'vue';
import Router from 'vue-router';
import Product from '@/components/Product';
import DetailProduct from '@/components/DetailProduct';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product,
    },
    {
      path: '/detail-product/:id',
      name: 'DetailProduct',
      component: DetailProduct,
    },
  ],
});
