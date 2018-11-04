<template>
  <div class="stream">
    <div id="chart_div">
    </div>
 </div>
</template>

<script>
import {GoogleCharts} from 'google-charts';

export default {
  mounted () {
    GoogleCharts.load(drawChart);

    function drawChart() {
        const data = GoogleCharts.api.visualization.arrayToDataTable([
            ['Day', 'Bowel movements'],
            ['Sun', 6],
            ['Mon', 2],
            ['Tues', 1],
            ['Wed', 5],
            ['Thur', 4],
            ['Fri', 2],
            ['Sat', 0]
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
