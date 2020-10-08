<!--=============================
=            DIVIDES            =
==============================-->


<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-divider</code> comp onent is used to separate sections of lists.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('lightAndDark')),subTitle:'Dividers have light and dark variants.'}">
                <div slot="body">
                    <dividersLightAndDark></dividersLightAndDark>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('inset')),subTitle:'Inset dividers are moved 72px to the right. This will cause them to line up with list items.'}">
                <div slot="body">
                    <dividersInset></dividersInset>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('subheaders')),subTitle:'Subheaders can be lined up with inset dividers by using the same prop.'}">
                <div slot="body">
                    <dividersSubheaders></dividersSubheaders>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dividerList')),subTitle:'Inset dividers and subheaders can help break up content'}">
                <div slot="body">
                    <dividersDividerList></dividersDividerList>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dividerListPortrait')),subTitle:'Create custom cards to fit any use-case'}">
                <div slot="body">
                    <dividersDividerListPortrait></dividersDividerListPortrait>
                </div>
            </app-card>
           
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('vertical')),subTitle:'Vertical dividers give you even more tools for unique layouts.'}">
                <div slot="body">
                    <dividersVertical></dividersVertical>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Dividers',
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
<!--====  End of DIVIDES  ====-->
