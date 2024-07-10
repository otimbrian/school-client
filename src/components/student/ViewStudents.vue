<template>
  <div class="student_view">
    <h1>View Students</h1>
    <hr />
    <br />
    <!-- <p>{{ student }}</p> -->
    <!-- <p>{{ $route.params }}</p> -->
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
  </div>

  <div>
    <input @click="editStudent" type="button" value="Edit Student" />
    <input @click="deleteStudent" type="button" value="Delete Student" />
  </div>
</template>

<script>
import router from '@/router'
import store from '@/store/store'
import { mapState } from 'vuex'

// const myStore = useStore()

export default {
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
      router.push('/edit_student')
    },

    deleteStudent: () => {
      //Delete student function goes here.
      console.log('....Deleting user ....')
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
</style>
