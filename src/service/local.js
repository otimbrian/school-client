// Setting the token.
export let userToken = null

const LocalStorage = {
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

export default LocalStorage