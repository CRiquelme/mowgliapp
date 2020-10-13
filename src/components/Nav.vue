<template>
    <nav class="flex items-center justify-between flex-wrap bg-purple-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/images/me-removebg.png" class="h-10 mr-1" alt="">
        <span class="font-semibold text-xl tracking-tight">Mowglimiento</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            item de menú
          </a>
        </div>
        <div>
          <router-link
            to="/ingresar"
            v-if="!user"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-purple-200 border-purple-500 hover:border-transparent hover:text-purple-100 hover:bg-purple-600 mt-4 lg:mt-0"
          >
            Ingresar
          </router-link>
          <template v-else>
            <button
              @click="doLogout"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-purple-200 border-purple-500 hover:border-transparent hover:text-purple-100 hover:bg-purple-600 mt-4 lg:mt-0"
            >
              Salir
            </button>
          </template>
        </div>
      </div>
    </nav>
</template>

<script>
// import { fb, auth } from "@/firebase";
import { mapState } from 'vuex'

export default {
  name: "Nav",
  data() {
    return {
    };
  },
  methods: {
    async doLogout() {
      try {
        await this.$store.dispatch('user/doLogout')
        this.$router.push({name: 'AuthView'})
        console.log('Logged out')
      } catch (error) {
        console.log(error.message)
      }
    },
  },
  
  computed: {
    ...mapState('user', ['user'])
  }
};
</script>

<style></style>
