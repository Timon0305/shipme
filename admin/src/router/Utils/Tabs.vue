<!--==========================
=            TABS            =
===========================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-tabs</code> comp onent is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
           
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('fixedTabs')),subTitle:'The **fixed-tabs** prop sets a higher minimum width and applies a new maximum width to <code> v-tabs-items</code>. On desktop screens, the tab items will be centered within the <code> v-tabs</code> comp onent and switch to evenly fill on mobile.'}">
                <div slot="body">
                    <tabsFixedTabs></tabsFixedTabs>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('right')),subTitle:'The **right** prop aligns the tabs to the right'}">
                <div slot="body">
                    <tabsRight></tabsRight>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('content')),subTitle:'Tabs are not the only thing you can put inside the <code> v-tabs</code> comp onent. In this example weve also added a toolbar.'}">
                <div slot="body">
                    <tabsContent></tabsContent>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('search')),subTitle:'Here is another example of additional content inside the <code> v-tabs</code> comp onent.'}">
                <div slot="body">
                    <tabsSearch></tabsSearch>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('iconsAndText')),subTitle:'By using the **icons-and-text** prop you can add icons to each tab item.'}">
                <div slot="body">
                    <tabsIconsAndText></tabsIconsAndText>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('desktop')),subTitle:''}">
                <div slot="body">
                    <tabsDesktop></tabsDesktop>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('alignWithTitle')),subTitle:'Make <code> v-tabs</code>   lined up with the <code> v-toolbar-title</code> comp onent (<code> v-toolbar-side-icon </code> or <code> v-btn` must be used in <code> v-toolbar`). May not work if the tab text is wrapped.'}">
                <div slot="body">
                    <tabsAlignWithTitle></tabsAlignWithTitle>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('grow')),subTitle:'The **grow** prop will make the tab items take up all available space.'}">
                <div slot="body">
                    <tabsGrow></tabsGrow>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('overflowToMenu')),subTitle:'You can use a menu to hold additional tabs, swapping them out on the fly'}">
                <div slot="body">
                    <tabsOverflowToMenu></tabsOverflowToMenu>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('pagination')),subTitle:'If the tab items overflow their container, pagination controls will appear.'}">
                <div slot="body">
                    <tabsPagination></tabsPagination>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icons')),subTitle:'**prev-icon** and **next-icon** can be used for applying custom pagination icons.'}">
                <div slot="body">
                    <tabsIcons></tabsIcons>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Tabs',
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


<!--====  End of TABS  ====-->
