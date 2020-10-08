<!--=====================================
=            EXPENSIONPANELS            =
======================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-expansion-panel</code> comp onent is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the <code>expandable</code> property, the expansion-panel can remain open until explicitly closed.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('expand')),subTitle:'Expand expansion-panels will stay open until closed. When providing a model, any value not specified will be interpreted as false.'}">
                <div slot="body">
                    <expansionPanelsExpand></expansionPanelsExpand>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('external')),subTitle:'Expansion panels can be controlled externally by modifying the <code> v-model</code>. Its value corresponds to a zero-based index of the currently opened expansion panel content. If `expand</code> prop is used then it is an array of booleans where the index corresponds to the index of the content.'}">
                <div slot="body">
                    <expansionPanelsExternal></expansionPanelsExternal>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('disabledAndReadonly')),subTitle:'Both the expansion-panel and its content supports the <code>disabled</code> and  `readonly</code> props.'}">
                <div slot="body">
                    <expansionPanelsDisabledAndReadonly></expansionPanelsDisabledAndReadonly>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('popout')),subTitle:'The expansion-panel also has two alternative designs you can activate with the props `popout</code> and  `inset</code>.'}">
                <div slot="body">
                    <expansionPanelsPopout></expansionPanelsPopout>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('customIcons')),subTitle:'Expand action icon can be customized with `expand-icon</code> prop.'}">
                <div slot="body">
                    <expansionPanelsCustomIcons></expansionPanelsCustomIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('iconSlot')),subTitle:'Expand action icon can be customized using `actions</code>  slot.'}">
                <div slot="body">
                    <expansionPanelsIconSlot></expansionPanelsIconSlot>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('focusable')),subTitle:'The expansion-panel headers can be made focusable with the prop <code>focusable</code>.'}">
                <div slot="body">
                    <expansionPanelsFocusable></expansionPanelsFocusable>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Expansion-panels',
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

<!--====  End of EXPENSIONPANELS  ====-->
