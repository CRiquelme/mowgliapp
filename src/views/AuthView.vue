<template>
	<section>
		<div class="container mx-auto">
			<!-- Login form -->
			<template v-if="isLogin">
				<h2 class="text-center text-4xl uppercase mt-10 text-purple-900 font-black">Login</h2>
				<div class="registro grid place-content-center ">
					<form @submit.prevent="doLogin" class="w-full max-w-lg text-left bg-gray-100 shadow-md rounded px-20 pt-10 pb-10 mb-4">						
                        <div class="mb-5">
                            <div class="mb-1">
                                <label for="email" class="block text-sm font-bold mb-2"
                                :class="{
                                'label-error': $v.userData.email.$error,
                                label: !$v.userData.email.$error,
                                }">Correo electrónico</label>
                                <input class="input" type="email" id="email" placeholder="Correo electrónico" v-model.trim="$v.userData.email.$model" :class="{
                                'input-error': $v.userData.email.$error,
                                input: !$v.userData.email.$error,
                                }">
                            </div>
                            <div
                                v-if="!$v.userData.email.required"
                                :class="{
                                    'mensaje-error': $v.userData.email.$error,
                                    hidden: !$v.userData.email.$error,
                                }"
                                >Es requerido
                            </div>
                            <div
                                v-if="!$v.userData.email.email"
                                :class="{
                                    'mensaje-error': $v.userData.email.$error,
                                    hidden: !$v.userData.email.$error,
                                }"
                                >Debe ser un correo electrónico válido
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="mb-1">
                                <label for="password" class="block text-sm font-bold mb-2" :class="{'label-error': $v.userData.password.$error,
                                label: !$v.userData.password.$error}">Contraseña</label>
                                <input class="input" type="password" id="password" placeholder="Contraseña" v-model.trim="$v.userData.password.$model" :class="{'input-error': $v.userData.password.$error, input: !$v.userData.password.$error}">
                            </div>
                            <div
                                v-if="!$v.userData.password.required"
                                :class="{
                                    'mensaje-error': $v.userData.password.$error,
                                    hidden: !$v.userData.password.$error,
                                }"
                                >Es requerido
                            </div>
                            <div :class="{ 'mensaje-error': $v.userData.password.$error }" v-if="!$v.userData.password.minLength">
                                Debe contener al menos
                                {{ $v.userData.password.$params.minLength.min }} letras.
                            </div>
                        </div>
                        <div class="my-8 mx-auto text-center">
                            <button type="submit" class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" :class="{'is_loading': isLoading}">
                                <font-awesome-icon :icon="['fas', 'spinner']" spin v-if="isLoading" /> <span v-if="!isLoading">Ingresar a Mowglimiento</span>
                            </button>
                        </div>
                        <a class="mx-auto cursor-pointer" @click="isLogin = false">No tengo una cuenta y quiero registrarme.</a>
					</form>
				</div>
			</template>
			<!-- End login form -->

			<!-- Register form -->
			<template v-if="!isLogin">
                <h2 class="text-center text-4xl uppercase mt-10 text-purple-900 font-black">Registro</h2>
                <div class="registro grid place-content-center ">
                    <form @submit.prevent="doRegister" class="w-full max-w-lg text-left bg-gray-100 shadow-md rounded px-20 pt-10 pb-10 mb-4">
                        <div class="mb-5">
                            <label for="name" class="block text-sm font-bold mb-2">Nombre</label>
                            <input class="input" type="text" id="name" placeholder="Nombre" v-model="userData.name">
                        </div>
                        <div class="mb-5">
                            <div class="mb-1">
                                <label for="email" class="block text-sm font-bold mb-2"
                                :class="{
                                'label-error': $v.userData.email.$error,
                                label: !$v.userData.email.$error,
                                }">Correo electrónico</label>
                                <input class="input" type="email" id="email" placeholder="Correo electrónico" v-model.trim="$v.userData.email.$model" :class="{
                                'input-error': $v.userData.email.$error,
                                input: !$v.userData.email.$error,
                                }">
                            </div>
                            <div
                                v-if="!$v.userData.email.required"
                                :class="{
                                    'mensaje-error': $v.userData.email.$error,
                                    hidden: !$v.userData.email.$error,
                                }"
                                >Es requerido
                            </div>
                            <div
                                v-if="!$v.userData.email.email"
                                :class="{
                                    'mensaje-error': $v.userData.email.$error,
                                    hidden: !$v.userData.email.$error,
                                }"
                                >Debe ser un correo electrónico válido
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="mb-1">
                                <label for="password" class="block text-sm font-bold mb-2" :class="{'label-error': $v.userData.password.$error,
                                label: !$v.userData.password.$error}">Contraseña</label>
                                <input class="input" type="password" id="password" placeholder="Contraseña" v-model.trim="$v.userData.password.$model" :class="{'input-error': $v.userData.password.$error, input: !$v.userData.password.$error}">
                            </div>
                            <div
                                v-if="!$v.userData.password.required"
                                :class="{
                                    'mensaje-error': $v.userData.password.$error,
                                    hidden: !$v.userData.password.$error,
                                }"
                                >Es requerido
                            </div>
                            <div :class="{ 'mensaje-error': $v.userData.password.$error }" v-if="!$v.userData.password.minLength">
                                Debe contener al menos
                                {{ $v.userData.password.$params.minLength.min }} letras.
                            </div>
                        </div>
                        <div class="my-8 mx-auto text-center">
                            <button type="submit" class="bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" :class="{'is_loading': isLoading}">
                                <font-awesome-icon :icon="['fas', 'spinner']" spin v-if="isLoading" /> <span v-if="!isLoading">Registarme a Mowglimiento</span>
                            </button>
                        </div>
                        <div class="mx-auto text-center">
                            <a @click="isLogin = true" class="cursor-pointer"> Tengo una cuenta y quiero ingresar</a>
                        </div>
                    </form>
                </div>
            </template>
          <!-- End register form -->
      </div>
  </section>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
    name: 'AuthView',
    data() {
        return {
            isLogin: true,
            isLoading: false,
            userData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        resetData() {
            this.userData.name = this.userData.email = this.userData.password = ''
        },

        redirect() {
            this.$router.push({name: 'Home'})
        },

        async doRegister() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('user/doRegister', {
                        name: this.userData.name,
                        email: this.userData.email,
                        password: this.userData.password
                    })
                    console.log('Account created')
                    this.resetData()
                    this.redirect()

                } catch (error) {
                    console.log(error.message)
                } finally {
                    this.isLoading = false
                }
            }
        },

        async doLogin() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('user/doLogin', {
                        email: this.userData.email,
                        password: this.userData.password
                    })
                    console.log('Logged in')
                    this.resetData()
                    this.redirect()

                } catch (error) {
                    console.log(error.message)
                } finally {
                    this.isLoading = false
                }
            }
        }
    },
    validations: {
        userData: {
            password: {
                required,
                minLength: minLength(6),
            },
            email: {
                email,
                required,
            }
        }
    },
}
</script>

<style>

</style>