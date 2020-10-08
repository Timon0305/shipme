<!--===================================
=            GRID            =
====================================-->
<template>
  <div class="appDashboard">
    <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
      <app-header></app-header>
      <div class="body-2  mr-4">The <code> v-responsive</code> comp onent can be used to fix any section to a specific
        aspect ratio</div>
    </div>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Grid')),subTitle:'The v-container can be used for a center focused page, or given the fluid prop to extend its full width. v-layout is used for separating sections and contains the v-flex. The structure of your layout will be as follows, v-container » v-layout » v-flex. Each part of the grid chain is a flex-box element. The final, v-flex, automatically sets its children to have flex: 1 1 auto.',icon:''}">
      <div slot="body">
        <gridusage></gridusage>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('')),subTitle:'Test the layout props in a simple playground.',icon:''}">
      <div slot="body">
        <gridplayground></gridplayground>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Offset')),subTitle:'Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.',icon:''}">
      <div slot="body">
        <gridoffset></gridoffset>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Order')),subTitle:'You can control the ordering of grid items. As with offsets, you can set different orders for different sizes. Design specialized screen layouts that accommodate to any application.',icon:''}">
      <div slot="body">
        <gridorder></gridorder>
      </div>
    </app-card>

    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('direction and alignment')),subTitle:'Designate the direction and alignment in a variety of ways. All of the available flex-box api is available through intuitive helper props.',icon:''}">
      <div slot="body">
        <griddirection-and-align></griddirection-and-align>
      </div>
    </app-card>

    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('')),subTitle:'Row and column breakpoints.Dynamically change your layout based upon resolution. (resize your screen and watch the layout change to a row on small breakpoints)',icon:''}">
      <div slot="body">
        <gridrow-column-breakpoint></gridrow-column-breakpoint>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Grow and Shrink')),subTitle:'Flex components can utilize the grow and shrink props to automatically fill available space in a row or shrink to only use the space needed for its contents.',icon:''}">
      <div slot="body">
        <gridgrow-shrink></gridgrow-shrink>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Nested grid')),subTitle:'Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.',icon:''}">
      <div slot="body">
        <gridnested-grid></gridnested-grid>
      </div>
    </app-card> <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Unique layouts')),subTitle:'The power and flexibility of the Vuetify grid system allows you to create amazing user interfaces.',icon:''}">
      <div slot="body">
        <gridunique-layouts></gridunique-layouts>
      </div>
    </app-card>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: 'Aspect-ratios',
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


<!--====  End of GRID  ====-->
