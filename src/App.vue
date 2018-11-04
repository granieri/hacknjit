<template>
  <div id="app">
    <header>

      <h1>loglog</h1>
      <router-link id="signOut" to="/login" onclick="signOut()">Sign out</router-link>
    </header>
    <router-view id="MainRV" />
    <footer class="footer">
      <nav>
        <ul class="nav">
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
    </footer>
  </div>
</template>

<script>
export default {
  name: 'loglog',
  mounted () {
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  background: #f2f2f2;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

a {
  color: #4f6d8c;
}

header {
  background: #87a9cc;
  border-bottom: 3px solid #4f6d8c;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

header h1 {
  font-family: 'Pacifico', cursive;
  color: #7a5c3d;
  margin-top: 0;
  text-shadow:
   0 1px 0px #fff,
   -1px 0 0px #fff,
   -1px 2px 0px #fff,
   -2px 1px 0px #fff,
   -2px 3px 0px #fff,
   -3px 2px 0px #fff,
   -3px 4px 0px #fff,
   -4px 3px 0px #fff,
   -4px 5px 0px #fff,
   -5px 4px 0px #fff;
}

.footer {
  background: #87a9cc;
  border-top: 3px solid #4f6d8c;
  height: 10vh;
  width: 100%;
  bottom: 0;
}

nav .nav {
  list-style-type: none;
  margin:0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
}

nav .nav li {
  display:block;
  background: #111111;
  padding: 0px 40px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2em;
  height: 10vh;
  color: #7a5c3d;
  text-align: center;
  width: 33%;
}

nav .nav li i {
  font-size: 1.5em;
  color: #fff;
  width: auto;
}

nav .nav li span {
  width: auto;
}

.nav li:hover i{
    color: #222;
    transition: color 0.1s;
}

#signOut {
  text-decoration: none;
  visibility: collapse;
  color: #7a5c3d;
  background: #cccccc;
  padding: 5px;
}
#signOut:hover {
  text-decoration: underline;
  background: #eeeecc;
}

@media only screen and (min-width: 500px){
  header {
    order: 1;
    border: none !important;
    height: 20vh;
  }
  header h1 {
    font-size: 4em;
    margin-bottom: 0;
  }
  footer {
    order: 2;
    border-top: 0 solid #4f6d8c !important;
    border-bottom: 3px solid #4f6d8c;
    height: 8vh !important;
  }
  nav {
    width: 40vw;
    margin-right: 10vw;
    float: right;
  }

  nav .nav li {
    height: 8vh !important;
    font-size: .9em !important;
    padding: 0;
    max-width: 65px;
    margin: 0 20px;
    background: none;
  }

  #MainRV {
    order: 3;
  }
}
</style>
