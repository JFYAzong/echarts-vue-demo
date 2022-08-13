<template>
  <div class="echarts" id="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));

    var option = {
      title: {
        text: "ECharts 入门案例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    myChart.setOption(option);
  },
};

// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/polar'

// export default {
//   components: {
//     'v-chart': ECharts
//   },
//   data () {
//     let data = []

//     for (let i = 0; i <= 360; i++) {
//         let t = i / 180 * Math.PI
//         let r = Math.sin(2 * t) * Math.cos(2 * t)
//         data.push([r, i])
//     }

//     return {
//       polar: {
//         title: {
//           text: '极坐标双数值轴'
//         },
//         legend: {
//           data: ['line']
//         },
//         polar: {
//           center: ['50%', '54%']
//         },
//         tooltip: {
//           trigger: 'axis',
//           axisPointer: {
//             type: 'cross'
//           }
//         },
//         angleAxis: {
//           type: 'value',
//           startAngle: 0
//         },
//         radiusAxis: {
//           min: 0
//         },
//         series: [
//           {
//             coordinateSystem: 'polar',
//             name: 'line',
//             type: 'line',
//             showSymbol: false,
//             data: data
//           }
//         ],
//         animationDuration: 2000
//       }
//     }
//   }
// }
</script>

<style scoped>
.echarts {
  width: 600px;
  height: 400px;
}
</style>
