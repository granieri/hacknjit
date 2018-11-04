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
            ['Sunday', 6],
            ['Monday', 2],
            ['Tuesday', 1],
            ['Wednesday', 5],
            ['Thursday', 4],
            ['Friday', 2],
            ['Saturday', 0]
        ])
        const options = {
          title: 'Bowel movements this week',
          curveType: 'function',
          legend: { position: 'bottom' }
        }

       const line_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart_div'));
       line_chart.draw(data, options);
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
