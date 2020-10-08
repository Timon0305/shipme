<!--===========================
=            GLOBE            =
============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">globe examples.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example1')),subTitle:'Globe in example1.'}">
                <div slot="body">
                    <globeExample1></globeExample1>
                </div>
            </app-card>

        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Globe',
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

<!--====  End of GLOBE  ====-->
