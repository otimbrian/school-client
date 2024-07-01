<template>
  <div>
    <h2>All Students</h2>
    <div v-for="student in students" :key="student.id">
      <ul>
        <li><StudentItem :re_student="student" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
import StudentItem from './StudentItem.vue'
// import StudentItem from './StudentItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    StudentItem
  },

  computed: mapState({
    students: (state) => state.students.all
  }),
  created: () => {
    store.dispatch('getAllStudents')
  }
}
</script>

<style></style>
