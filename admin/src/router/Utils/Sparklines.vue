<!--=================================
=            SPARKLINERS            =
==================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The sparkline component can be used to create simple graphs, like GitHub's contribution chart.

                Any [SVG attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute) may be used in addition to the ones listed below.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('heartRate')),subTitle:'For concise information, a complete chart might be overkill. Using a trend line with gradient provides enough detail for the user without showing too much information.'}">
                <div slot="body">
                    <sparklinesHeartRate></sparklinesHeartRate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dashboardCard')),subTitle:'The <code> v-sparkline</code> comp onent pairs nicely with <code> v-card</code> and  <code> v-sheet</code>   to create customized information cards, perfect for admin dashboards. Here we use custom labels to provide additional context for the sparkline.'}">
                <div slot="body">
                    <sparklinesDashboardCard></sparklinesDashboardCard>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('salesCard')),subTitle:'By providing a scoped slot **label**, we are able to modify the displayed content adding a dollar sign ($). This slot is **_exclusively_** for text content. For more information on the svg `&lt;text&gt;` element, [navigate here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text).'}">
                <div slot="body">
                    <sparklinesSalesCard></sparklinesSalesCard>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('fill')),subTitle:'You can create a <code> v-sparkline</code>   with fill using the <code>fill</code> property.'}">
                <div slot="body">
                    <sparklinesFill></sparklinesFill>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Sparklines',
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


<!--====  End of SPARKLINERS  ====-->
