<template>
  <div class="box">
    <h2>Create Student</h2>

    <form @submit.prevent="createNewStudent">
      <div class="box-2">
        <div class="box-3">
          <label for="username">First Name:</label><br />
          <input type="text" id="username" v-model="firstName" size="30" maxlength="100" />
        </div>
        <div class="box-3">
          <label for="lastName">Last Name:</label><br />
          <input type="text" id="lastName" v-model="lastName" size="30" maxlength="100" />
        </div>
      </div>
      <div class="box-2">
        <div class="box-3">
          <label for="class">Class:</label><br />
          <input type="text" id="class" v-model="studentClass" size="30" maxlength="100" />
        </div>
        <div class="box-3">
          <label for="studentAge">Age:</label><br />
          <input type="number" id="age" v-model="studentAge" size="30" maxlength="100" />
        </div>
      </div>

      <button type="submit">Create Student</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import router from '@/router'
import store from '@/store/store'
import { mapActions } from 'vuex'

// import { createStudent } from '../../service/students'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      studentAge: '',
      studentClass: '',
      active: true,
      error: ''
    }
  },

  methods: {
    ...mapActions(['createStudent']),
    createNewStudent() {
      const studentPayload = {
        first_name: this.firstName,
        last_name: this.lastName,
        age: this.studentAge,
        class: this.studentClass,
        active: this.active
      }

      // Call the action to create Student.
      // this.createStudent(studentPayload)
      store.dispatch('createStudent', studentPayload)

      router.push('/students')
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
