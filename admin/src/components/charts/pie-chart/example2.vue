<!--==============================
=            EXAMPLE2            =
===============================-->

<template>
  <vue-chart class="layout" :options="options"/>
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
                    grid:{
                        top:0,
                        left:0,
                        right:0,
                        bottom:0
                    },
    title : {
    show:false,
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
      
        data: ['val1','val2','val3','val4','val5']
    },
    series : [
        {
            name: 'vals',
            type: 'pie',
           
            center: ['50%', '60%'],
             radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            data:[
                {value:335, name:'val1'},
                {value:310, name:'val2'},
                {value:234, name:'val3'},
                {value:135, name:'val4'},
                {value:1548, name:'val5'}
            ],
            itemStyle: {
                   normal:{
                       shadowBlur: 10,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.05)'
                  },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
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

<!--====  End of EXAMPLE2  ====-->
