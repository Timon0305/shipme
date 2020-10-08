<!--================================
=            TIMEPICKWR            =
=================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-time-picker </code> is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting the time.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('timeColorable')),subTitle:'Time picker colors can be set using the <code>color</code> and  `header-color</code> props. If `header-color</code> prop is not provided  header will use the <code>color</code> prop value.'}">
                <div slot="body">
                    <timePickersTimeColorable></timePickersTimeColorable>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('timeDialogAndMenu')),subTitle:'Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.'}">
                <div slot="body">
                    <timePickersTimeDialogAndMenu></timePickersTimeDialogAndMenu>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('time24hFormat')),subTitle:'A time picker can be switched to 24hr format. Note that the <code>format</code> prop defines only the way the picker is displayed, pickers value (model) is always in 24hr format.'}">
                <div slot="body">
                    <timePickersTime24HFormat></timePickersTime24HFormat>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('timeAllowedTimes')),subTitle:'You can specify allowed times using arrays, objects, and functions. You can also specify time step/precision/interval - e.g. 10 minutes.'}">
                <div slot="body">
                    <timePickersTimeAllowedTimes></timePickersTimeAllowedTimes>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('timeWidth')),subTitle:'You can specify allowed the pickers width or make it full width.'}">
                <div slot="body">
                    <timePickersTimeWidth></timePickersTimeWidth>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Time-pickers',
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


<!--====  End of TIMEPICKWR  ====-->
