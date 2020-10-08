<!--=============================
=            SLIDERS            =
==============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-slider</code> comp onent is a better visualization of the number input. It is used for gathering numerical user data.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
             <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('thumb')),subTitle:'You can display a <code>thumb-label </code>   while sliding or always. It It can have a custom color by setting `thumb-color</code> and  a custom size with `thumb-size</code>. With `always-dirty` its color will never change, even when on `min` value.'}">
                <div slot="body">
                    <slidersThumb></slidersThumb>
                </div>
            </app-card> <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('thumb')),subTitle:'You can display a <code>thumb-label </code>   while sliding or always. It It can have a custom color by setting `thumb-color</code> and  a custom size with `thumb-size</code>. With `always-dirty` its color will never change, even when on `min` value.'}">
                <div slot="body">
                    <slidersThumb></slidersThumb>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('thumb')),subTitle:'You can display a <code>thumb-label </code>   while sliding or always. It It can have a custom color by setting `thumb-color</code> and  a custom size with `thumb-size</code>. With `always-dirty` its color will never change, even when on `min` value.'}">
                <div slot="body">
                    <slidersThumb></slidersThumb>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customThumb')),subTitle:' Using the <code>tick-labels</code> prop along with a scoped slot, you can create a very customized solution.'}">
                <div slot="body">
                    <slidersCustomThumb></slidersCustomThumb>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('ticks')),subTitle:'Tick marks represent predetermined values to which the user can move the slider.'}">
                <div slot="body">
                    <slidersTicks></slidersTicks>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('discrete')),subTitle:'Discrete sliders offer a thumb label that displays the exact current amount. Using the <code>step</code> prop you can disallow selecting values outside of steps.'}">
                <div slot="body">
                    <slidersDiscrete></slidersDiscrete>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icons')),subTitle:'You can add icons to the slider with the <code>append-icon</code> and  `prepend-icon</code> props. With `@click:append</code> and  `@click:prepend` you can trigger a callback function when click the icon.'}">
                <div slot="body">
                    <slidersIcons></slidersIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('editableNumericValue')),subTitle:'Sliders can be combined with other components for a better display.'}">
                <div slot="body">
                    <slidersEditableNumericValue></slidersEditableNumericValue>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customColors')),subTitle:'You can set the colors of the slider using the props `color`, `track-color</code> and  `thumb-color</code>.'}">
                <div slot="body">
                    <slidersCustomColors></slidersCustomColors>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('validation')),subTitle:'Vuetify includes simple validation through the <code>rules</code> prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either `true </code> or a <code>String`, the error message.'}">
                <div slot="body">
                    <slidersValidation></slidersValidation>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('range')),subTitle:'Range sliders.'}">
                <div slot="body">
                    <slidersRange></slidersRange>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('minMax')),subTitle:'You can set `min</code> and  `max` values of sliders.'}">
                <div slot="body">
                    <slidersMinMax></slidersMinMax>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('metronome')),subTitle:'Use slotted _prepend_ and _append_ icons to easily customize the <code> v-slider` to fit any situation.'}">
                <div slot="body">
                    <slidersMetronome></slidersMetronome>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Sliders',
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

<!--====  End of SLIDERS  ====-->
