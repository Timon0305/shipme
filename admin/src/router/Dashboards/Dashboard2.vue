import { widgetsStatistic } from '../../components';
<!--===============================
=            DASHBOARD2           =
================================-->

<template>
  <div class="appDashboard dashboard2">
    <div :class="{container:appConfig.container}">
      <app-header></app-header>
    </div>
    <v-layout class="flex md12 ml-1" :class="{container:appConfig.container}" row wrap>
   
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Visits'))}">
        <div slot="body">
          <lineChartExample2></lineChartExample2>
        </div>
      </app-card>

      <app-card class="xs12 md8 sm12 d-flex" :obj="{title:_.capitalize(_.startCase('Favorite'))}">

        <div slot="body">
          <sunBurstExample3 />
        </div>
      </app-card>
      <app-card class="xs12 md4 d-flex" :obj="{title:_.capitalize(_.startCase('Sale'))}">

        <div slot="body">
          <v-list two-line subheader>

            <v-list-tile v-for="item in items" :key="item.title" avatar>
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </div>
      </app-card>
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('example1')),subTitle:'Map in example1.'}">
        <div slot="body">
          <mapChartExample1></mapChartExample1>
        </div>
      </app-card>
      <app-card class="xs12 md12 sm12 d-flex" :obj="{title:_.capitalize(_.startCase('Favorite'))}">

        <div slot="body">
          <dataTablesCrud />
        </div>
      </app-card>


    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard2',
    mounted() {
      let vm = this;
      vm.updateSpark();
    },
    data() {
      return {
        pagination: {
          sortBy: 'name'
        },
        items2: [{
            src: '/static/images/small/1.jpg'
          },
          {
            src: '/static/images/small/2.jpg'
          },
          {
            src: '/static/images/small/3.jpg'
          },
          {
            src: '/static/images/small/4.jpg'
          }
        ],
        selected: [],
        spark: [{
            text: 'Sales',
            arr: [1, 4, 3, 4],
            bg: '#ff6f00',
            iconBg: '#fbc02d',
            iconColor: 'white',
            icon: 'attach_money',
            color: ['#fbc02d']
          },
          {
            text: 'Customers',
            arr: [1, 4, 3, 4],
            bg: 'primary',
            iconBg: '#42a5f5',
            iconColor: 'white',
            icon: 'person',
            color: ['#fbc02d', '#1a237e']
          },
          {
            text: 'Favorites',
            arr: [1, 4, 3, 4],
            bg: '#ff8a80',
            iconBg: '#f44336',
            iconColor: 'white',
            icon: 'favorite',
            color: ['red']
          }
        ],
        items: [{
            icon: 'android',
            iconClass: 'lime lighten-1 white--text',
            title: 'Photos',
            subtitle: 'Jan 9, 2014'
          },
          {
            icon: 'favorite',
            iconClass: 'pink lighten-1 white--text',
            title: 'Recipes',
            subtitle: 'Jan 17, 2014'
          },
          {
            icon: 'language',
            iconClass: 'blue lighten-1 white--text',
            title: 'Work',
            subtitle: 'Jan 28, 2014'
          }, {
            icon: 'lock',
            iconClass: 'purple lighten-1 white--text',
            title: 'Favorite',
            subtitle: 'Jan 9, 2014'
          },
          {
            icon: 'offline_bolt',
            iconClass: 'indigo lighten-1 white--text',
            title: 'two2',
            subtitle: 'Jan 17, 2014'
          },
          {
            icon: 'home',
            iconClass: 'grey lighten-1 white--text',
            title: 'Donwnload',
            subtitle: 'Jan 28, 2017'
          },
          {
            icon: 'tag',
            iconClass: 'purple lighten-1 white--text',
            title: 'Home',
            subtitle: 'Jan 9, 2017'
          },
          {
            icon: 'contact_support',
            iconClass: 'indigo lighten-1 white--text',
            title: 'User',
            subtitle: 'Jan 17, 2017'
          },
          {
            icon: 'perm_media',
            iconClass: 'grey lighten-1 white--text',
            title: 'Dashboard',
            subtitle: 'Jan 28, 2014'
          }
        ],
        chartColumn: {
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ['product', '2015', '2016', '2017'],
            source: [{
                product: 'Matcha Latte',
                '2015': 43.3,
                '2016': 85.8,
                '2017': 93.7
              },
              {
                product: 'Milk Tea',
                '2015': 83.1,
                '2016': 73.4,
                '2017': 55.1
              },
              {
                product: 'Cheese Cocoa',
                '2015': 86.4,
                '2016': 65.2,
                '2017': 82.5
              },
              {
                product: 'Walnut Brownie',
                '2015': 72.4,
                '2016': 53.9,
                '2017': 39.1
              },
            ]
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {},
          series: [{
              type: 'bar'
            },
            {
              type: 'bar'
            },
            {
              type: 'bar'
            }
          ]
        }
      }
    },
    methods: {
      toggleAll() {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort(column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      updateSpark() {
        let vm = this;
        for (let x in vm.spark) {
          vm.spark[x].arr.push(_.random(0, 50))
        }
        setTimeout(() => {
          vm.updateSpark()
        }, 2000)
      }
    }
  }

</script>

<style>
  .dashboard2 {
    z-index: 9
  }

  .dashboard2 .offset-sm3 {
    margin: 0 !important;
    flex-basis: 100% !important;
    max-width: 100% !important;
  }

</style>


<!--====  End of DASHBOAR2  ====-->
