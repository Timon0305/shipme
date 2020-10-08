<template>
  <div>
    <v-menu transition="slide-y-reverse-transition">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" flat icon>
          <img class="top-user" src="../../../static/images/users/avatar-10.jpg" />
        </v-btn>
      </template>
      <v-card>
        <v-list style="margin-top:50px;">
          <template v-for="(item) in items">
            <v-list-tile v-if="item.action" :key="item.title">
              <v-list-tile-action>
                <i :class="item.action"></i>
              </v-list-tile-action>
              <v-list-tile-content class="gray--text">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          action: "ti-home",
          title: "Home"
        },
        {
          action: "ti-new-window",
          title: "Login"
        },
        {
          action: "ti-user",
          title: "Profile"
        }
      ]
    };
  }
};
</script>

<style scoped>
.top-user {
  border-radius: 50%;
  width: 30px;
}
</style>
