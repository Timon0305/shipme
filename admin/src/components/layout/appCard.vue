<!--=============================
=            APPCARD            =
==============================-->

<template>
    <v-flex class=" pr-3  mb-3 mt-3 ">
        <v-sheet class="col-12 appCard  pb-3" :color="obj.color" :class="obj.elevation?obj.elevation:'elevation-1'" :height="obj.height||''">
            <slot name="header">
            <div class="d-flex align-center justify-start appCard__header mb-3">
               <div class="d-flex align-items-center mt-3 appCard__avatar pl-3">
                    <v-avatar :color="appConfig.dark?$vuetify.theme.primary:'#fff'" size="50" class=" elevation-1">
                    <v-icon size="30" :color="appConfig.dark?'#444':$vuetify.theme.primary">{{obj.icon||'bookmark'}}</v-icon>
                </v-avatar>
               </div>
               <div class="flex column align-start justify-start pl-3">
                    <div v-if="!obj.hideTitle" :class="{'pt-3':!obj.subTitle,'pt-2':obj.subTitle}" class="appCard__title">
                    {{obj.title||'Card title'}}
                </div>
                <small class="appCard__subTitle" v-html="obj.subTitle" v-if="obj.subTitle"></small>
               </div>
            </div>
            </slot>
        <v-flex class="pl-3 pr-3">
            <slot name="body"></slot>
        </v-flex>
        </v-sheet>
    </v-flex>
</template>

<script>
    export default {
        name: 'appCard',
        data() {
            return {
                  
            }
        }
    }
</script>

<style lang="css" scoped>

    .appCard__subTitle{
        font-size: 13px !important
    }
    .appCard {
        overflow: hidden;
        border-radius: 8px;
    }
    .appCard__header{
        text-align: start;
       
    }
    .theme--light.v-sheet {
        background: #ffffff
    }
    .appCard__avatar{
        max-width: 60px;
    }
    .theme--dark.v-sheet {
        background: #424242
    }
    .appCard__title {
        font-size: 20px;
    }
    .appCard__subTitle{
        text-align: justify;
        word-wrap: break-word;
        margin-right:15px;
        display: block
    }

    @media(max-width:960px){
        .appCard__avatar{
    display:none !important
}
    }
</style>

<!--====  End of APPCARD  ====-->
