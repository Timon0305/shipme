<!--================================
=            NAVIGATION            =
=================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-navigation-drawer</code> comp onent is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without<code class='ml-1 mr-1'>vue-router</code>right out the box.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('permanentClipped')),subTitle:'Navigation drawers can be customized to fit any applications design. While any component can be used within a drawer, the primary ones you will use are <code> v-list</code>  , all of the **list** children components and <code> v-divider`'}">
                <div slot="body">
                    <navigationDrawersPermanentClipped></navigationDrawersPermanentClipped>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('permanentFloating')),subTitle:'A navigation drawer can be placed inside of a card and float over the content background.'}">
                <div slot="body">
                    <navigationDrawersPermanentFloating></navigationDrawersPermanentFloating>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('persistent')),subTitle:'Since drawers support the <code> v-list</code> comp onent, you can easily create customized dashboard solutions.'}">
                <div slot="body">
                    <navigationDrawersPersistent></navigationDrawersPersistent>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('mini')),subTitle:'The navigation drawer also has a mini-variant which can be controlled using the prop <code>mini-variant.sync</code>.'}">
                <div slot="body">
                    <navigationDrawersMini></navigationDrawersMini>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('temporary')),subTitle:'A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked on the persistent drawer when on mobile. Clicking outside of the drawer will cause it to close.'}">
                <div slot="body">
                    <navigationDrawersTemporary></navigationDrawersTemporary>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dark')),subTitle:'Vuetify also supports the dark application theme. This will not override components that have default themes so in some cases it will be necessary to manually set the dark theme accents.'}">
                <div slot="body">
                    <navigationDrawersDark></navigationDrawersDark>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('combined')),subTitle:'Drawers are flexible and are easily adapted to any use-case.'}">
                <div slot="body">
                    <navigationDrawersCombined></navigationDrawersCombined>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('nested')),subTitle:'List tiles can be nested a second level for even more options for your navigation'}">
                <div slot="body">
                    <navigationDrawersNested></navigationDrawersNested>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Navigation-drawers',
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


<!--====  End of NAVIGATION  ====-->
