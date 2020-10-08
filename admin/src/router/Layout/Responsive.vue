<!--===================================
=            ASPECT RATIOS            =
====================================-->
<template>
  <div class="appDashboard">
    <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
      <app-header></app-header>
      <div class="body-2  mr-4">The <code> v-responsive</code> comp onent can be used to fix any section to a specific
        aspect ratio</div>
    </div>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('')),subTitle:'',icon:''}">
      <div slot="body">
        <gridlistssubheader></gridlistssubheader>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Grid List')),subTitle:'',icon:''}">
      <div slot="body">
        <grid-listsusage></grid-listsusage>
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


<!--====  End of RESPONSIVE  ====-->
