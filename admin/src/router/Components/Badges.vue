<!--============================
=            BADGES            =
=============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-badge</code> comp onent can wrap any type of content to highlight information to a user or to just draw attention to a specific element.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex="">
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('overlap')),subTitle:'The badge will overlap its content when using the <code>overlap</code> prop'}">
                <div slot="body">
                    <badgesOverlap></badgesOverlap>
                </div>
            </app-card>
            <app-card class="xs12 md4 d-flex" :obj="{title:_.capitalize(_.startCase('inline')),subTitle:'Badges can also be placed inline with text.'}">
                <div slot="body">
                    <badgesInline></badgesInline>
                </div>
            </app-card>
            <app-card class="xs12 md4 d-flex" :obj="{title:_.capitalize(_.startCase('icon')),subTitle:'The badge can use all of the currently supported icon sets.'}">
                <div slot="body">
                    <badgesIcon></badgesIcon>
                </div>
            </app-card>
            <app-card class="xs12 md4 d-flex" :obj="{title:_.capitalize(_.startCase('visibility')),subTitle:'The visibility of badges can be controlled using <code> v-model</code>.'}">
                <div slot="body">
                    <badgesVisibility></badgesVisibility>
                </div>
            </app-card>
</v-layout>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Badges',
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
