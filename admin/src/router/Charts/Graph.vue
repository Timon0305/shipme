<!--===========================
=            GRAPH            =
============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">graph examples.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example1')),subTitle:'Graph in example1.'}">
                <div slot="body">
                    <graphExample1></graphExample1>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example2')),subTitle:'Graph in example2.'}">
                <div slot="body">
                    <graphExample2></graphExample2>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example3')),subTitle:'Graph in example3.'}">
                <div slot="body">
                    <graphExample3></graphExample3>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Graph',
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

<!--====  End of GRAPH  ====-->
