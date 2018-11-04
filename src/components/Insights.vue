<template>
  <div class="stream">
    <div id="chart_div">
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import {GoogleCharts} from 'google-charts';

export default {
  data() {
    return {
      poops_by_day: {
        'sun': 1,
        'mon': 2,
        'tues': 4,
        'wed': 5,
        'thur': 3,
        'fri': 0,
        'sat': 0
      }
    }
  },
  beforeMount () {
    let url = 'http://localhost:8081'
    this.$store.dispatch('set_user', login)

    axios.get(url+'/getinsight/'+login.id)
      .then((response) => {
        let res = response.data
        console.log(response.data)
        for(let i=0;i<res.length;i++){
          if(res[i].dayoftheweek == 1){
            this.poops_by_day.mon = res.count
          } else if (res[i].dayoftheweek == 2){
            this.poops_by_day.tues == res.count
          } else if (res[i].dayoftheweek == 3){
            this.poops_by_day.wed == res.count
          } else if (res[i].dayoftheweek == 4){
            this.poops_by_day.thur == res.count
          } else if (res[i].dayoftheweek == 5){
            this.poops_by_day.fri == res.count
          } else if (res[i].dayoftheweek == 6){
            this.poops_by_day.sat == res.count
          } else if (res[i].dayoftheweek == 7){
            this.poops_by_day.sun == res.count
          }
          }
        })
        .then(() => {
          function drawChart(poos) {
              const data = GoogleCharts.api.visualization.arrayToDataTable([
                  ['Day', 'Bowel movements'],
                  ['Sun', poos.sun],
                  ['Mon', poos.mon],
                  ['Tues', poos.tues],
                  ['Wed', poos.wed],
                  ['Thur', poos.thur],
                  ['Fri', poos.fri],
                  ['Sat', poos.sat]
              ])
              const options = {
                title: 'Bowel movements this week',
                curveType: 'function',
                legend: { position: 'bottom' },
                width: window.innerWidth
              }

              function resize () {
                  options.width = window.innerWidth;
                  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
                  chart.draw(data, options);
              }

             const line_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart_div'));
             line_chart.draw(data, options);

             window.onresize = resize

          }
          GoogleCharts.load(drawChart(this.poops_by_day));
        })
  },
  mounted () {

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

</style>
