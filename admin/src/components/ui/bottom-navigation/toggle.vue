<!--============================
=            TOGGLE            =
=============================-->

<template>
  <v-card
    class="hide-overflow"
    height="200px"
  >
    <v-card-text class="text-xs-center"  dark>
      <v-btn
        flat dark
        color="pink"
        @click="showNav = !showNav"
      >
        Toggle Nav
      </v-btn>
    </v-card-text>

    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      absolute  dark
      color="pink"
    >
      <v-btn flat  dark >
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn flat  dark >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 1,
        showNav: true
      }
    }
  }
</script>


<!--====  End of TOGGLE  ====-->
