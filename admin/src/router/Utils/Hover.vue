<!--===========================
=            HOVER            =
============================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-hover</code> comp onent provides a clean interface for handling hover states for any component.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="1" flex="12"></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('transition')),subTitle:'### Create highly customized components that respond to user interaction.'}">
                <div slot="body">
                    <hoverTransition></hoverTransition>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('transition')),subTitle:'### Create highly customized components that respond to user interaction.'}">
                <div slot="body">
                  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
    >
      <v-img
        :aspect-ratio="16/9"
        src="../../../static/images/bg/01.jpg"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">Cafe Badilico</span>
          <div class="d-flex">
            <v-rating
              :value="value"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ value }}</span>
              <span>({{ reviews }})</span>
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Hover',
        mounted() {},
        data() {
            return   {
      reviews: 413,
      value: 4.5
  }
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


<!--====  End of HOVER  ====-->
