import studentsService from "@/service/students"

const state = () => ({
    all: [],
    student: {}
})

const getters = {
    getStudent: (state) => state.student
}

const actions = {
    // Get all students from the database.
    // Commit all  of then into the store.
    async getAllStudents({ commit }) {
        const students = await studentsService.getAllStudents()
        console.log(students)
        commit('initializeStudents', students)
    },

    setStudent({ commit }, id) {
        commit('set_student', id)
    },

    // Update student in the database.
    // Send an action to update the store.
    async updateStudent({ commit }, student) {
        await studentsService.updateStudent(student)
        commit('update_student', student)
    },

    async deleteStudent({ commit }, student) {
        const data = await studentsService.deleteStudent(student.id)
        console.log("Student Deleted --->", data);
        commit('delete_student', student)
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
    },

    delete_student(state, student) {
        state.all = state.all.filter(
            stud => stud.id !== student.id
        )
    }
}

export default {
    state, getters, actions, mutations
}