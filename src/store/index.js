import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../firebase'
import user from './user'
import utils from './utils'


Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        checkAuth({commit}) {
            auth.onAuthStateChanged(function (user){
                if(user) {
                    commit('user/setUser', user)
                } else {
                    commit('user/setUser', null)
                }
            })
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