<script setup>
// import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

window.csrf_token = '{{ csrf_token() }}'
// import studentsService from './service/students'
// import store from './store/store'
// import { useStore } from 'vuex'
// // import HelloWorld from './components/HelloWorld.vue'
// // Create reactive variables

// const loading = ref(true)
// const error = ref(null)
// // const data = ref(null)

// const fetchAllStudents = async () => {
//   try {
//     const students = await studentsService.getAllStudents()
//     console.log(students)
//     store.dispatch('initializeStudents', students)
//   } catch (err) {
//     // console.log('Error ------> ', err)
//     error.value = 'Failed to load data: ' + err.message
//   } finally {
//     loading.value = false
//   }
// }

// onMounted(fetchAllStudents)
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
        <RouterLink to="/students">Students</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/me">About-Me</RouterLink>
      </nav>
    </div>
    <hr />
  </header>

  <div class="app_injection">
    <!-- <p v-if="loading">Loading...</p> -->
    <!-- <p v-else-if="error">{{ error }}</p> -->
    <RouterView />
  </div>
  <div class="footer">
    <hr />
    <p>
      &copy; Copyright 2024 <br />
      BRIAN OTIM<br />
      Student Management
    </p>
  </div>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100px;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */
.footer {
  text-align: center;
  width: 720px;
  margin: 20px auto 20px auto;
  font-weight: normal;
  /* height: 16px; */

  /* background-color: rgb(79, 99, 99); */
}

.app_injection {
  padding-top: 40px;
}
nav {
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) { */
/* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

/* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

/* nav { */
/* text-align: left;
    margin-left: -1rem; */
/* font-size: 1rem;
    text-align: center;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
/* } */
</style>
