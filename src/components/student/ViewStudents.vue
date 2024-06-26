<template>
  <div class="student_view">
    <h1>View Students</h1>
    <hr />
    <br />
    <table>
      <tr>
        <td><strong>First Name:</strong></td>
        <td>First Name</td>
      </tr>
      <tr>
        <td><strong>Last Name:</strong></td>
        <td>Last Name</td>
      </tr>

      <tr>
        <td>Class:</td>
        <td>Class</td>
      </tr>
      <tr>
        <td>Age:</td>
        <td>Age</td>
      </tr>
    </table>
  </div>

  <div>
    <input @click="editStudent" type="button" value="Edit Student" />
  </div>
</template>

<script>
import router from '@/router'

export default {
  methods: {
    editStudent: () => {
      router.push('/updateStudent')
    }
  }
}
</script>

<style>
.student_view {
  text-align: center;
}

.student_view table {
  width: 300px;
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
