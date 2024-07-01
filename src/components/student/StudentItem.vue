<template>
  <div class="single_student">
    <!-- <h4>students</h4> -->
    {{ re_student.first_name }}
  </div>
</template>

<script>
export default {
  props: {
    re_student: {}
  }
}
</script>

<style>
.single_student {
  /* background-color: green; */
}
</style>
