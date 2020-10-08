<!--==============================
=            COMBOBOX            =
===============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">Combobox info coming soon</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('noData')),subTitle:'In this example we utilize a custom **no-data** slot to provide context to the user when searching / creating items.'}">
                <div slot="body">
                    <comboboxNoData></comboboxNoData>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('advanced')),subTitle:'The <code> v-combobox</code> improves upon the added functionality from <code> v-select</code> and  <code> v-autocomplete</code>. This provides you with an expansive interface to create truly customized implementations. This example takes advantage of some more advanced features such as a custom **filter** algorithm, inline list editing and dynamic input items.'}">
                <div slot="body">
                    <comboboxAdvanced></comboboxAdvanced>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('comboboxMultiple')),subTitle:'Previously known as **tags** - user is allowed to enter more than 1 value'}">
                <div slot="body">
                    <comboboxComboboxMultiple></comboboxComboboxMultiple>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Combobox',
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

<!--====  End of COMBOBOX  ====-->
