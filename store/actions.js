import Axios from "axios";

export default {
    async getProduct({commit}) {
        const response = await Axios.get('http://ecomm-api.test/api/products');
        commit('setProduct', response.data);
    },
    async searchProduct({commit, state}, data) {
        commit('setSearch', data);
        const response = await Axios.get('http://ecomm-api.test/api/products', {
            params: {
                search: state.search
            }
        });
        commit('setProduct', response.data);
    }
}