<!--==============================
=            EXAMPLE1            =
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

var data = getVirtulData(2016); 
            return {
                options: {
    
      grid: {
        
                      
                    },

    title: {
      display:false
    },
    tooltip : {
        trigger: 'item'
    },
    legends: {
        display:false,
    },
    calendar: [ {
       width:'90%',
       height:'200px',
       top:100,
        left: 'center',
        range: ['2016-07-01', '2016-12-31'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 1,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  2nd',
            textStyle: {
                color: '#444'
            }
        },
        itemStyle: {
            normal: {
                color: '#1565c0',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }],
    series : [
        {
             name: 'Top 12',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }
        },
        {
           name: 'Top 12',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data,
            symbolSize: function (val) {
                return val[1] / 500;
            },
            itemStyle: {
                 emphasis: {
                                barBorderWidth: 1,
                                shadowBlur: 20,
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                shadowColor: 'rgba(0,0,0,0.95)'
                            }
        ,
                normal: {
                    color: '#303f9f'
                }
            }
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                 emphasis: {
                                barBorderWidth: 1,
                                shadowBlur: 20,
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                shadowColor: 'rgba(0,0,0,0.95)'
                            }
        ,
                normal: {
                    color: '#303f9f',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.05)'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 500;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                 emphasis: {
                                barBorderWidth: 1,
                                shadowBlur: 20,
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                                shadowColor: 'rgba(0,0,0,0.95)'
                            }
        ,
                normal: {
                    color: '#fff',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
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


<!--====  End of EXAMPLE1  ====-->
