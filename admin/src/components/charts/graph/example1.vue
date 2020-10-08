<!--==============================
=            example1            =
===============================-->

<template>
    <vue-chart :ref="'chart'" class="layout" :options="options" />
</template>

<script>
    export default {
        mounted() {
            let vm = this
            
            for(let x=0;x<30;x++){
                 setTimeout(() => {
                    vm.addNode()
                 }, 200*x);
            }
        },
        methods: {
            addNode() {
                let vm = this
                vm.options.series[0].data.push({
                    id: vm.options.series[0].data.length
                });
                var source = Math.round((vm.options.series[0].data.length - 1) * Math.random());
                var target = Math.round((vm.options.series[0].data.length - 1) * Math.random());
                if (source !== target) {
                    vm.options.series[0].edges.push({
                        source: source,
                        target: target
                    });
                }
                vm.$refs.chart.chart.setOption({
                    series: [{
                        roam: true,
                        data: vm.options.series[0].data,
                        edges: vm.options.series[0].edges,
                    }]
                });
               
            }
        },
        data() {
            return {
                options: {
                    series: [{
                        type: 'graph',
                        layout: 'force',
                        animation: false,
                        data: [{
                            fixed: true,
                            symbolSize: 20,
                            id: '-1'
                        }],
                        force: {
                            initLayout: 'circular',
                           
                            edgeLength: 20
                        },
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

<!--====  End of example1  ====-->
