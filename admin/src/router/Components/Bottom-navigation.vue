<!--============================
=            BADGES            =
=============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-bottom-nav </code> is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('colorAndShift')),subTitle:'When using a colored background, it is recommended to use the <code>light</code> prop. The `shift</code> prop will hide the button text until active. Keep in mind, <code> v-btn</code> text is required to be wrapped in a <code>&lt;span&gt;` tag.'}">
                <div slot="body">
                    <bottomNavigationColorAndShift></bottomNavigationColorAndShift>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('toggle')),subTitle:'As with other Vuetify components, you can control the display state with <code> v-model</code>.'}">
                <div slot="body">
                    <bottomNavigationToggle></bottomNavigationToggle>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Bottom-navigation',
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


<!--====  End of BADGES  ====-->
