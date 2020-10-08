<!--============================
=            FOOTER            =
=============================-->
<template>
    <div  class="appDashboard">
        <div class="flex flex-column mb-5"  :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-footer</code> comp onent is used for displaying general information that a user might want to access from any page within your site.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('companyFooter')),subTitle:'The footer component as a basic company footer with links.'}">
                <div slot="body">
                    <footerCompanyFooter></footerCompanyFooter>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('indigoFooter')),subTitle:'The footer component with Indigo background color and social media icons and button.'}">
                <div slot="body">
                    <footerIndigoFooter></footerIndigoFooter>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('tealFooter')),subTitle:'The footer component with a Teal color header and columns and rows of links.'}">
                <div slot="body">
                    <footerTealFooter></footerTealFooter>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Footer',
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


<!--====  End of FOOTER  ====-->
