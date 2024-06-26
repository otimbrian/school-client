<template>
  <div>
    <h1>Update Student</h1>
  </div>

  <form @submit.prevent="updateOneStudent">
    <div>
      <label for="username">First Name:</label>
      <input type="text" id="username" v-model="firstName" size="30" maxlength="100" />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName" size="30" maxlength="100" />
    </div>
    <div>
      <label for="class">Class:</label>
      <input type="text" id="class" v-model="studentClass" size="30" maxlength="100" />
    </div>
    <div>
      <label for="studentAge">Age:</label>
      <input type="number" id="age" v-model="studentAge" size="30" maxlength="100" />
    </div>
    <button type="submit">Create Student</button>
  </form>
</template>
<script>
import { updateStudent } from '../../service/students'

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
    async updateOneStudent() {
      const studentData = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        class: this.studentClass
      }

      const response = await updateStudent(studentData)
      console.log(response)
    }
  }
}
</script>
