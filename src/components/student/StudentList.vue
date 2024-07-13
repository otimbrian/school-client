<template>
  <div>
    <button @click="navigateToCreate">Create Student</button>
    <h2>All Students</h2>
    <hr />
    <div class=".list-student_upper">
      <div v-for="student in students" :key="student.id" class="list_student">
        <!-- <ul> -->
        <!-- <li class="list_student"> -->
        <StudentItem :re_student="student" />
        <!-- </li> -->
        <!-- </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
import StudentItem from './StudentItem.vue'
// import StudentItem from './StudentItem.vue'
import { mapState } from 'vuex'
import router from '@/router'

export default {
  components: {
    StudentItem
  },

  methods: {
    navigateToCreate() {
      router.push('/create-student')
    }
  },

  computed: mapState({
    students: (state) => state.students.all
  }),
  created: () => {
    store.dispatch('getAllStudents')
  }
}
</script>

<style>
.list_student_upper {
  display: flex;
  /* justify-content: flex-start; */
}
hr {
  padding: auto;
}
</style>
