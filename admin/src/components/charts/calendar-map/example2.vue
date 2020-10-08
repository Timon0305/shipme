<!--==============================
=            EXAMPLE2            =
===============================-->

<template>
  <vue-chart class="layout" :options="options"/>
</template>

<script>
import echarts from 'echarts'
    export default {
       
        data() {
       function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(year + '-12-31');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time <= end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

var data = getVirtulData(2016); 
            return {
                options:{
                    grid:{
                      
                    },
                      visualMap: {
        show: false,
         inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8']
        },
        min: 0,
        max: 10000
        
    },
    calendar: {
        range: '2017',
          width:'90%',
          top:100,
                        height:'200px'
    },
    series: {
        type: 'heatmap',
          itemStyle:{
           emphasis: {
                                barBorderWidth: 1,
                                shadowBlur: 20,
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                shadowColor: 'rgba(0,0,0,0.95)'
                            }
        },
        coordinateSystem: 'calendar',
        data: getVirtulData(2017)
    }
                }
            }
        }
    }
</script>

<style>
.echarts {
  width: 100%;

}
</style>

<!--====  End of EXAMPLE2  ====-->
