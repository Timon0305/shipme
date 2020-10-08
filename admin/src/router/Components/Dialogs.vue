<!--=============================
=            DIALOGS            =
==============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-dialog</code> comp onent inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('withoutActivator')),subTitle:'If for some reason you are unable to use the activator slot, be sure to add the <code>.stop</code>  modifier to the event that triggers the dialog.'}">
                <div slot="body">
                    <dialogsWithoutActivator></dialogsWithoutActivator>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('modal')),subTitle:'Similar to a Simple Dialog, except that its not dismissed when touching outside.'}">
                <div slot="body">
                    <dialogsModal></dialogsModal>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('fullscreen')),subTitle:'Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.'}">
                <div slot="body">
                    <dialogsFullscreen></dialogsFullscreen>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('form')),subTitle:'Just a simple example of a form in a dialog.'}">
                <div slot="body">
                    <dialogsForm></dialogsForm>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('scrollable')),subTitle:'Example of a dialog with scrollable content.'}">
                <div slot="body">
                    <dialogsScrollable></dialogsScrollable>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('overflowed')),subTitle:'Modals that do not fit within the available window space will scroll the container.'}">
                <div slot="body">
                    <dialogsOverflowed></dialogsOverflowed>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('advanced')),subTitle:'Choosing an option immediately closes the menu. Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog.'}">
                <div slot="body">
                    <dialogsAdvanced></dialogsAdvanced>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('loader')),subTitle:'The <code> v-dialog</code> comp onent makes it easy to create a customized loading experience for your application.'}">
                <div slot="body">
                    <dialogsLoader></dialogsLoader>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Dialogs',
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

<!--====  End of DIALOGS  ====-->
