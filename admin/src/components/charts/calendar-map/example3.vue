<!--==============================
=            EXAMPLE3            =
===============================-->


<template>
    <vue-chart class="layout" :options="options" />
</template>

<script>
import echarts from 'echarts'
    export default {
        data() {
            function getVirtulData(year) {
                year = year || '2017';
                var date = +echarts.number.parseDate(year + '-01-01');
                var end = +echarts.number.parseDate((+year + 1) + '-01-01');
                var dayTime = 3600 * 24 * 1000;
                var data = [];
                for (var time = date; time < end; time += dayTime) {
                    data.push([
                        echarts.format.formatTime('yyyy-MM-dd', time),
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                return data;
            }
            return {
                options:  {
    title: {
        top: 30,
        left: 'center',
        text: '2016 accidents'
    },
    tooltip : {},
    visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000'
        }
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        height:200,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
            normal: {borderWidth: 0.5}
        },
        yearLabel: {show: false}
    },
    series: {
        itemStyle:{
           emphasis: {
                                barBorderWidth: 1,
                                shadowBlur: 20,
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                shadowColor: 'rgba(0,0,0,0.95)'
                            }
        },
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2016)
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
<!--====  End of EXAMPLE3  ====-->
