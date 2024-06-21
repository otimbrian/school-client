<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" size="30" maxlength="100" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" size="30" maxlength="100" />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import userLogin from '@/service/user'

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
      try {
        // const response = await axios.post('https://your-api-endpoint.com/login', {
        //   username: this.username,
        //   password: this.password
        // })
        const data = userLogin({ username: this.username, password: this.password })

        console.log(data)
        localStorage.setItem('token', data)
        
      } catch (error) {
        if (error.response) {

          console.log(error.response.data)
          this.error = error.response.data.message
        } else if (error.request) {
          
          console.log(error.request)
          this.error = 'Could not connect to the server.'
        } else {
          
          console.log('Error', error.message)
          this.error = 'An unexpected error occurred.'
        }
      }
    }
  }
}
</script>

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
</style>

<script></script>
<style></style>
