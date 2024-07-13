<template>
  <div class="box">
    <h2 v-if="editingStudent">Update Students</h2>
    <h2 v-else>View Student</h2>

    <form @submit.prevent="updateOneStudent">
      <div class="box-2">
        <div class="box-3">
          <label for="username">First Name:</label><br />
          <input
            v-if="editingStudent"
            type="text"
            id="username"
            v-model="firstName"
            size="30"
            maxlength="100"
          />
          <h3 v-else>
            <strong>{{ student.first_name }}</strong>
          </h3>
        </div>
        <div class="box-3">
          <label for="lastName">Last Name:</label><br />
          <input
            v-if="editingStudent"
            type="text"
            id="lastName"
            v-model="lastName"
            size="30"
            maxlength="100"
          />
          <h3 v-else>
            <strong>{{ student.last_name }}</strong>
          </h3>
        </div>
      </div>
      <div class="box-2">
        <div class="box-3">
          <label for="class">Class:</label><br />
          <input
            v-if="editingStudent"
            type="text"
            id="class"
            v-model="studentClass"
            size="30"
            maxlength="100"
          />
          <h3 v-else>
            <strong>{{ student.class }}</strong>
          </h3>
        </div>
        <div class="box-3">
          <label for="studentAge">Age:</label><br />
          <input
            v-if="editingStudent"
            type="number"
            id="age"
            v-model="studentAge"
            size="30"
            maxlength="100"
          />
          <h3 v-else>
            <strong>{{ student.age }}</strong>
          </h3>
        </div>
      </div>
      <div class="box-3" v-if="editingStudent">
        <p>
          <label for="status">Active Students:</label>
          <br />
          <input type="radio" name="status" value="active" checked="checked" /> Active
          <input type="radio" name="status" value="inactive" />Inactive
        </p>
      </div>

      <!-- <button type="submit">Update Student</button> -->
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
  <!-- <div class="student_view">
    <h1>View Students</h1>
    <hr />
    <br />
    <table>
      <tr>
        <td><strong>First Name:</strong></td>
        <td>{{ student.first_name }}</td>
      </tr>

      <tr>
        <td><strong>Last Name:</strong></td>
        <td>{{ student.last_name }}</td>
      </tr>

      <tr>
        <td>Class:</td>
        <td>{{ student.class }}</td>
      </tr>

      <tr>
        <td>Age:</td>
        <td>{{ student.age }}</td>
      </tr>
    </table>
  </div> -->

  <div>
    <button @click="updatingStudentEditing" id="edit">
      {{ editingStudent ? 'Update Student' : 'Edit' }}
    </button>
    <button @click="deleteStudent" id="delete" type="button">Delete Student</button>
  </div>
</template>

<script>
import router from '@/router'
import store from '@/store/store'
import { mapState } from 'vuex'

// const myStore = useStore()

export default {
  data() {
    return {
      editingStudent: false,
      error: ''
    }
  },
  computed: mapState({
    student(state) {
      return state.students.student
    }
  }),
  async created() {
    await store.dispatch('setStudent', this.$route.params.id)
  },
  methods: {
    editStudent: () => {
      console.log('changing to editing')
      router.push('/edit_student')
    },

    deleteStudent: () => {
      //Delete student function goes here.
      console.log('....Deleting user ....')
    },

    updatingStudentEditing() {
      console.log('Value of editing --->', this.editingStudent)
      this.editingStudent = this.editingStudent ? false : true
    }
  }
}
</script>

<style>
.student_view {
  text-align: center;
}

.student_view table {
  width: 400px;
  margin: 0 auto;
}
.item {
  display: flex;
  /* text-align: center; */
  position: relative;
  /* align-content: center; */
  /* background-color: black */
}

article {
  padding-left: 40px;
  align-content: center;
}

/* .......................................... */
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
  padding-top: 15px;
}
.box-2 {
  display: flex;
}

.box-2 .box-3 input,
button {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 265px;
  padding-top: 15px;
  /* padding-bottom: 15px; */
}

.box-2 .box-3 h3 {
  padding: 10px;
  /* font-size: 16px; */
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

input[type='button'] {
  padding: 10px;
  padding-left: 15px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button#edit {
  background-color: grey;
}

button#delete {
  background-color: red;
}
.box-3 label,
h3 {
  font-weight: bold;
  padding-bottom: 10px;
}
</style>
