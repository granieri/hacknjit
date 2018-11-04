<template>
  <div class='login'>
    <span id="words">
      <p>Welcome to LogLog, your personal poop tracker!</p>
      <h2>Please login using your google account.</h2>
    </span>
    <div class='g-signin2' data-onsuccess='onSignIn' data-theme='dark'></div>
    <span id="MiddleButtons">
      <br />
      <img class="poop" src="https://cdn1.vox-cdn.com/uploads/chorus_asset/file/7169531/Poop_Emoji.png"/>
    </span>
  </div>
</template>

<script>
export default {
  mounted () {
    if (login.success) {
      this.$store.dispatch('log_in')
    }
    else {
      this.$store.dispatch('log_out')
      console.log('state ' + this.$store.get_logged_in)
    }
  }
}
</script>

<style scoped>
  .login {
    margin: auto;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: auto;
  }
  .g-signin2 {
    margin: auto;
    justify-content: center;
  }
  #MiddleButtons{
    margin: auto;
    visibility: collapse;


  }
  .poop{
    height: 100px;
  }

</style>
