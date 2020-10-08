<template>
  <v-menu transition="slide-y-reverse-transition">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" flat icon>
        <img class="top-flag" src="../../../static/images/flags/020-flag.svg" />
      </v-btn>
    </template>
    <v-card>
      <v-list style="margin-top:50px;">
        <template v-for="(item) in items">
          <v-list-tile v-if="item.action" :key="item.title">
            <v-list-tile-action>
              <img class="top-flag" :src="item.action" />
            </v-list-tile-action>
            <v-list-tile-content class="gray--text">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>
  </v-menu>
</template><script>
export default {
  data() {
    return {
      items: [
        {
          action: "../../../static/images/flags/017-germany.svg",
          title: "Germany"
        },
        {
          action: "../../../static/images/flags/016-spain.svg",
          title: "Spain"
        },
        {
          action: "../../../static/images/flags/Brazil.svg",
          title: "Brazil"
        },
        {
          action: "../../../static/images/flags/020-flag.svg",
          title: "USA"
        }
      ]
    };
  }
};
</script>

<style scoped>
.top-flag {
  border-radius: 50%;
  width: 30px;
}
</style>
