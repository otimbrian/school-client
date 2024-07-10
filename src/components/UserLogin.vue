<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          autocomplete="on"
          size="30"
          maxlength="100"
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          size="30"
          maxlength="100"
          autocomplete="on"
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
  <div class="problems">
    <a @click="changePassword">Forgot your password?</a><br />
    <a @click="goToRegister">Don't have an account? SignUp.</a>
  </div>
</template>
<script>
import router from '@/router'
import userService from '@/service/user'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(['setAuthenticatedUser']),
    async login() {
      try {
        const payload = {
          email: this.username,
          password: this.password
        }

        console.log('Data Being sent ---->', payload)
        await userService.userLogin(payload)
        await this.$store.dispatch('setAuthenticatedUser')

        // console.log('Login response ----->', response)
        // console.log('Loging token ----->', response.data)
        this.$router.push('/')
        
      } catch (error) {
        if (error.response) {
          // console.log('Error in logging in ----->', error.response.data)
          this.error = error.response.data.message
        } else if (error.request) {
          // If there's no connection to the server
          console.log(error.request)
          this.error = 'Could not connect to the server.'
        } else {
          console.log('Error', error.message)
          this.error = 'An unexpected error occurred.'
        }
      }
    },

    goToRegister() {
      router.push('/register')
    },

    changePassword() {
      router.push('/recover_password')
    }
  }
}
</script>
<!-- 
<script>
// import { userLogin } from '@/service/user'
import { LocalStorage } from '@/service/local'
import { baseAuthUrl } from '@/service/user'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      // function getCookie(name) {
      //   const value = document.cookie
      //   const parts = value.split(name)
      //   if (parts.length === 2) {
      //     return parts.pop().split(';').shift()
      //   }
      // }
      const payload = {
        email: this.username,
        password: this.password
      }

      try {
        console.log('Data Being sent ', payload) -->
<!-- await axios.get(`${baseAuthUrl}/sanctum/csrf-cookie`) -->
<!-- await axios.post(`${baseAuthUrl}/login`, payload) -->

<!-- const response = await axios.get(`${baseAuthUrl}/api/user`) -->

<!-- console.log('Loging token -----', response.data)
        // localStorage.setItem('token', response.data) -->
<!-- LocalStorage.addToLocalStorage('user', response.data) -->
<!-- // if (response.data) { -->
<!-- this.$router.push('/') -->
<!-- // } -->

<!-- // const loggedUser -->
<!-- } catch (error) { -->
<!-- if (error.response) { -->
<!-- console.log('Error in logging in', error.response.data)
          this.error = error.response.data.message -->
<!-- } else if (error.request) { -->
<!-- console.log(error.request) -->
<!-- this.error = 'Could not connect to the server.' -->
<!-- } else { -->
<!-- console.log('Error', error.message) -->
<!-- this.error = 'An unexpected error occurred.' -->
<!-- } -->
<!-- } -->
<!-- }, -->

<!-- goToRegister() { -->
<!-- this.$router.push('/register') -->
<!-- }, -->

<!-- changePassword() { -->
<!-- this.$router.push('/recover_password') -->
<!-- } -->
<!-- } -->
<!-- } -->
<!-- </script> -->

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login form {
  display: flex;
  flex-direction: column;
}

.login form div {
  margin-bottom: 10px;
}

.login form label {
  font-weight: bold;
}

.login form input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login form button {
  padding: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login form button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}

.problems {
  justify-content: center;
}

.problems:hover {
  color: aqua;
}
</style>
