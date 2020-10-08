<!--===========================
=            MENUS            =
============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-menu</code> comp onent shows a menu at the position of the element used to activate it.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('absolute')),subTitle:'Menus can also be placed absolutely on top of the activator element using the <code>absolute</code> prop. Try clicking anywhere on the image.'}">
                <div slot="body">
                    <menusAbsolute></menusAbsolute>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('absoluteWithoutActivator')),subTitle:'Menus can also be used without an activator by using `absolute` together with the props `position-x</code> and  `position-y</code>. Try right-clicking anywhere on the image.'}">
                <div slot="body">
                    <menusAbsoluteWithoutActivator></menusAbsoluteWithoutActivator>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('hover')),subTitle:'Menus can be accessed using hover instead of clicking with the <code>open-on-hover</code> prop.'}">
                <div slot="body">
                    <menusHover></menusHover>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('menus')),subTitle:'Menus can be placed within almost any component.'}">
                <div slot="body">
                    <menusMenus></menusMenus>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customTransition')),subTitle:'Vuetify comes with 3 standard transitions, **scale**, **slide-x** and **slide-y**. You can also create your own and pass it as the transition argument. For an example of how the stock transtions are constructed, visit [here](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts).'}">
                <div slot="body">
                    <menusCustomTransition></menusCustomTransition>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('popover')),subTitle:'A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.'}">
                <div slot="body">
                    <menusPopover></menusPopover>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Menus',
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


<!--====  End of MENUS  ====-->
