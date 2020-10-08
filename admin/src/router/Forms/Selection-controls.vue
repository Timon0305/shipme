<!--======================================
=            SELECTIONCONTROL            =
=======================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">Selection control components allow a user to select options. These components<code class='ml-1 mr-1'>must</code>be used with the <code> v-model</code> prop as they do not maintain their own state.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('checkboxesBoolean')),subTitle:''}">
                <div slot="body">
                    <selectionControlsCheckboxesBoolean></selectionControlsCheckboxesBoolean>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('checkboxesArray')),subTitle:''}">
                <div slot="body">
                    <selectionControlsCheckboxesArray></selectionControlsCheckboxesArray>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('checkboxesStates')),subTitle:''}">
                <div slot="body">
                    <selectionControlsCheckboxesStates></selectionControlsCheckboxesStates>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('checkboxesColors')),subTitle:'Checkboxes can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.'}">
                <div slot="body">
                    <selectionControlsCheckboxesColors></selectionControlsCheckboxesColors>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('checkboxesInlineTexfield')),subTitle:''}">
                <div slot="body">
                    <selectionControlsCheckboxesInlineTexfield></selectionControlsCheckboxesInlineTexfield>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('radiosDefault')),subTitle:'Radio-groups are by default mandatory. This can be changed with the <code>mandatory</code> prop.'}">
                <div slot="body">
                    <selectionControlsRadiosDefault></selectionControlsRadiosDefault>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('radiosDirection')),subTitle:'Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.'}">
                <div slot="body">
                    <selectionControlsRadiosDirection></selectionControlsRadiosDirection>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('radiosColors')),subTitle:'Radios can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.'}">
                <div slot="body">
                    <selectionControlsRadiosColors></selectionControlsRadiosColors>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('switchesBoolean')),subTitle:''}">
                <div slot="body">
                    <selectionControlsSwitchesBoolean></selectionControlsSwitchesBoolean>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('switchesArray')),subTitle:''}">
                <div slot="body">
                    <selectionControlsSwitchesArray></selectionControlsSwitchesArray>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('switchesStates')),subTitle:''}">
                <div slot="body">
                    <selectionControlsSwitchesStates></selectionControlsSwitchesStates>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('switchesColors')),subTitle:'Switches can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.'}">
                <div slot="body">
                    <selectionControlsSwitchesColors></selectionControlsSwitchesColors>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('labelSlot')),subTitle:'Selection controls labels can be defined in `label</code>  slot - that will allow to use HTML content'}">
                <div slot="body">
                    <selectionControlsLabelSlot></selectionControlsLabelSlot>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Selection-controls',
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


<!--====  End of SELECTIONCONTROL  ====-->
