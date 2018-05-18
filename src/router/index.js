import Vue from 'vue';
import Router from 'vue-router';
import Product from '@/components/Product';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product,
    },
  ],
});
