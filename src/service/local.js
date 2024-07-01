// Base url to the server.
export const baseUrl = 'http://127.0.0.1:8000/api'

// Setting the token.
export let userToken = null

const setUserTokenString = newUserToken => {
    userToken = `Bearer ${newUserToken}`
}

// Sets the tokeb in the header and returns it as
// a header object.
export const getHeader = token => {
    const data = {
        headers: { Authorization: token }
    }

    return data
}

export const LocalStorage = {
    name: 'User_Token',

    addToLocalStorage: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value))
    },

    removeFromLocalStorage: name => {
        window !== undefined
            ? localStorage.removeItem(name)
            : null
    },

    getFromLocalStorage: name => window !== undefined ? localStorage.getItem(name) : null

}

export default setUserTokenString