<template>
  <div class='login'>
    <div class='g-signin2' data-onsuccess='onSignIn' data-theme='dark'></div>
  </div>
</template>

<script>
export default {
  beforeMounted () {
    function signOut () {
      var auth2 = gapi.auth2.getAuthInstance()
      auth2.signOut().then(function () {
        console.log('User signed out.')
      })
      document.getElementById('signOut').style.visibility = 'collapse'
    }

    function onSignIn (googleUser) {
      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId()) // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())
      // The ID token you need to pass to your backend:
      var idToken = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + idToken)
      document.getElementById('signOut').style.visibility = 'visible'
      this.$router.push({name: 'Stream'})
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .login {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
