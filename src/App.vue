<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link to="/" class="logo-color">ecomm</router-link>
      </div>
      <div class="search">
        <input type="text" v-model="search" v-on:keyup.enter="searchProduct"/>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    async searchProduct() {
      await this.$store.dispatch('searchProduct', this.search);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0px;
  padding: 20px 16px 20px 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.logo{
  width: 25%;
}

.search-product {
  width: 75%;
  text-align: end;
}

.logo-color {
  color: #ffffff;
}

</style>
