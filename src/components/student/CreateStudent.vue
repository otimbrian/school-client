<template>
  <div>
    <h1>Create Student</h1>

    <form @submit.prevent="createOneStudent">
      <div>
        <label for="username">First Name:</label>
        <input type="text" id="username" v-model="firstName" size="30" maxlength="100" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" size="30" maxlength="100" />
      </div>
      <!-- <br /> -->
      <div>
        <label for="class">Class:</label>
        <input type="text" id="class" v-model="studentClass" size="30" maxlength="100" />
      </div>
      <div>
        <label for="studentAge">Age:</label>
        <input type="number" id="age" v-model="studentAge" size="30" maxlength="100" />
      </div>
      <!-- <br /> -->
      <button type="submit">Create Student</button>
    </form>
  </div>
</template>

<script>
import { createStudent } from '../../service/students'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      age: '',
      studentClass: ''
    }
  },

  methods: {
    async createOneStudent() {
      try {
        const studentData = {
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
          studentClass: this.studentClass
        }

        console.log('Student Data ----->', studentData)

        const response = createStudent(studentData)
        console.log(response)
        
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style>
form {
  display: grid;
}
</style>
