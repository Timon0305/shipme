<!--===========================
=            LISTS            =
============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-list</code> comp onent is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists can contain children and are used in the sidebar.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('avatarTitleAndAction')),subTitle:'Lists also contain slots for a more explicit approach. If you choose this approach, remember you must provide additional props for correct spacing. In this example, we have a tile with an avatar, so we must provide an `avatar</code> property.'}">
                <div slot="body">
                    <listsAvatarTitleAndAction></listsAvatarTitleAndAction>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('iconTwoLinesAndAction')),subTitle:'Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.'}">
                <div slot="body">
                    <listsIconTwoLinesAndAction></listsIconTwoLinesAndAction>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('avatarThreeLines')),subTitle:'For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. If you need more than 3 lines, it is advised to use a [card](/components/cards).'}">
                <div slot="body">
                    <listsAvatarThreeLines></listsAvatarThreeLines>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('avatarSubheaderTitleAndAction')),subTitle:'When a lists slot is used, you must manually define whether it contains headers, or if the items contain an avatar. This is required to maintain proper spacing.'}">
                <div slot="body">
                    <listsAvatarSubheaderTitleAndAction></listsAvatarSubheaderTitleAndAction>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('subheadingsAndDividers')),subTitle:'Lists can contain multiple subheaders and dividers.'}">
                <div slot="body">
                    <listsSubheadingsAndDividers></listsSubheadingsAndDividers>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('cardList')),subTitle:'A list can be combined with a card.'}">
                <div slot="body">
                    <listsCardList></listsCardList>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('titleSubtitleActionsAndActionText')),subTitle:'A list can contain a stack within an action. Ripple and router props can be passed through the main v-list, to the v-list-tile or as a property in the items array.'}">
                <div slot="body">
                    <listsTitleSubtitleActionsAndActionText></listsTitleSubtitleActionsAndActionText>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('actionTitleAndSubtitle')),subTitle:'A list can contain up to 3 lines.'}">
                <div slot="body">
                    <listsActionTitleAndSubtitle></listsActionTitleAndSubtitle>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('expansionLists')),subTitle:'A list can contain a group of items which will display on click. Expansion lists are also used within the <code> v-navigation-drawer</code> comp onent.'}">
                <div slot="body">
                    <listsExpansionLists></listsExpansionLists>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Lists',
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

<!--====  End of LISTS  ====-->
