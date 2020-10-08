<template>
  <div>
    <v-menu transition="slide-y-reverse-transition">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon color="primary">
          <i class="material-icons">assignment_ind</i>
        </v-btn>
      </template>
      <v-list style="margin-top:50px;">
        <v-list-tile v-for="item in items" :key="item.title" avatar>
          <v-list-tile-action>
            <v-icon v-if="item.icon" color="pink">star</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-avatar>
            <img :src="item.avatar" />
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          icon: true,
          title: "Jason Oner",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          title: "Travis Howard",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
        },
        {
          title: "Ali Connors",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
        },
        {
          title: "Cindy Baker",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
