<template>
  <div id="app">
    <header>
      <h1>loglog</h1>
    </header>
    <router-view/>
    <footer class="footer">
    </footer>
  </div>
</template>

<script>
export default {
  name: 'loglog'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  background: #87a9cc;
  border-bottom: 3px solid #4f6d8c;
  text-align: center;
  padding: 10px 0;
  width: 100%;
  position: fixed;
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
  position: fixed;
  bottom: 0;
}
</style>
