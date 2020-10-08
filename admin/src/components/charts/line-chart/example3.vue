
<!--============================
=            LINE CHART   LINE CHART       EXAMPLE 3     =
 ============================-->
 <template>
    <vue-chart class="layout" :options="options" />
</template>

<script>
    export default {
        data() {
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
                        left: 10,
                        width: 'calc(100% - 20px)',
                        top: 10,
                        right: 10
                    },
                    title: {
                        show: false,
                        text: 'Sales'
                    },
                    legend: {
                        show: false,
                        data: ['bar'],
                        align: 'bottom'
                    },
                    tooltip: {},
                    xAxis: {
                        data: xAxisData,
                        silent: true,
                       axisLabel: {
           color:'#666'
        },
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        show: false
                    },
                    series: [{
                            name: 'bar1',
                            stack: 'stk',
                            type: 'line',
                            color: '#90caf9',
                            data: data2,
                            areaStyle: {},
                            lineStyle: {
                                normal: {
                                    width: 5,
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 5,
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
                        },
                        {
                            name: 'bar3',
                            type: 'line',
                            color: '#64b5f6',
                            data: data2,
                            stack: 'stk',
                            areaStyle: {},
                            lineStyle: {
                                normal: {
                                    width: 5,
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 5,
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
                        },
                        {
                            name: 'bar2',
                            type: 'line',
                            color: '#e53935',
                            stack: 'stk',
                            data: data2,
                            areaStyle: {},
                            lineStyle: {
                                normal: {
                                    width: 5,
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 5,
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
                        }
                    ],
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
    .layout {
        width: 100%;
    }
</style>
<!--====  End of LINE CHART   LINE CHART       EXAMPLE 3  ====-->

