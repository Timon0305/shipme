<!--==============================
=            TOOLTIPS            =
===============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-tooltip</code> comp onent is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a<code class='ml-1 mr-1'>v-model</code></div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('alignment')),subTitle:'Tooltip can be aligned to any of the four sides of the activator element'}">
                <div slot="body">
                    <tooltipsAlignment></tooltipsAlignment>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('visibility')),subTitle:'Tooltip visibility can be programmatically changed using <code> v-model</code>.'}">
                <div slot="body">
                    <tooltipsVisibility></tooltipsVisibility>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Tooltips',
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


<!--====  End of TOOLTIPS  ====-->
