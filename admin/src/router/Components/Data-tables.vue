<!--================================
=            DATALABELS            =
=================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-data-table</code> comp onent is used for displaying tabular data. Features include sorting, searching, pagination, inline-editing, header tooltips, and row selection.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('noData')),subTitle:'The `no-data</code>  slot can display custom HTML when theres no data.'}">
                <div slot="body">
                    <dataTablesNoData></dataTablesNoData>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('headers')),subTitle:'The <code>items</code> and  <code>headers</code> slots can accept either a collection of &lt;kbd&gt;td/th&lt;/kbd&gt; tags, or if you want control of the entire row, a &lt;kbd&gt;tr&lt;/kbd&gt; tag.'}">
                <div slot="body">
                    <dataTablesHeaders></dataTablesHeaders>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('headerCell')),subTitle:'If you only want to apply some common markup or effect on each of the header cells, you can use the slot `headerCell</code>. In this example is has been used to apply a tooltip to each header.'}">
                <div slot="body">
                    <dataTablesHeaderCell></dataTablesHeaderCell>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('progress')),subTitle:'There is also a <code>progress</code> slot for when you want to customize the display for the data tables `loading` state.  By default this is an `indeterminate` <code> v-progress-linear</code>'}">
                <div slot="body">
                    <dataTablesProgress></dataTablesProgress>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('footer')),subTitle:'There is also a <code>footer</code>  slot for when you want to add some extra functionality to tables, for example per column filtering or search.'}">
                <div slot="body">
                    <dataTablesFooter></dataTablesFooter>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('expand')),subTitle:'The <code> v-data-table</code> comp onent also supports expandable rows using the <code>expand</code>  slot. By default expanding a row closes all remaining rows. You can use the prop <code>expand` on <code> v-data-table` to prevent expanded rows from closing when clicking on another row.'}">
                <div slot="body">
                    <dataTablesExpand></dataTablesExpand>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('pageText')),subTitle:'You can customize the page text displaying the range and total items by using the <code>pageText</code>  slot.'}">
                <div slot="body">
                    <dataTablesPageText></dataTablesPageText>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('select')),subTitle:'Selectable rows allow you to perform an action on specific and all rows.'}">
                <div slot="body">
                    <dataTablesSelect></dataTablesSelect>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('search')),subTitle:'The data table exposes a <code>search</code> prop that allows you to filter your data.'}">
                <div slot="body">
                    <dataTablesSearch></dataTablesSearch>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customIcons')),subTitle:'Previous/next pagination icons and sort icon can be customized with **prev-icon**, **next-icon** and **sort-icon** props.'}">
                <div slot="body">
                    <dataTablesCustomIcons></dataTablesCustomIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('paginate')),subTitle:'Pagination can be controlled externally by using the <code>pagination</code> prop. Remember that you must apply the <code>.sync</code>  modifier.'}">
                <div slot="body">
                    <dataTablesPaginate></dataTablesPaginate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('sort')),subTitle:'Sorting can also be controlled externally by using the <code>pagination</code> prop. Remember that you must apply the <code>.sync</code>  modifier. You can also use the prop to set the default sorted column.'}">
                <div slot="body">
                    <dataTablesSort></dataTablesSort>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('server')),subTitle:'If youre loading data from a backend and want to paginate and sort the results before displaying them, you can use the <code>total-items</code> prop. Defining this prop will disable the built-in sorting and pagination, and you will instead need to use the <code>pagination</code> prop to listen for changes. Use the <code>loading</code> prop to display a progress bar while fetching data.'}">
                <div slot="body">
                    <dataTablesServer></dataTablesServer>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('headerless')),subTitle:'You can apply the <code>hide-headers</code> and  `hide-actions</code> props to remove the default header and footer respectively.'}">
                <div slot="body">
                    <dataTablesHeaderless></dataTablesHeaderless>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('editdialog')),subTitle:'The <code> v-edit-dialog</code> comp onent is used for inline-editing within data tables. You can block closing the dialog when clicked outside by adding the **persistent** prop.'}">
                <div slot="body">
                    <dataTablesEditdialog></dataTablesEditdialog>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('crud')),subTitle:'data-table with CRUD actions using a <code> v-dialog</code> comp onent for editing each row'}">
                <div slot="body">
                    <dataTablesCrud></dataTablesCrud>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Data-tables',
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


<!--====  End of DATALABELS  ====-->
