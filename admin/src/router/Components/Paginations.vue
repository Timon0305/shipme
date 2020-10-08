<!--================================
=            PAGINATION            =
=================================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-pagination</code> comp onent is used to separate long sets of data so that it is easier for a user to consume information. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a <code> v-model</code> attribute.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('long')),subTitle:'When the number of page buttons exceeds the parent container, the component will truncate the list.'}">
                <div slot="body">
                    <paginationsLong></paginationsLong>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('limit')),subTitle:'You can also manually set the maximum number of visible page buttons with the <code>total-visible</code> prop.'}">
                <div slot="body">
                    <paginationsLimit></paginationsLimit>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('round')),subTitle:'The alternate style for pagination is circle pages.'}">
                <div slot="body">
                    <paginationsRound></paginationsRound>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icons')),subTitle:'Previous and next page icons can be customized with `prev-icon</code> and  `next-icon</code> props.'}">
                <div slot="body">
                    <paginationsIcons></paginationsIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('disabled')),subTitle:'Pagination items can be manually deactivated.'}">
                <div slot="body">
                    <paginationsDisabled></paginationsDisabled>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Paginations',
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

<!--====  End of PAGINATION  ====-->
