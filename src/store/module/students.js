import studentsService from "@/service/students"

const state = () => ({
    all: [],

})

const getters = {}

const actions = {
    async getAllStudents({ commit }) {
        const students = await studentsService.getAllStudents()
        console.log(students)
        commit('initializeStudents', students)

        console.log('....Done.....')
    }
}

const mutations = {
    initializeStudents: (state, students) => {
        state.all = students
    }
}

export default {
    state, getters, actions, mutations
}