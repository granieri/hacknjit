<template>
  <div class="stream">
    <div id="chart_div">
    </div>
 </div>
</template>

<script>
import {GoogleCharts} from 'google-charts';

export default {
  data() {
    return {
      poops_by_day: {}
    }
  },
  beforeMount () {
    let url = 'http://localhost:8081'
    this.$store.dispatch('set_user', login)

    axios.get(url+'/getinsight/'+login.id)
      .then((response) => {
        res = response.data
        for(let i=0;i<res.length;i++){
          if(res[i].dayoftheweek == 1){
            poops_by_day.mon = res.count
          } else if (res[i].dayoftheweek == 2){
            poops_by_day.tues == res.count
          } else if (res[i].dayoftheweek == 3){
            poops_by_day.wed == res.count
          } else if (res[i].dayoftheweek == 4){
            poops_by_day.thur == res.count
          } else if (res[i].dayoftheweek == 5){
            poops_by_day.fri == res.count
          } else if (res[i].dayoftheweek == 6){
            poops_by_day.sat == res.count
          } else if (res[i].dayoftheweek == 7){
            poops_by_day.sun == res.count
          }
          }
        })
  },
  mounted () {
    GoogleCharts.load(drawChart);

    function drawChart() {
        const data = GoogleCharts.api.visualization.arrayToDataTable([
            ['Day', 'Bowel movements'],
            ['Sun', this.poops_by_day.sun],
            ['Mon', this.poops_by_day.mon],
            ['Tues', this.poops_by_day.tues],
            ['Wed', this.poops_by_day.wed],
            ['Thur', this.poops_by_day.thur],
            ['Fri', this.poops_by_day.fri],
            ['Sat', this.poops_by_day.sat]
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
