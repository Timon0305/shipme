<!--==============================
=            STEPPERS            =
===============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-stepper</code> comp onent displays progress through numbered steps.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('editable')),subTitle:'An editable step can be selected by a user at any point and will navigate them to that step.'}">
                <div slot="body">
                    <steppersEditable></steppersEditable>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('nonEditable')),subTitle:'Non-editable steps force a user to process linearly through your process.'}">
                <div slot="body">
                    <steppersNonEditable></steppersNonEditable>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('optional')),subTitle:'An optional step can be called out with sub-text.'}">
                <div slot="body">
                    <steppersOptional></steppersOptional>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('horizontal')),subTitle:'Horizontal steppers move users along the x-axis through the defined steps.'}">
                <div slot="body">
                    <steppersHorizontal></steppersHorizontal>
                </div>
            </app-card>

            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('linear')),subTitle:'Linear steppers will always move a user through your defined path.'}">
                <div slot="body">
                    <steppersLinear></steppersLinear>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('nonLinear')),subTitle:'Non-linear steppers allow the user to move through your process in whatever way they choose.'}">
                <div slot="body">
                    <steppersNonLinear></steppersNonLinear>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('alternateLabels')),subTitle:'Steppers also have an alternative label style which places the title under the step itself.'}">
                <div slot="body">
                    <steppersAlternateLabels></steppersAlternateLabels>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('error')),subTitle:'An error state can be displayed to notify the user of some action that must be taken.'}">
                <div slot="body">
                    <steppersError></steppersError>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('alternateError')),subTitle:'The error state can also be applied to the alternative label style.'}">
                <div slot="body">
                    <steppersAlternateError></steppersAlternateError>
                </div>
            </app-card>

            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dynamic')),subTitle:'Steppers can have their steps dynamically added or removed. If a currently active step is removed, be sure to account for this by changing the applied model.'}">
                <div slot="body">
                    <steppersDynamic></steppersDynamic>
                </div>
            </app-card>

            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Option')),subTitle:'Steppers can have their steps dynamically added or removed. If a currently active step is removed, be sure to account for this by changing the applied model.'}">
                <div slot="body">
                    <steppersOptional></steppersOptional>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'

    export default {
        name: 'Steppers',
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


<!--====  End of STEPPERS  ====-->
