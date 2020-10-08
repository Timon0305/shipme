<!--=============================
=            SELECTS            =
==============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">Select fields components are used for collecting user provided information from a list of options.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('light')),subTitle:'A standard single select has a multitude of configuration options.'}">
                <div slot="body">
                    <selectsLight></selectsLight>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icons')),subTitle:'Use a custom prepended or appended icon.'}">
                <div slot="body">
                    <selectsIcons></selectsIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('multiple')),subTitle:'A multi-select can utilize <code> v-chip` as the display for selected items.'}">
                <div slot="body">
                    <selectsMultiple></selectsMultiple>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customTextAndValue')),subTitle:'You can specify the specific properties within your items array correspond to the text and value fields. By default, this is **text** and **value**. In this example we also use the <code>return-object</code> prop which will return the entire object of the selected item on selection.'}">
                <div slot="body">
                    <selectsCustomTextAndValue></selectsCustomTextAndValue>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('slots')),subTitle:'The <code> v-select</code> comp onents can be optionally expanded with prepended and appended items. This is perfect for customized **select-all** functionality.'}">
                <div slot="body">
                    <selectsSlots></selectsSlots>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('selectionAppearance')),subTitle:'The `selection` scoped slot can be used to customize the way selected values are shown in the input. This is great when you want something like `foo (+20 others) </code> or dont want the selection to occupy multiple lines.'}">
                <div slot="body">
                    <selectsSelectionAppearance></selectsSelectionAppearance>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Selects',
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

<!--====  End of SELECTS  ====-->
