import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const g_data = require('../utils/global');
const userKey = g_data.userKey;

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
        $_setIsLogin(state , bool) {
            state.isLogin = bool;
        },
        $_setLocalStorage(state,value) {
            localStorage.setItem(userKey, JSON.stringify(value));
        }
    }
})

export default store;