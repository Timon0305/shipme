<!--===============================
=            examples1            =
================================-->

<template>
  <vue-chart class="layout" :options="options"/>
</template>

<script>
    export default {
       
        data() {
            let data=require('./../../../../static/data/data.json')
           function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.map(function(airline) {
        return [
            getAirportCoord(airline[1]),
            getAirportCoord(airline[2])
        ];
    });
            return {
                options:{
        backgroundColor: '#000',
        globe: {
            baseTexture: '/static/data/world.topo.bathy.200401.jpg',
            heightTexture: '/static/data/bathymetry_bw_composite_4k.jpg',

            shading: 'lambert',

            light: {
                ambient: {
                    intensity: 0.6
                },
                main: {
                    intensity: 0.4
                }
            },

            viewControl: {
                autoRotate: false
            }
        },
        series: {

            type: 'lines3D',

            coordinateSystem: 'globe',

            blendMode: 'lighter',

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                opacity: 0.1
            },

            data: routes
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

<!--====  End of examples1  ====-->
