<template>
  <div class="login">
    <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
