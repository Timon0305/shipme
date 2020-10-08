<!--============================
=            RATING            =
=============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The rating component is a specialized but crucial piece in building user widgets. Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>

            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('alignWithTitle')),subTitle:'Make <code> v-tabs</code>   lined up with the <code> v-toolbar-title</code> comp onent (<code> v-toolbar-side-icon </code> or <code> v-btn` must be used in <code> v-toolbar`). May not work if the tab text is wrapped.'}">
                <div slot="body">
                    <ratingsSizes></ratingsSizes>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('grow')),subTitle:'The **grow** prop will make the tab items take up all available space.'}">
                <div slot="body">
                    <ratingsLength></ratingsLength>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('overflowToMenu')),subTitle:'You can use a menu to hold additional tabs, swapping them out on the fly'}">
                <div slot="body">
                    <ratingsIncrements></ratingsIncrements>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('pagination')),subTitle:'If the tab items overflow their container, pagination controls will appear.'}">
                <div slot="body">
                    <ratingsCard></ratingsCard>
                </div>
            </app-card>

        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Ratings',
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

<!--====  End of RATING  ====-->
