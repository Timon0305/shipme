<!--============================
=            IMAGES            =
=============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-img</code> comp onent is packed with features to support rich media. Combined with the [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader), you can add dynamic progressive images to provide a better user experience.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('containCover')),subTitle:'If the provided aspect ratio doesnt match that of the actual image, the default behavior is to fill as much space as possible, clipping the sides of the image. Enabling the <code>contain</code> prop will prevent this, but will result in empty space at the sides.'}">
                <div slot="body">
                    <imagesContainCover></imagesContainCover>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('maxHeight')),subTitle:'<code> v-img</code>  will automatically grow to the size of its `src`, preserving the correct aspect ratio. You can limit this with the <code>height</code> and  `max-height</code> props.'}">
                <div slot="body">
                    <imagesMaxHeight></imagesMaxHeight>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('ratio')),subTitle:''}">
                <div slot="body">
                    <imagesRatio></imagesRatio>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('gradients')),subTitle:'The `gradient</code> prop can be used to apply a simple gradient overlay to the image. More complex gradients should be written as a class on the content slot instead.'}">
                <div slot="body">
                    <imagesGradients></imagesGradients>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Images',
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

<!--====  End of IMAGES  ====-->
