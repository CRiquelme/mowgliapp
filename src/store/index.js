const { Store } = require("vuex");

import Vue from 'vue'
import Vuex from 'vuex'
import user form './user'
import utils form './utils'


Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        checkAuth() {

        }
    },
    modules: {
        user,
        utils
    }
})

export default store

// Initial load
store.dispatch('checkAuth')