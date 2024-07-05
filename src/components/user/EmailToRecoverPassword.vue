<script></script>
<template>
  <div class="login">
    <h3>Enter Recovery Email</h3>
    <form>
      <label for="email">Email</label><br />
      <input type="email" placeholder="Enter email" required name="email" />
      <br />
      <br />
      <button type="submit">Enter</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<style></style>
