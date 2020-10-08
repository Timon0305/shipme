<!--===============================
=            PARRALLAX            =
================================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-parallax</code> comp onent creates a 3d effect that makes an image appear to scroll slower than the window.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('content')),subTitle:'You can also place any content inside of the parallax. This allows you to use the parallax as a hero image.'}">
                <div slot="body">
                    <parallaxContent></parallaxContent>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customHeight')),subTitle:'You can specify a custom height on a parallax. Keep in mind this can break the parallax if your image is not sized properly'}">
                <div slot="body">
                    <parallaxCustomHeight></parallaxCustomHeight>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Parallax',
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

<!--====  End of PARRALLAX  ====-->
