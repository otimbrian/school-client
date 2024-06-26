<template>
  <div>
    <h2>View User</h2>
  </div>
  <hr />
  <br />
  <div>
    <article><strong> User Name </strong> User Name</article>
    <article><strong> Email </strong> Email</article>
  </div>
  <div>
    <button @click="logOut" type="submit">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut: () => {
      //Todo .......All the logout details.
      console.log('Loggged out')
    }
  }
}
</script>
