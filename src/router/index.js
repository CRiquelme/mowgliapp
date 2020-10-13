import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthView from '../views/AuthView'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ingresar',
        name: 'AuthView',
        component: AuthView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router