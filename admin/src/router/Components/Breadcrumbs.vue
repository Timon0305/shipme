<!--=================================
=            BREADCRUMBS            =
==================================-->


<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-breadcrumbs</code> comp onent is a navigational helper for pages. It can accept a<code class='ml-1 mr-1'>Material Icons</code>icon or text characters as a divider. An array of objects can be passed to the<code class='ml-1 mr-1'>items</code>property of the component. Additionally, a scoped slot exists for more control of the breadcrumbs, either utilizing <code> v-breadcrumbs-item </code> or other custom markup.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('iconDividers')),subTitle:'For the icon variant, breadcrumbs can use any icon in Material Design Icons.'}">
                <div slot="body">
                    <breadcrumbsIconDividers></breadcrumbsIconDividers>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('itemSlot')),subTitle:'You can use the scoped `item</code>  slot to customize each breadcrumb.'}">
                <div slot="body">
                    <breadcrumbsItemSlot></breadcrumbsItemSlot>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Breadcrumbs',
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
<!--====  End of BREADCRUMBS  ====-->
