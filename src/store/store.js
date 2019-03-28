import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userKey = 'siteUser';
const store = new Vuex.Store({
    state: {
        showHeaderFooter: true,
        isLoading: false,
        isLogin: false
    },
    getters: {
        getLoadingStatus(state) {
            return state.isLoading;
        },
        getLoginStatus(state) {
            return state.isLogin;
        }
    },
    mutations: {
        $_changeLoadingStatus(state, bool) {
            state.isLoading = bool;
        },
        $_setIsLoginStatus(state , bool) {
            state.isLogin = bool;
        }
    }
})

export default store;