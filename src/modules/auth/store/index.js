import Vue from 'vue'

export const state = Vue.observable({
    token: '',
    user: {}
})

export const mutations = {/* Guarda el token en el estado */
    setToken: (token) => (state.token = token),
    setUser: (user) => (state.user = user)
}