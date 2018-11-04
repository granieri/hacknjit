<template>
  <div class="stream">
    <span v-for="poop in poops">
      <card :first="login.firstname" :last="login.lastname" :desc="poop.description" :date="poop.date" :type="poop.type"></card>
    </span>
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
  beforeMount () {
    let url = 'http://localhost:8081'
    this.$store.dispatch('set_user', login)

    axios.get(url+'/listpoop/'+login.id)
      .then((response) => {
        this.poops = response.data
        for(let i=0;i<this.poops.length;i++){
          let unix_time = this.poops[i].datetime
          let dates = new Date(unix_time * 1000)
          this.poops[i].date = dates.toString().slice(0,24)
        }
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
  width: 100vw;
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

@media screen and (min-width: 500px){
  .stream {
    flex-flow: row wrap; 
  }
}
</style>
