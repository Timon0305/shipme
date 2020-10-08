<!--=============================
=            BUTTONS            =
==============================-->


<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-btn</code> comp onent replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('flat')),subTitle:'Flat buttons have no box shadow and no background. Only on hover is the container for the button shown.'}">
                <div slot="body">
                    <buttonsFlat></buttonsFlat>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('raised')),subTitle:'Raised buttons have a box shadow that increases when clicked. This is the default style.'}">
                <div slot="body">
                    <buttonsRaised></buttonsRaised>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('depressed')),subTitle:'Depressed buttons still maintain their background color, but have no box shadow.'}">
                <div slot="body">
                    <buttonsDepressed></buttonsDepressed>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dropdown')),subTitle:'Button dropdowns are regular selects with additional styling.'}">
                <div slot="body">
                    <buttonsDropdown></buttonsDropdown>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icon')),subTitle:'Icons can be used for the primary content of a button.'}">
                <div slot="body">
                    <buttonsIcon></buttonsIcon>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('floating')),subTitle:'Floating buttons are round and usually contain an icon.'}">
                <div slot="body">
                    <buttonsFloating></buttonsFloating>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('loaders')),subTitle:'Using the loading prop, you can notify a user that there is processing taking place. The default behavior is to use a  v-progress-circular comp onent but this can be customized.'}">
                <div slot="body">
                    <buttonsLoaders></buttonsLoaders>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('sizing')),subTitle:'Buttons can be given different sizing options to fit a multitude of scenarios.'}">
                <div slot="body">
                    <buttonsSizing></buttonsSizing>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('outline')),subTitle:'Outline buttons inherit their borders from the current color applied.'}">
                <div slot="body">
                    <buttonsOutline></buttonsOutline>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('round')),subTitle:'Rounded buttons behave the same as regular buttons but have rounded edges.'}">
                <div slot="body">
                    <buttonsRound></buttonsRound>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('block')),subTitle:'Block buttons extend the full available width.'}">
                <div slot="body">
                    <buttonsBlock></buttonsBlock>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Buttons',
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
<!--====  End of BUTTONS  ====-->
