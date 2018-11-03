<template>
  <div class="login">
    <form id="login" class="loginForm">
      <label>
        User ID:
      </label>
      <input type="text" id="username"/>
      <label>
        Password:
      </label>
      <input type="password" id="password"/>
      <input type="submit" id="submit"/>
    </form>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    margin: auto;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .loginForm {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
</style>
