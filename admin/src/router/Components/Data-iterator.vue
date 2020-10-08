<!--==================================
=            DATAITERATOR            =
===================================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-data-iterator</code> comp onent is used for displaying data, and shares a majority of its functionality with the <code> v-data-table</code> comp onent. Features include sorting, searching, pagination, and selection.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('slots')),subTitle:'The <code> v-data-iterator` has both a header and footer slot for adding extra content'}">
                <div slot="body">
                    <dataIteratorSlots></dataIteratorSlots>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Data-iterator',
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

<!--====  End of DATAITERATOR  ====-->
