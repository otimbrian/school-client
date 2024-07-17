<template>
  <div class="single_student">{{ re_student.first_name }} {{ re_student.last_name }}</div>
  <div>
    <input @click="viewStudent(re_student.id)" class="btn-lg" type="button" value="View Student" />
  </div>
</template>

<script>
import router from '@/router'

export default {
  props: {
    re_student: {}
  },

  methods: {
    viewStudent: (id) => {
      router.push(`/students/${id}`)
    }
  }
}
</script>

<style>
.list_student {
  width: 250px;
}
.sigle_student {
  align-items: center;
}

/* .single_student { */
/* background-color: green; */
/* } */
</style>
