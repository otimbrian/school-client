import axiosInstance from "./axios"
// import { baseUrl } from "./local"
const baseStudentUrl = `/api/students`

const createStudent = async (studentData) => {
    const response = await axiosInstance.post(baseStudentUrl, studentData)
    return response.data
}

const updateStudent = async (studentData) => {
    const response = await axiosInstance.put(`${baseStudentUrl}/${studentData.id}`, studentData)
    return response.data
}

const getAllStudents = async () => {
    const response = await axiosInstance.get(baseStudentUrl)
    return response.data
}

const studentService = {
    createStudent, updateStudent, getAllStudents
}

export default studentService