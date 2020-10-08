<!--============================
=            ALERTS            =
=============================-->
<template>
  <div class="appDashboard">
    <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
      <app-header></app-header>
      <div class="body-2  mr-4">The <code> v-alert</code> comp onent is used to convey important information to the user.
        It comes in 4 variations,<code class='ml-1 mr-1'>success</code><code class='ml-1 mr-1'>info</code><code class='ml-1 mr-1'>warning</code>and<code
          class='ml-1 mr-1'>error</code> These have default icons assigned which can be changed and represent different
        actions</div>
      <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
      <!-- closeble -->
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('closable')),subTitle:'Using <code> v-model</code>, you can control the state of the Alert. If you dont want to assign a v-model and just display the alert, you can simply assign the prop <code>value</code>.'}">
        <div slot="body">
          <alertsClosable></alertsClosable>
        </div>
      </app-card>
      <!-- icons -->
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('icon')),subTitle:'You can easily assign a custom icon or remove it altogether.'}">
        <div slot="body">
          <alertsIcon></alertsIcon>
        </div>
      </app-card>

      <!-- Transition -->
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('transition')),subTitle:'You can apply a custom transition to the show/hide of the alert.'}">
        <div slot="body">
          <alertsTransition></alertsTransition>
        </div>
      </app-card>
      <!-- OUtline -->
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('outline')),subTitle:'Outline alerts inherit their borders from the current color applied.'}">
        <div slot="body">
          <alertsOutline></alertsOutline>
        </div>
      </app-card>
      <!-- Usage -->
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Usage')),subTitle:''}">
        <div slot="body">
          <div>
            <v-alert :value="true" type="success">
              This is a success alert.
            </v-alert>

            <v-alert :value="true" type="info">
              This is a info alert.
            </v-alert>

            <v-alert :value="true" type="warning">
              This is a warning alert.
            </v-alert>

            <v-alert :value="true" type="error">
              This is a error alert.
            </v-alert>
          </div>
        </div>
      </app-card>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: 'Alerts',
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


<!--====  End of ALERTS  ====-->
