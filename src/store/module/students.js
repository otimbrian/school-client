import studentsService from "@/service/students"

const state = () => ({
    all: [],
    student: {}
})

const getters = {
    getStudent: (state) => state.student
}

const actions = {
    async getAllStudents({ commit }) {
        const students = await studentsService.getAllStudents()
        console.log(students)
        commit('initializeStudents', students)

        console.log('....Done.....')
    },

    setStudent({ commit }, id) {
        console.log('setting id ----->', id)
        commit('set_student', id)
    }
}

const mutations = {
    initializeStudents: (state, students) => {
        state.all = students
    },

    set_student(state, id) {
        state.student = state.all.find(stu => Number(stu.id) === Number(id))
        console.log("Dones setting --->");
    }
}

export default {
    state, getters, actions, mutations
}