<template>
  <div class="box">
    <h2>Register</h2>
    <form action="" method="post">
      <div class="name">
        <section>
          <label for="name">Full Name</label>
          <input type="text" name="name" id="" placeholder="Full Name" />
        </section>

        <section>
          <label for="">Email</label>
          <input type="email" name="email" placeholder="Email" />
        </section>
      </div>
      <div class="genre">
        <section>
          <label for="password">Password</label><br />
          <input type="password" name="password" placeholder="Password" />
        </section>
      </div>
      <button type="submit">Register</button>
    </form>
    <div>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
  <div><a @click="goToLogin">Already have an Account?</a><br /></div>
</template>

<script>
import router from '@/router'

export default {
  methods: {
    goToLogin() {
      router.push('/login')
    }
  }
}
</script>
<style>
.genre {
  padding-bottom: 10px;
}
section label {
  font-weight: bold;
}
.box {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.box form input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.box form button {
  padding: 10px;
  width: 150px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* padding-top: 25px; */
}
.music section {
  padding: 10px;
  width: 100%;
}

form .name {
  display: flex;
}
</style>
