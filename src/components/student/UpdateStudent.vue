<template>
  <div class="box">
    <h2>Update Student</h2>

    <form @submit.prevent="updateOneStudent">
      <div class="box-2">
        <div class="box-3">
          <h3><strong>First Name:</strong></h3>
          <label for="username">First Name:</label><br />
          <input type="text" id="username" v-model="firstName" size="30" maxlength="100" />
        </div>
        <div class="box-3">
          <h3><strong>First Name:</strong></h3>
          <label for="lastName">Last Name:</label><br />
          <input type="text" id="lastName" v-model="lastName" size="30" maxlength="100" />
        </div>
      </div>
      <div class="box-2">
        <div class="box-3">
          <h3><strong>First Name:</strong></h3>
          <label for="class">Class:</label><br />
          <input type="text" id="class" v-model="studentClass" size="30" maxlength="100" />
        </div>
        <div class="box-3">
          <h3><strong>First Name:</strong></h3>
          <label for="studentAge">Age:</label><br />
          <input type="number" id="age" v-model="studentAge" size="30" maxlength="100" />
        </div>
      </div>
      <div class="box-3">
        <p>
          <label for="status">Active Students:</label>
          <br />
          <input type="radio" name="status" value="active" checked="checked" /> Active
          <input type="radio" name="status" value="inactive" />Inactive
        </p>
      </div>

      <button type="submit">Update Student</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<script>
import studentService from '../../service/students'

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

      const response = await studentService.updateStudent(studentData)
      console.log(response)
    }
  }
}
</script>

<style>
.box {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.box-3 {
  padding-bottom: 15px;
  padding-left: 10px;
}
.box-2 {
  display: flex;
}

.box-2 .box-3 input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 265px;
}

form button {
  padding: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.box-3 label {
  font-weight: bold;
  padding-bottom: 10px;
}
</style>
