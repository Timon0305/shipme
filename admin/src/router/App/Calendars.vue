<!--===============================
=            CALENDARS            =
================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-calendar</code> comp onent is used to display information in a daily, weekly, or monthly view. The daily view has slots for all day or timed elements, and the weekly and monthly view has a slot for each day.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('slots')),subTitle:'Slots allow you to define the content for each day, time interval for the daily views, and various labels.'}">
                <div slot="body">
                    <calendarsSlots></calendarsSlots>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('events')),subTitle:'This is an example of an event calendar with type of `month</code>. Click on an event to show event details.'}">
                <div slot="body">
                    <calendarsEvents></calendarsEvents>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('weekly')),subTitle:'This is an example of an event calendar with all-day and timed events with a type of `week</code>.'}">
                <div slot="body">
                    <calendarsWeekly></calendarsWeekly>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('daily')),subTitle:'This is an example of calendar with content in each interval slot and a type of `day</code>.'}">
                <div slot="body">
                    <calendarsDaily></calendarsDaily>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('features')),subTitle:'This example allows you to explore many of the features of the <code> v-calendar</code> comp onent.'}">
                <div slot="body">
                    <calendarsFeatures></calendarsFeatures>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Calendars',
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


<!--====  End of CALENDARS  ====-->
