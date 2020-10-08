<!--===================================
=            ASPECT RATIOS            =
====================================-->
<template>
  <div class="appDashboard">
    <div class="flex flex-column " :class="{container:appConfig.container}">
      <app-header></app-header>

    </div>
     <v-layout class="ml-0 mr-0" user.description:class="{container:appConfig.container}" row="" wrap="" flex="">
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Mini')),subTitle:'',icon:''}">
      <div slot="body">
        <v-layout row wrap>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'mini' + index">
            <widgets-card mini v-bind="item"></widgets-card>
          </v-flex>
        </v-layout>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Basic')),subTitle:'',icon:''}">
      <div slot="body">
        <v-layout row wrap>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic' + index">
            <widgets-card v-bind="item"></widgets-card>
          </v-flex>
        </v-layout>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('basic-top-nav')),subTitle:'',icon:''}">
      <div slot="body">
        <v-layout row wrap>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic-top-nav' + index">
            <widgets-card top-nav v-bind="item"></widgets-card>
          </v-flex>
        </v-layout>
      </div>
    </app-card>
    <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('bottom-nav')),subTitle:'',icon:''}">
      <div slot="body">
        <v-layout row wrap>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'bottom-nav' + index">
            <widgets-card bottom-nav v-bind="item"></widgets-card>
          </v-flex>
        </v-layout>

      </div>
    </app-card>

</v-layout>




  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    widgets: 'Aspect-ratios',
    mounted() {},
    data() {
      return {
        users: [{
            jobTitle: "Web Developer",
            name: "Michael Wang",
            avatar: {
              src: "../../../static/images/users/avatar-1.jpg",
              size: "36"
            }
          },
          {
            jobTitle: "Web Designer",
            name: "Jessie J",
            color: "pink",
            dark: true,
            avatar: {
              src: "../../../static/images/users/avatar-1.jpg",
              size: "36"
            }
          },
          {
            jobTitle: "Web Developer",
            name: "Jim J",
            color: "teal",
            dark: true,
            avatar: {
              src: "../../../static/images/users/avatar-1.jpg",
              size: "36"
            }
          },
          {
            jobTitle: "Product Manager",
            name: "John Doe",
            dark: true,
            cardBgImage: "../../../static/images/1.png",
            avatar: {
              src: "../../../static/images/users/avatar-1.jpg",
              size: "36"
            }
          }
        ]
      };
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
