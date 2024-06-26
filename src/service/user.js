// const { default: axios } = require("axios")
import axios from "axios"
import { baseUrl } from "./local"

const baseUserUrl = 'user'

export const userLogin = async (userData) => {
    const response = await axios.post(`${baseUrl}/${baseUserUrl}`, userData)
    return response.data
}

// export default {
//     userLogin
// }