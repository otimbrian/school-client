<script setup>
// import { onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
// import userService from '@/service/user'
// import { mapGetters } from 'vuex'

// export default {
//   components: [TheWelcome]
// }
// On mount, call the /api/user to retrieve the user who is signed in.
// onMounted(async () => {
//   const data = await userService.getUser()
//   console.log(data)
// })
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
