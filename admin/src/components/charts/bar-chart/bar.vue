<!--=========================
=            BAR            =
==========================-->
<template>
  <vue-chart class="layout" :options="options"/>
</template>

<script>
    export default {
       
        data() {
          let vm=this
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            for (var i = 0; i < 30; i++) {
                xAxisData.push('Day' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }
            return {
                options: {
                      grid: {
                        left: 25,
                      top:20,
                    right:25
                    },
                    title: {
                        show: false,
                        text: 'Sales'
                    },
                    legend: {
                         show: false,
                        data: ['bar', 'bar2'],
                        align: 'bottom'
                    },
                  
                    tooltip: {},
                    xAxis: {
                         axisLabel: {
           color:'#777'
        },
                        data: xAxisData,
                        silent: true,
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                          show: false
                    },
                    series: [ {
                        name: 'bar2',
                        type: 'bar',
                        color:this.$vuetify.theme.primary,
                        data: data2,
                        itemStyle: {
                            normal: {
                                barBorderWidth: 1,
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowColor: 'rgba(0,0,0,0.5)'
                            },
                            emphasis: {
                                barBorderWidth: 1,
                                shadowBlur: 20,
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                shadowColor: 'rgba(0,0,0,0.95)'
                            }
                        },
                        animationDelay: function(idx) {
                            return idx * 10 + 10;
                        }
                    }],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function(idx) {
                        return idx * 1;
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


<!--====  End of BAR  ====-->
