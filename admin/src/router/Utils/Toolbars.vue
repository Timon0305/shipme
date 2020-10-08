<!--=============================
=            TOOLBAS            =
==============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-toolbar</code> comp onent is pivotal to any gui, as it generally is the primary source of site navigation. The toolbar component works great in conjunction with a navigation drawer for hiding links and presenting an activator to open the sidebar on mobile.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('appBar')),subTitle:'An App bar is the primary toolbar of your application. It can contain icons, menus and more.'}">
                <div slot="body">
                    <toolbarsAppBar></toolbarsAppBar>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('appBarItems')),subTitle:'Utilizing the <code> v-toolbar-items</code> comp onent you can use regular <code> v-btn</code> comp onents to create app bar items. Dont forget to apply the <code>flat</code> prop to each button.'}">
                <div slot="body">
                    <toolbarsAppBarItems></toolbarsAppBarItems>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('appBarExtension')),subTitle:'An extension can be used that creates a much more prominent bar. If a title is placed within the extension, it will automatically be shifted to the right to match the normal location it would be at in the main bar.'}">
                <div slot="body">
                    <toolbarsAppBarExtension></toolbarsAppBarExtension>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('columnWidthWithHierarchy')),subTitle:'Toolbars come in 2 variants, light and dark. Light toolbars have dark tinted buttons and dark text whereas Dark toolbars have white tinted buttons and white text.'}">
                <div slot="body">
                    <toolbarsColumnWidthWithHierarchy></toolbarsColumnWidthWithHierarchy>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('flexibleAndCard')),subTitle:'With a few custom styles, you can easily create your amazing user interfaces.'}">
                <div slot="body">
                    <toolbarsFlexibleAndCard></toolbarsFlexibleAndCard>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('floatingWithSearch')),subTitle:'A floating toolbar can be placed over the content that it references.'}">
                <div slot="body">
                    <toolbarsFloatingWithSearch></toolbarsFloatingWithSearch>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('variations')),subTitle:'An app-bar has multiple variations that can be applied with themes and helper classes. These range from light and dark themes, colored and transparent.'}">
                <div slot="body">
                    <toolbarsVariations></toolbarsVariations>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('prominent')),subTitle:'Prominent toolbars add a slot where you can placed elements in the extended area. The content and extension areas will be locked to 64px in height.'}">
                <div slot="body">
                    <toolbarsProminent></toolbarsProminent>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dense')),subTitle:'Dense toolbars reduce their height to 48px. This is also the default behavior for mobile landscape orientation.'}">
                <div slot="body">
                    <toolbarsDense></toolbarsDense>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('scrolling')),subTitle:'A toolbar can transition off screen when scrolling. Here we demonstrate how you can specify the scroll target (default is window). Keep in mind, for this example there is special markup that will not be required in your application.'}">
                <div slot="body">
                    <toolbarsScrolling></toolbarsScrolling>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('appBarMenu')),subTitle:'You can add menu components to a toolbar.'}">
                <div slot="body">
                    <toolbarsAppBarMenu></toolbarsAppBarMenu>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('systemBarsStatusWindow')),subTitle:'System bars are useful for notification icons on mobile and desktop. For live examples of these, head to the pre-defined layouts.'}">
                <div slot="body">
                    <toolbarsSystemBarsStatusWindow></toolbarsSystemBarsStatusWindow>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Toolbars',
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


<!--====  End of TOOLBAS  ====-->
