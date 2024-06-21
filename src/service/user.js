// const { default: axios } = require("axios")
import axios from "axios"

const baseUrl = ''

const userLogin = async (userData) => {
    const response = await axios.post(baseUrl, userData)
    return response.data
}

export default userLogin