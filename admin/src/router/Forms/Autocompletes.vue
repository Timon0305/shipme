<!--==================================
=            AUTOCOMPLETE            =
===================================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-autocomplete</code> comp onent offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('api')),subTitle:'Easily hook up dynamic data and create a unique experience. The <code> v-autocomple</code>`s expansive prop list makes it easy to fine tune every aspect of the input.'}">
                <div slot="body">
                    <autocompletesApi></autocompletesApi>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('scopedSlots')),subTitle:'With the power of scoped slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.'}">
                <div slot="body">
                    <autocompletesScopedSlots></autocompletesScopedSlots>
                </div>
            </app-card>
          
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('asynchronous')),subTitle:'Sometimes you need to load data externally based upon a search query. Use the <code>search-input</code> prop with the **.sync** modifier when using the <code>autocomplete</code> prop. We also make use of the new `cache-items</code> prop. This will keep a unique list of all items that have been passed to the <code>items</code> prop and is **REQUIRED** when using asynchronous items and the **multiple** prop.'}">
                <div slot="body">
                    <autocompletesAsynchronous></autocompletesAsynchronous>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('advanced')),subTitle:'The <code> v-autocomplete</code> comp onent is extremely flexible and can fit in just about any use-case. Create custom displays for **no-data**, **item** and **selection** slots to provide a unique user experience. Using _scoped slots_ enables you to easily customize the desired look for your application.'}">
                <div slot="body">
                    <autocompletesAdvanced></autocompletesAdvanced>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Autocompletes',
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

<!--====  End of AUTOCOMPLETE  ====-->
