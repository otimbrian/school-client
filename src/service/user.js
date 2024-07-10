import axiosInstance from "./axios"
export const baseAuthUrl = 'http://localhost:8000'


const getCSRFToken = async () => {
    await axiosInstance.get(`/sanctum/csrf-cookie`)
}
export const userLogin = async (userData) => {

    await getCSRFToken();
    const response = await axiosInstance.post('/login', userData)
    return response

}

// Get the user
export const getUser = async () => {
    const response = await axiosInstance.get('/api/user')
    return response.data
}


// Register new user
export const resgisterNewUser = async (userParams) => {
    await getCSRFToken()
    const response = await axiosInstance.post('/register', userParams)
    return response
}

export const logoutRegisteredUser = async () => {
    await axiosInstance.post('/logout')
}

const userService = {
    userLogin, getUser, resgisterNewUser, logoutRegisteredUser
}
export default userService