<template>
  <div class='login'>
    <div class='g-signin2' data-onsuccess='onSignIn' data-theme='dark'></div>

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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
