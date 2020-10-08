<!--=============================
=            WINDOWS            =
==============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-window</code> comp onent is the baseline functionality for transitioning content from 1 pane to another. Other components such as <code> v-tabs</code>> <code> v-carousel</code> and <code> v-stepper</code> utilize this component at their core.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('onboarding')),subTitle:'<code> v-window</code> makes it easy to create custom components such as a different styled stepper.'}">
                <div slot="body">
                    <windowsOnboarding></windowsOnboarding>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('account')),subTitle:'Create rich forms with smooth animations. <code> v-window</code> automatically tracks the current selection index to automatically change the transition direction. This can be manually controlled with the **reverse** prop.'}">
                <div slot="body">
                    <windowsAccount></windowsAccount>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Windows',
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

<!--====  End of WINDOWS  ====-->
