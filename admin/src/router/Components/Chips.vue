<!--===========================
=            CHIPS            =
============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-chip</code> comp onent is used to convey small pieces of information. Using the <code>close</code> property, the chip becomes interactive, allowing user interaction.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('colored')),subTitle:'Any color from the Material Design palette can be used to change a chips color.'}">
                <div slot="body">
                    <chipsColored></chipsColored>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icon')),subTitle:'Chips can use text or any icon available in the Material Icons font library.'}">
                <div slot="body">
                    <chipsIcon></chipsIcon>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('outline')),subTitle:'Outlined chips inherit their border color from the current text color.'}">
                <div slot="body">
                    <chipsOutline></chipsOutline>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('label')),subTitle:'Label chips use the <code> v-card</code> border-radius.'}">
                <div slot="body">
                    <chipsLabel></chipsLabel>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('closable')),subTitle:'Closable chips can be controlled with a v-model. Listen to the <code>input` event if you want to know when a chip has been closed.'}">
                <div slot="body">
                    <chipsClosable></chipsClosable>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('inSelects')),subTitle:'Selects can use chips to display the selected data. Try adding your own tags below.'}">
                <div slot="body">
                    <chipsInSelects></chipsInSelects>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Chips',
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

<!--====  End of CHIPS  ====-->
