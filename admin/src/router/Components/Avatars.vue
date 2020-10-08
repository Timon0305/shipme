<!--=============================
=            AVATARS            =
==============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-avatar</code> comp onent is used to control the size and border radius of responsive images, typically used to show profile pictures.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('advanced')),subTitle:'Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.'}">
                <div slot="body">
                    <avatarsAdvanced></avatarsAdvanced>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('iconAndText')),subTitle:'An avatar also accepts the <code> v-icon</code> comp onent or text. Mix and match functionality to create something unique.'}">
                <div slot="body">
                    <avatarsIconAndText></avatarsIconAndText>
                </div>
            </app-card>
            
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Avatars',
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


<!--====  End of AVATARS  ====-->
