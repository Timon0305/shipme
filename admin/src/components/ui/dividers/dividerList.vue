<!--=================================
=            DIVIDERLIST            =
==================================-->

<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-toolbar color="orange lighten-1" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Message Board</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              inset
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              inset
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              ripple

            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            header: 'Today'
          },
          { divider: true },
          {
            avatar: '../../../../static/images/users/avatar-7.jpg',
            title: 'Meeting @ Noon',
            subtitle:
              "<span class='text--primary'>Spike Lee</span> &mdash; I'll be in your neighborhood"
          },
          {
           avatar: '../../../../static/images/users/avatar-6.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
            subtitle:
              "<span class='text--primary'>to Operations support</span> &mdash; Wish I could come."
          },
          {
             avatar: '../../../../static/images/users/avatar-5.jpg',
            title: 'Yes yes',
            subtitle:
              "<span class='text--primary'>Bella</span> &mdash; Do you have Paris recommendations"
          },
          {
            header: 'Yesterday'
          },
          { divider: true },
          {
            avatar: '../../../../static/images/users/avatar-4.jpg',
            title: 'Dinner tonight?',
            subtitle:
              "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?"
          },
          {
            avatar: '../../../../static/images/users/avatar-3.jpg',
            title: 'So long',
            subtitle:
              "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?"
          },
          {
            header: 'Last Week'
          },
          { divider: true },
          {
             avatar: '../../../../static/images/users/avatar-1.jpg',
            title: 'Breakfast?',
            subtitle:
              "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?"
          },
          {
           avatar: '/static/images/users/avatar-1.jpg',
            title:
              'Winter Porridge <span class="grey--text text--lighten-1"></span>',
            subtitle:
              "<span class='text--primary'>cc: Daniel</span> &mdash; Tell me more..."
          },
          {
           avatar: '../../../../static/images/users/avatar-2.jpg',
            title: 'Oui oui',
            subtitle:
              "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?"
          }
        ]
      }
    }
  }
</script>


<!--====  End of DIVIDERLIST  ====-->
