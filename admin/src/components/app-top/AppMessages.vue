<template>
  <div>
    <v-menu transition="slide-y-reverse-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" icon dark>
          <i class="material-icons">alarm</i>
        </v-btn>
      </template>
      <v-list style="margin-top:50px;" two-line subheader>
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
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Photos",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
