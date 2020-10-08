<!--===============================
=            TIMELINES            =
================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-timeline </code> is useful for stylistically displaying chronological information.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('small')),subTitle:'Easily alternate styles to provide a unique design.'}">
                <div slot="body">
                    <timelinesSmall></timelinesSmall>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icons')),subTitle:'Conditionally use icons within the <code> v-timeline-item`s dot to provide additional context.'}">
                <div slot="body">
                    <timelinesIcons></timelinesIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('avatars')),subTitle:'Insert avatars into dots with use of `icon</code>  slot and <code> v-avatar</code>.'}">
                <div slot="body">
                    <timelinesAvatars></timelinesAvatars>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('color')),subTitle:'Colors dots create visual breakpoints that make your timelines easier to read.'}">
                <div slot="body">
                    <timelinesColor></timelinesColor>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('slot')),subTitle:'The **opposite** slot provides an additional layer of customization within your timelines.'}">
                <div slot="body">
                    <timelinesSlot></timelinesSlot>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('alert')),subTitle:'Dense timelines position all content to the right. In this example, <code> v-alert` replaces the card to provide a different design.'}">
                <div slot="body">
                    <timelinesAlert></timelinesAlert>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('advanced')),subTitle:'Modular components allow you to create highly customized solutions that just work.'}">
                <div slot="body">
                    <timelinesAdvanced></timelinesAdvanced>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Timelines',
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


<!--====  End of TIMELINES  ====-->
