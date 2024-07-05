// const { default: axios } = require("axios")
// import { baseUrl } from "./local"
import axios from "axios"
const baseLoginUrl = 'http://127.0.0.1:8000/login'

export const userLogin = async (userData) => {

    await axios.get(`http://localhost:8000/sanctum/csrf-cookie`, {
        withCredentials: true,
        withXSRFToken: true
    })
    const response = await axios.post(baseLoginUrl, userData, {
        withCredentials: true,
        withXSRFToken: true
    })

    return response.data
}

