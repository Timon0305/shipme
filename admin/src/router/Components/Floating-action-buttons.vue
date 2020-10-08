<!--==============================
=            FLOATING            =
===============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-btn</code> comp onent can be used as a Floating action button. This provides an application a main point of action. Combined with the <code> v-speed-dial</code> comp onent, you can create a diverse set of functions available for your users.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('small')),subTitle:'For better visual appeal, we use a small button to match our list avatars.'}">
                <div slot="body">
                    <floatingActionButtonsSmall></floatingActionButtonsSmall>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('displayAnimation')),subTitle:'When displaying for the first time, a floating action button should animate onto the screen. Here we use the <code> v-fab-transition` with v-show. You can also use any custom transition provided by Vuetify or your own.'}">
                <div slot="body">
                    <floatingActionButtonsDisplayAnimation></floatingActionButtonsDisplayAnimation>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('lateralScreens')),subTitle:'When changing the default action of your button, it is recommended that you display a transition to signify a change. We do this by binding the <code>key</code> prop to a piece of data that can properly signal a change in action to the Vue transition system. While you can use a custom transition for this, ensure that you set the <code>mode</code> prop to **out-in**.'}">
                <div slot="body">
                    <floatingActionButtonsLateralScreens></floatingActionButtonsLateralScreens>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('speedDial')),subTitle:'The speed-dial component has an very robust api for customizing your FAB experience exactly how you want.'}">
                <div slot="body">
                    <floatingActionButtonsSpeedDial></floatingActionButtonsSpeedDial>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Floating-action-buttons',
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

<!--====  End of FLOATING  ====-->
