<!--==============================
=            EXAMPLE1            =
===============================-->
<template>
  <vue-chart class="layout" :options="options"/>
</template>

<script>
    export default {
       
        data() {
       
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
            radius : '70%',
            center: ['50%', '60%'],
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


<!--====  End of EXAMPLE1  ====-->
