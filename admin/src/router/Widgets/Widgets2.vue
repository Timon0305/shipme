<!--===================================
=            ASPECT RATIOS            =
====================================-->
<template>
  <div class="appDashboard">
    <div class="flex flex-column " :class="{container:appConfig.container}">
      <app-header></app-header>

    </div>
 
    <v-layout class="ml-0 mr-0" user.description:class="{container:appConfig.container}" row="" wrap="" flex="">
    <app-card class="xs12 md12 d-flex p-" :obj="{title:_.capitalize(_.startCase('List')),subTitle:'',icon:''}">
      <div slot="body">
        <v-layout row wrap>
          <v-flex lg12 sm12>
            <widgets-list class="ml-4"></widgets-list>
          </v-flex>
        </v-layout>
      </div>
    </app-card>
      <app-card  class="xs12 md4 d-flex" :obj="{title:_.capitalize(_.startCase('Sale'))}">

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
              <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">
                    star_border
                  </v-icon>

                  <v-icon v-else color="yellow darken-2">
                    star
                  </v-icon>
                </v-list-tile-action>

              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
            </template>
          </v-list>
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
        ],
        selected: [2],
        items3: [{
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
