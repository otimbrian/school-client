import axios from "axios"
const baseStudentUrl = 'student'

export const createStudent = async (studentData) => {
    const response = await axios.post(baseStudentUrl, studentData)
    return response.data
}

export const updateStudent = async (studentId, studentData) => {
    const response = await axios.put(baseStudentUrl, studentData)
    return response
}

// export default {
//     createStudent, updateStudent
// }
