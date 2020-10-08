<!--=================================
=            3D BARCHART            =
==================================-->


<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">bar3d examples.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example1')),subTitle:'Bar 3D in example1.'}">
                <div slot="body">
                    <bar3DExample1></bar3DExample1>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example2')),subTitle:'Bar 3D in example2.'}">
                <div slot="body">
                    <bar3DExample2></bar3DExample2>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example3')),subTitle:'Bar 3D in example3.'}">
                <div slot="body">
                    <bar3DExample3></bar3DExample3>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Bar3d',
        mounted() {},
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style>
    .appDashboard {
        z-index: 9;
    }

    .appDashboard__bigChart {
        width: 100%;
    }
</style>
<!--====  End of 3D BARCHART  ====-->
