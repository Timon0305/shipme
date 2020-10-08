<!--==============================
=            example2            =
===============================-->


<template>
    <vue-chart :ref="'chart'" class="layout" :options="options" />
</template>

<script>
    export default {
        mounted() {
            let vm = this
            vm.addNode()
        },
        methods: {
            addNode() {
                let vm = this
                for (let x = 0; x < 30; x++) {
                    let nr = _.random(0, 50)
                    vm.options.series[0].data.push({
                        name: 'n' + x,
                        category : nr%4,
                        label:{
            normal: {
                show: nr > 10
            }}
        ,
                        symbolSize: nr / 2,
                        id: vm.options.series[0].data.length
                    });
                    for (let a = 0; a < nr; a++) {
                        var source = Math.round((vm.options.series[0].data.length - 1) * Math.random());
                        var target = Math.round((vm.options.series[0].data.length - 1) * Math.random());
                        if (source !== target) {
                            vm.options.series[0].edges.push({
                                source: source,
                                target: target
                            });
                        }
                    }
                }
                vm.$refs.chart.chart.setOption({
                    series: [{
                       
                        data: vm.options.series[0].data.sort((a, b) => a.symbolSize - b.symbolSize),
                        edges: vm.options.series[0].edges,
                    }]
                });
            }
        },
        data() {
            return {
                options: {
                    animationDurationUpdate: 1500,
                    legend: {
                        position:'left',
                        data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
                    },
                    animationEasingUpdate: 'quinticInOut',
                    series: [{
                        label: {
                            normal: {
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: 'source',
                                curveness: 0.5
                            }
                        },
                        categories: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other'],
                        type: 'graph',
                        layout: 'circular',
                       
                        circular: {
                            rotateLabel: true
                        },
                        data: [{
                            fixed: true,
                            symbolSize: 20,
                            id: '-1'
                        }],
                        edges: []
                    }]
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
<!--====  End of example2  ====-->
