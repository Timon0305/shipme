<!--===========================
=            CARDS            =
============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-card</code> comp onent is a versatile component that can be used for anything from a panel to a static image. The<code class='ml-1 mr-1'>card</code>component has numerous helper components to make markup as easy as possible. Components that have no listed options use<code class='ml-1 mr-1'>Vue's</code>functional component option for faster rendering and serve as markup sugar to make building easier.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('mediaWithText')),subTitle:'Using the layout system, we can add custom text anywhere within the background.'}">
                <div slot="body">
                    <cardsMediaWithText></cardsMediaWithText>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('horizontal')),subTitle:'Using <code> v-flex`, you can create customized horizontal cards. Use the <code>contain</code> property to shrink the <code> v-card-media` to fit inside the container, instead of covering.'}">
                <div slot="body">
                    <cardsHorizontal></cardsHorizontal>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('grids')),subTitle:'Using grid lists, you can create beautiful layouts.'}">
                <div slot="body">
                    <cardsGrids></cardsGrids>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customActions')),subTitle:'With a simple conditional, you can easily add supplementary text that is hidden until opened.'}">
                <div slot="body">
                    <cardsCustomActions></cardsCustomActions>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('twitterCard')),subTitle:'The <code> v-card</code> comp onent has multiple children components that help you build complex examples without having to worry about spacing. This example is comprised of the <code> v-card-title`, <code> v-card-text</code> and  <code> v-card-actions</code> comp onents.'}">
                <div slot="body">
                    <cardsTwitterCard></cardsTwitterCard>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Cards',
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


<!--====  End of CARDS  ====-->
