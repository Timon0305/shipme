<!--==============================
=            TREEVIEW            =
===============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-treeview</code> comp onent is useful for displaying large amounts of nested data.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('fileExplorer')),subTitle:'Using scoped slots we are able to create an intuitive file explorer. Apart from the <code>prepend</code>  slot, there is also one for the <code>label </code>  , and an `append</code>  slot.'}">
                <div slot="body">
                    <treeviewFileExplorer></treeviewFileExplorer>
                </div>
            </app-card>
          
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('directory')),subTitle:'You can dynamically load child data by supplying a _Promise_ callback to the <code>load-children</code> prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array.'}">
                <div slot="body">
                    <treeviewDirectory></treeviewDirectory>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('hotspots')),subTitle:'Customize the **on**, **off** and **indeterminate** icons for your selectable tree. Combine with other advanced functionality like API loaded items.'}">
                <div slot="body">
                    <treeviewHotspots></treeviewHotspots>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Treeview',
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

<!--====  End of TREEVIEW  ====-->
