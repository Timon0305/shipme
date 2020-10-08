<!--==================================
=            BOTTOMSHEETS            =
===================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The bottom sheet is a modified <code> v-dialog</code> that slides from the bottom of the screen, similar to a <code> v-bottom-nav</code>. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('inset')),subTitle:'Bottom sheets can be inset, reducing their maximum width on desktop to 70%. This can be further reduced manually using the <code>width</code> prop. We also showcase dynamic class binding using the Vuetify breakpoint object.'}">
                <div slot="body">
                    <bottomSheetsInset></bottomSheetsInset>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Bottom-sheets',
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


<!--====  End of BOTTOMSHEETS  ====-->
