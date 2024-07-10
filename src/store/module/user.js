import router from "@/router"
import LocalStorage from "@/service/local"
import userService from "@/service/user"

const state = () => ({
    authUser: null
})

const getters = {
    getAuthenticatedUser(state) {
        return state.authUser
            ? state.authUser
            : router.push('/login')

    }
}

const actions = {
    async setAuthenticatedUser({ commit }) {
        const user = await userService.getUser()
        LocalStorage.addToLocalStorage(LocalStorage.name, user)
        commit('initialize_user', user)
    },

    async removeAuthenticatedUser({ commit }) {
        await userService.logoutRegisteredUser()

        LocalStorage.removeFromLocalStorage(LocalStorage.name)
        commit('logout_user')
    }
}

const mutations = {
    initialize_user(state, user) {
        state.authUser = user
    },

    logout_user(state) {
        state.authUser = null
    }
}

export default {
    getters, actions, mutations, state
}