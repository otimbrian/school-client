<template>
  <div class="box">
    <div>
      <h2>View User</h2>
    </div>
    <br />
    <div v-if="user !== null" class="personal">
      <article><strong> User Name </strong>{{ user.name }}</article>
      <article><strong> Email </strong>{{ user.email }}</article>
    </div>
    <div>
      <button @click="logOut" type="submit">Logout</button>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import store from '@/store/store'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  methods: {
    ...mapGetters('users', ['getAuthenticatedUser']),
    ...mapActions('user', ['removeAuthenticatedUser']),
    logOut: async () => {
      //Todo .......All the logout details.
      await store.dispatch('removeAuthenticatedUser')
      router.push('/login')
    }
  },
  computed: {
    ...mapState({
      user(state) {
        return state.user.authUser
      }
    })
  }
}
</script>

<style>
.box {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.personal {
  display: flex;
  /* background-color: #007bff; */
  /* align-items: center; */
  margin: 10 auto;
}

article {
  padding: 10px;
  width: 290px;
  margin: 10 auto;
}

article strong {
  font-weight: bold;
  text-align: center;
  font-size: 16px;
}
</style>
