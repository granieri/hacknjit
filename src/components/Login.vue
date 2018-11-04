<template>
  <div class='login'>
    <span id="words">
      <p>Welcome to LogLog, you're personal poop tracker!</p>
      <h2>Please login using your google account.</h2>
    </span>
    <div class='g-signin2' data-onsuccess='onSignIn' data-theme='dark'></div>
    <span id="MiddleButtons">
      <br />
      <nav>
        <ul class="nav2">
          <router-link to="/new" tag="li">
            <i class="fa fa-plus"></i>
            <span>new</span>
          </router-link>
          <router-link to="/stream" tag="li">
            <i class="fa fa-user"></i>
            <span>me</span>
          </router-link>
          <router-link to="/" tag="li">
            <i class="fa fa-line-chart"></i>
            <span>insights</span>
          </router-link>
        </ul>
      </nav>
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
  nav {
    margin: auto;
  }
  nav .nav2{
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 0px;
  }
  nav .nav2 li{
    text-decoration: none;
    margin: 0px;
    background: #87a9cc;
    display:block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;

    height:40px;
    width:60px;
    padding: 60px 20px 0px 20px;

    margin: 2px;
    border-color: #e2e2e2;
    border-style:solid;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 5px;
    border-right: 5px;


  }
  nav .nav2 span{
    height:40px;
    width:60px;
    padding: 20px 20px 40px 20px;
    color: black;
  }
  nav .nav2 li:hover{
    background: #8798cc;
    transition: background 0.2s;
    border-top: 5px;
    border-left: 5px;
    border-bottom: 0px;
    border-right: 0px;

  }
</style>
