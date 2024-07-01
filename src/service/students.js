import axios from "axios"
import { baseUrl } from "./local"
const baseStudentUrl = `${baseUrl}/students`

export const createStudent = async (studentData) => {
    const response = await axios.post(baseStudentUrl, studentData)
    return response.data
}

export const updateStudent = async (studentId, studentData) => {
    const response = await axios.put(baseStudentUrl, studentData)
    return response.data
}

const getAllStudents = async () => {
    const response = await axios.get(baseStudentUrl)
    return response.data
}

const studentService = {
    createStudent, updateStudent, getAllStudents
}

export default studentService