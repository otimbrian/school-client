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
    },

    setStudent({ commit }, id) {
        commit('set_student', id)
    },

    async updateStudent({ commit }, student) {
        console.log('Updating to this ---->', student);
        const data = await studentsService.updateStudent(student)
        console.log('Response after update ---->', data)

        commit('update_student', student)
    }
}

const mutations = {
    initializeStudents: (state, students) => {
        state.all = students
    },

    set_student(state, id) {
        state.student = state.all.find(stu => Number(stu.id) === Number(id))
    },

    update_student(state, student) {
        state.all = state.all.map(
            stud => stud.id !== student.id ? stud : student
        )
    }
}

export default {
    state, getters, actions, mutations
}