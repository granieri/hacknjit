<template>
  <div class="stream">
    <card></card>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Stream',
  data () {
    return {
      poops: [],
      login: login
    }
  },
  mounted () {
    let url = 'http://localhost:8081'
    this.$store.dispatch('set_user', login)
    console.log(this.$store.state.user)
    axios.get(url+'/listpoop/'+login.id)
      .then((response) => {
        console.log(response);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stream {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 75vh;
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
