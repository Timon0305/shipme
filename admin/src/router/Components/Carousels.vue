<!--===============================
=            CAROUSELS            =
================================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-carousel</code> comp onent is used to display large numbers of visual content on a rotating timer.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customTransition')),subTitle:'You can also apply your own custom transition.'}">
                <div slot="body">
                    <carouselsCustomTransition></carouselsCustomTransition>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customIcons')),subTitle:'You can also change the icon for the carousel delimiter and previous/next icons.'}">
                <div slot="body">
                    <carouselsCustomIcons></carouselsCustomIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('hideControls')),subTitle:'You can hide the navigation controls with the <code>hide-controls</code> prop.'}">
                <div slot="body">
                    <carouselsHideControls></carouselsHideControls>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('hideDelimiters')),subTitle:'You can hide the bottom controls with the <code>hide-delimiters</code> prop.'}">
                <div slot="body">
                    <carouselsHideDelimiters></carouselsHideDelimiters>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Carousels',
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

<!--====  End of CAROUSELS  ====-->
