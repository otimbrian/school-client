<template>
  <div>
    <h1>Create Student</h1>

    <form @submit.prevent="createStudent">
      <div>
        <label for="username">First Name:</label>
        <input type="text" id="username" v-model="firstName" size="30" maxlength="100" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" size="30" maxlength="100" />
      </div>
      <div>
        <label for="username">Class:</label>
        <input type="text" id="username" v-model="studentClass" size="30" maxlength="100" />
      </div>
      <div>
        <label for="password">Age:</label>
        <input type="number" id="age" v-model="studentAge" size="30" maxlength="100" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    firstName: '',
    lastName: '',
    age: '',
    studentClass: ''
  },

  methods: {
    async createStudent (){
      const studentData = {
        firstName: this.firstName,
      }
    }
  }
}
</script>
