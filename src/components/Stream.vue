<template>
  <div class="stream">
  <p>hi</p>
  <p>there</p>
  <router-link to="/Login">Login</router-link>
 </div>
</template>

<script>
export default {
  name: 'Stream',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stream {
  margin: 15vh 0 10vh;
  overflow-y: auto;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
