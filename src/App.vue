<template>
  <div id="app">
    <header>
      <h1>loglog</h1>
    </header>
    <router-view/>
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

h1 {
  margin-top: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  background: #87a9cc;
}

header h1 {
  font-family: 'Pacifico', cursive;
  color: #c09569;
  text-shadow:
   0 1px 0px #000,
   -1px 0 0px #000,
   -1px 2px 0px #000,
   -2px 1px 0px #000,
   -2px 3px 0px #000,
   -3px 2px 0px #000,
   -3px 4px 0px #000,
   -4px 3px 0px #000,
   -4px 5px 0px #000,
   -5px 4px 0px #000;
}
</style>
