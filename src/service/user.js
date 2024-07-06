// const { default: axios } = require("axios")
import { baseUrl } from "./local"
import axios from "axios"
const baseAuthUrl = 'http://127.0.0.1:8000'


export const userLogin = async (userData) => {

    await axios.get(`http://localhost:8000/sanctum/csrf-cookie`, {
        withCredentials: true,
        withXSRFToken: true
    })
    const response = await axios.post(`${baseAuthUrl}/login`, userData, {
        withCredentials: true,
        withXSRFToken: true
    })

    return response.data
}

// Get the user
export const getUser = async () => {
    const response = await axios.get(`${baseUrl}/user`)
    return response.data
}


// Register new user
export const resgisterNewUser = async (userParams) => {
    const response = await axios.post(`${baseAuthUrl}/register`, userParams)

    return response.data
}
