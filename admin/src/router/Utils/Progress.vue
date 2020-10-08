<!--==============================
=            PROGRESS            =
===============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code>v-progress-circular</code> and <code>v-progress-linear</code> components are used to convey data visually to users. They can also represent an indeterminate amount, such as loading or processing. The circular progress component contains a slot that is centered within the circle.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('circularColored')),subTitle:'Alternate colors can be applied.'}">
                <div slot="body">
                    <progressCircularColored></progressCircularColored>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('circularIndeterminate')),subTitle:'An indeterminate progress circular animates forever.'}">
                <div slot="body">
                    <progressCircularIndeterminate></progressCircularIndeterminate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('circularSizeAndWidth')),subTitle:'The progress circular component can have an altered width and size.'}">
                <div slot="body">
                    <progressCircularSizeAndWidth></progressCircularSizeAndWidth>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('circularRotate')),subTitle:'The progress origin can be rotated.'}">
                <div slot="body">
                    <progressCircularRotate></progressCircularRotate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('linearDeterminate')),subTitle:'The progress linear component can have a determinate state modified by <code> v-model</code>.'}">
                <div slot="body">
                    <progressLinearDeterminate></progressLinearDeterminate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('linearIndeterminate')),subTitle:'Just as with the progress circular component, progress linear has an indeterminate state.'}">
                <div slot="body">
                    <progressLinearIndeterminate></progressLinearIndeterminate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('linearBuffer')),subTitle:'A buffer state represents two values simultaneously. The primary value is controled by the model, whereas the buffer is controlled by the <code>buffer-value</code> prop.'}">
                <div slot="body">
                    <progressLinearBuffer></progressLinearBuffer>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('linearQueryIndeterminateAndDeterminate')),subTitle:'To query state is controlled by the truthiness of indeterminate with the query prop set to true.'}">
                <div slot="body">
                    <progressLinearQueryIndeterminateAndDeterminate></progressLinearQueryIndeterminateAndDeterminate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('linearCustomHeightAndContextualColors')),subTitle:'A custom height or contextual color can be applied to a progress bar. The bars primary color is your applications primary color.'}">
                <div slot="body">
                    <progressLinearCustomHeightAndContextualColors></progressLinearCustomHeightAndContextualColors>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('linearCustomColors')),subTitle:'You can also set the color using the props `color</code> and  `background-color</code>.'}">
                <div slot="body">
                    <progressLinearCustomColors></progressLinearCustomColors>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Progress',
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

<!--====  End of PROGRESS  ====-->
