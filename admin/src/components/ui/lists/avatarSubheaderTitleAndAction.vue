<!--==========================
=            LIST            =
===========================-->
<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title class="text-xs-center">New Chat</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar

          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list subheader>
          <v-subheader>Previous chats</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar

          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
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
          { active: true, title: 'Jason Oner', avatar: '/static/images/users/avatar-1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: '/static/images/users/avatar-2.jpg' },
          { title: 'Cindy Baker', avatar: '/static/images/users/avatar-3.jpg' },
          { title: 'Ali Connors', avatar: '/static/images/users/avatar-4.jpg' },
           { title: 'Kyle Mark', avatar: '/static/bg/avatar.jpg' },
          { title: 'John', avatar: '/static/images/users/avatar-5.jpg' }
        ],
        items2: [
          { title: 'Travis Howard', avatar: '/static/images/users/avatar-5.jpg' }
        ]
      }
    }
  }
</script>



<!--====  End of LIST  ====-->
