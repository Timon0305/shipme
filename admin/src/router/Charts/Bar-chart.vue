<!--==============================
=            BARCHART            =
===============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> bar </code> component is the baseline functionality for transitioning content from 1 pane to another. Other components such as <code> v-tabs</code>, <code> v-carousel</code> and <code> v-stepper</code> utilize this component at their core.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('bar')),subTitle:'Designed to easily cycle through content, <code> v-window</code> provides a simple interface to create truly custom implementations.'}">
                <div slot="body">
                    <barChartBar></barChartBar>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('barHorizontal')),subTitle:'Create rich forms with smooth animations. <code> v-window</code> automatically tracks the current selection index to automatically change the transition direction. This can be manually controlled with the **reverse** prop.'}">
                <div slot="body">
                    <barChartBarHorizontal></barChartBarHorizontal>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('barAndLine')),subTitle:'<code> v-window</code> makes it easy to create custom components such as a different styled stepper.'}">
                <div slot="body">
                    <barChartBarAndLine></barChartBarAndLine>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Bar-chart',
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


<!--====  End of BARCHART  ====-->
