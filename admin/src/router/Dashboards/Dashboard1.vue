<!--===============================
=            DASHBOAD1            =
================================-->
<template>
  <div class="appDashboard dashboard1">
    <div :class="{container:appConfig.container}">
      <app-header></app-header>
    </div>
    <v-layout class="flex md12 ml-1" :class="{container:appConfig.container}" row wrap>
      <div class="d-flex layout  wrap">
        <app-card v-for="(x,i) in spark" :key="i" class="xs12 md4 d-flex" :obj="{height:110,elevation:'elevation-1'}">
          <div class="d-flex" slot="header">
            <v-avatar :color="x.iconBg" size="35" style="max-width:35px" class="mr-1 ml-1 mt-1 elevation-1">
              <v-icon :color="x.iconColor" dark>{{x.icon}}</v-icon>
            </v-avatar>
            <div class="d-flex flex-column mt-1">
              <span class="font-weight-bold" style="line-height:1;font-size:18px !important"> {{x.text}}</span>
              <span>
                <span class="font-weight-bold">Total:</span>{{_.sum(x.arr)}}
                <span class="font-weight-bold">Mean:</span>{{_.round(_.mean(x.arr))}}
              </span>
            </div>
          </div>
          <div slot="body">
            <trend :data="x.arr" :stroke-width="3" :gradient="x.color" :height="70" auto-draw smooth>
            </trend>
          </div>
        </app-card>
      </div>
      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('Visits'))}">

        <div slot="body">
          <barChartBarAndLine />
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
      <app-card class="xs12 md4 d-flex" :obj="{title:_.capitalize(_.startCase('Contact'))}">

        <div slot="body">
          <v-list subheader>
            <v-subheader>Recent chat</v-subheader>
            <v-list-tile v-for="item in items2" :key="item.title" avatar>
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon :color="item.active ? 'blue' : 'grey'">chat_bubble</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </div>
      </app-card>
      <app-card class="xs12 md4 d-flex" :obj="{title:_.capitalize(_.startCase('Inbox'))}">

        <div slot="body">

        <v-list two-line>
          <template v-for="(item, index) in items3">
            <v-list-tile
              :key="item.title"
              avatar
              ripple
              @click="toggle(index)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  v-if="selected.indexOf(index) < 0"
                  color="grey lighten-1"
                >
                  star_border
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-2"
                >
                  star
                </v-icon>
              </v-list-tile-action>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
        </div>
      </app-card>

      <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('calendar'))}">

        <div slot="body">

          <calendarMapExample1 />
        </div>
      </app-card>


    </v-layout>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Home',
    mounted() {
      let vm = this;
      vm.updateSpark();
      vm.loadCalendar()
    },
    data() {
      return {
        pagination: {
          sortBy: 'name'
        },
        selected: [],
        calendar: {},
        headers: [{
            text: 'Dessert (100g serving)',
            align: 'left',
            value: 'name'
          },
          {
            text: 'Calories',
            value: 'calories'
          },
          {
            text: 'Fat (g)',
            value: 'fat'
          },
          {
            text: 'Carbs (g)',
            value: 'carbs'
          },
          {
            text: 'Protein (g)',
            value: 'protein'
          },
          {
            text: 'Iron (%)',
            value: 'iron'
          }
        ],
        desserts: [{
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ],
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
        },
        items: [{
            icon: 'android',
            iconClass: 'lime lighten-1 white--text',
            title: 'Instagram',
            subtitle: 'Jan 9, 2014'
          },
          {
            icon: 'favorite',
            iconClass: 'pink lighten-1 white--text',
            title: 'Develepemed',
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
            title: 'Photos',
            subtitle: 'Jan 9, 2014'
          },
          {
            icon: 'offline_bolt',
            iconClass: 'indigo lighten-1 white--text',
            title: 'Recipes14',
            subtitle: 'Jan 17, 2014'
          },
          {
            icon: 'folder',
            iconClass: 'red lighten-1 white--text',
            title: 'Slide',
            subtitle: 'Jan 28, 2014'
          }
        ],
        items2: [{
            active: true,
            title: 'Jason Oner',
            avatar: '../../../static/images/users/avatar-1.jpg'
          },
          {
            active: true,
            title: 'Ranee Carlson',
            avatar: '../../../static/images/users/avatar-2.jpg'
          },
          {
            title: 'Cindy Baker',
             avatar: '../../../static/images/users/avatar-3.jpg'
          },
          {
            title: 'Ali Connors',
             avatar: '../../../static/images/users/avatar-5.jpg'
          }, {
            title: 'David Connors',
             avatar: '../../../static/images/users/avatar-6.jpg'
          }, {
            title: 'Joe Connors',
             avatar: '../../../static/images/users/avatar-7.jpg'
          }
        ],selected: [2],
        items3: [
          {
            action: '15 min',
            headline: 'Brunch this weekend?',
            title: 'Sr. Pugi Connors',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            action: '2 hr',
            headline: 'Summer BBQ',
            title: ' Jennifer',
            subtitle: "Wish I could come, but I'm out of town this weekend."
          },
          {
            action: '6 hr',
            headline: 'Oui oui',
            title: 'Adams',
            subtitle: 'Do you have Paris recommendations? Have you ever been?'
          },
          {
            action: '12 hr',
            headline: 'Birthday gift',
            title: 'Hansen',
            subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
          },

        ]

      }
    },
    methods: {
      loadCalendar() {
        let vm = this;

        function getVirtulData(year) {
          year = year || '2017';
          var date = +echarts.number.parseDate(year + '-01-01');
          var end = +echarts.number.parseDate((+year + 1) + '-01-01');
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for (var time = date; time < end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
            ]);
          }
          return data;
        }
        vm.calendar = {
          title: {
            top: 10,
            left: 'left',
            text: 'Calendar'
          },
          tooltip: {},
          visualMap: {
            min: 0,
            max: 10000,
            type: 'piecewise',
            orient: 'horizontal',
            left: 'left',
            top: 50,
            textStyle: {
              color: '#000'
            }
          },
          calendar: {
            top: 120,
            left: 30,
            right: 30,
            cellSize: [50, 25],
            range: '2016',
            itemStyle: {
              normal: {
                borderWidth: 0.5
              }
            },
            yearLabel: {
              show: true
            }
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData(2016)
          }
        };
      },
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
  .dashboard1 .offset-sm3 {
    margin: 0 !important;

    flex-basis: 100% !important;
    max-width: 100% !important;
  }

</style>



<!--====  End of DASHBOAD1  ====-->
