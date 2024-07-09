<template>
  <div class="box">
    <h2>Register</h2>
    <form @submit.prevent="createUser">
      <div class="name">
        <section>
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            v-model="name"
            id="name"
            autocomplete="on"
            placeholder="Full Name"
          />
        </section>

        <section>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            id="email"
            autocomplete="on"
            placeholder="Email"
          />
        </section>
      </div>
      <div class="pass">
        <section>
          <label for="password">Password</label><br />
          <input
            type="password"
            name="password"
            v-model="password"
            id="password"
            autocomplete="on"
            placeholder="Password"
          />
        </section>
      </div>
      <div class="pass">
        <section>
          <label for="confirmPassword">Confirm Password</label><br />
          <input
            type="password"
            name="password"
            v-model="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </section>
      </div>
      <button type="submit">Register</button>
    </form>
    <div>
      <p v-if="registrationError" class="error">{{ registrationError }}</p>
    </div>
  </div>
  <div><a @click="goToLogin">Already have an Account?</a><br /></div>
</template>

<script>
import userService from '@/service/user'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      registrationError: ''
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    },

    async createUser() {
      // Check if the password enetered and the confirmation
      // are the same.
      if (this.password !== this.confirmPassword) {
        this.registrationError = 'The Passwords Dont Match.'

        // Show the error for 5 seconds.
        // Set the passwords to an empty string
        setTimeout(() => {
          this.confirmPassword = ''
          this.registrationError = ''
        }, 5000)
      } else {
        // Create a payload with user requirements.
        const registrationPayload = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword
        }

        try {
          // Make a post request to register the user.
          const data = await userService.resgisterNewUser(registrationPayload)
          console.log('Registration response ----->', data)
          this.$router.push('/')
        } catch (err) {
          if (err.response) {
            this.registrationError = err.response.data.message
            setTimeout(() => {
              this.registrationError = ''
            }, 5000)
          } else if (err.request) {
            this.registrationError = 'Network Issue: Could not connect to the server.'
            setTimeout(() => {
              this.registrationError = ''
            }, 5000)
          } else {
            this.error = 'An unexpected error occurred.'
            setTimeout(() => {
              this.registrationError = ''
            }, 5000)
          }
        }
      }
    }
  }
}
</script>
<style>
.pass {
  padding-bottom: 10px;
}
section label {
  font-weight: bold;
}
.box {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.box form input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.box form button {
  padding: 10px;
  width: 150px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* padding-top: 25px; */
}
.music section {
  padding: 10px;
  width: 100%;
}

form .name {
  display: flex;
}
</style>
