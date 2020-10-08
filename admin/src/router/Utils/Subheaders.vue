<!--================================
=            SUBHEADERS            =
=================================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-subheader</code> comp onent is used to separate sections of lists.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('grid')),subTitle:'A subheader can add context to what a user is looking at.'}">
                <div slot="body">
                    <subheadersGrid></subheadersGrid>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('menu')),subTitle:'Using a subheader can help separate different types of actions.'}">
                <div slot="body">
                    <subheadersMenu></subheadersMenu>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('social')),subTitle:'Using a subheader with social media interaction.'}">
                <div slot="body">
                    <subheadersSocial></subheadersSocial>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Subheaders',
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

<!--====  End of SUBHEADERS  ====-->
