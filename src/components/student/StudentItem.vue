<template>
  <!-- <div > -->
  <div class="single_student">
    <!-- <h4>students</h4> -->
    {{ re_student.first_name }}
  </div>
  <div>
    <input @click="viewStudent" type="button" value="View Student" />
  </div>
  <!-- </div> -->
</template>

<script>
import router from '@/router'

export default {
  props: {
    re_student: {}
  },

  methods: {
    viewStudent: () => {
      router.push('/view_student')
    }
  }
}
</script>

<style>
.list_student {
  width: 250px;
}

.single_student {
  /* background-color: green; */
}
</style>
