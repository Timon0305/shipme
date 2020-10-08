<!--=============================
=            BARS3DS            =
==============================-->

<template>
  <vue-chart class="layout" :options="options"/>
</template>

<script>
    export default {
       
        data() {
           let data=[[1447,29.5734572,31088398,"Russia",1810],[1223,35,9923007,"Turkey",1810],[3575,38.34738144,14106058,"United Kingdom",1810],[2283,39.41,8294928,"United States",1810],[853,34.05,334002,"Australia",1820],[1491,39.02993548,879432,"Canada",1820],[985,32,380055273,"China",1820],[1090,35.04,607664,"Cuba",1820],[1290,37.29122269,1190807,"Finland",1820],[1876,39.21,31549988,"France",1820],[1887,38.37,25507768,"Germany",1820],[929,36.56365268,62498,"Iceland",1820],[1050,25.4424,176225709,"India",1820],[1079,36.40795077,30993147,"Japan",1820],[567,26,4353556,"North Korea",1820],[564,25.8,9408016,"South Korea",1820],[660,34.05,100000,"New Zealand",1820],[1320,46.96239815,995904,"Norway",1820],[1309,35.9,10508375,"Poland",1820],[1464,29.5734572,31861526,"Russia",1820],[1225,35,10118315,"Turkey",1820],[3403,41.31247671,16221883,"United Kingdom",1820],[2242,39.41,10361646,"United States",1820],[1399,34.05,348143,"Australia",1830],[1651,39.04490323,1202146,"Canada",1830],[986,32,402373519,"China",1830],[1224,35.74,772812,"Cuba",1830],[1360,36.29644969,1327905,"Finland",1830],[1799,39.56,33174810,"France",1830],[2024,38.37,28016571,"Germany",1830]]
           
            return {
                options: {
                      grid: {
                        left: 25,
                      top:20,
                    right:25
                    },
        grid3D: {
            
              left: 25,
                      top:20,
                    right:25
        },
        tooltip: {},
        xAxis3D: {
            type: 'category'
        },
        yAxis3D: {
            type: 'category'
        },
        zAxis3D: {},
        visualMap: {
            max: 1e8,
            dimension: 'Population'
        },
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                {name: 'Year', type: 'ordinal'}
            ],
            source: data
        },
        series: [
            {
                type: 'bar3D',
                // symbolSize: symbolSize,
                shading: 'lambert',
                encode: {
                    x: 'Year',
                    y: 'Country',
                    z: 'Life Expectancy',
                    tooltip: [0, 1, 2, 3, 4]
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

<!--====  End of BARS3DS  ====-->
