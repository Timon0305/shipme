<!--============================
=            APPTOP            =
=============================-->
<template>
  <div
    class="appTop flex justify-between align-center"
    :class="{'elevation-2':appConfig.scroll>60,'white':(!appConfig.dark)&&appConfig.scroll>60,'appTop--small':appConfig.small}"
  >
    <div class="appTop__leftIcons hidden-sm-and-down">
      <transition name="fade2" mode="out-in">
        <h1 v-if="appConfig.scroll>60" class="appTop__title md1">{{appConfig.title2.name}}</h1>
      </transition>
      <v-btn
        dark
        color="primary"
        @click="appConfig.dark=!appConfig.dark"
        icon
        v-if="appConfig.scroll<60"
      >
        <v-icon :color="appConfig.dark?$vuetify.theme.error:'white'">invert_colors</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        @click="appConfig.container=!appConfig.container"
        dark
        icon
        v-if="appConfig.scroll<60"
      >
        <v-icon>format_indent_increase</v-icon>
      </v-btn>
      <v-btn color="primary" dark @click="toggleFull()" icon v-if="appConfig.scroll<60">
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-btn dark color="primary" @click="nextImage()" icon v-if="appConfig.scroll<60">
        <v-icon>image</v-icon>
      </v-btn>
    </div>
    <div class="appTop__rightIcons mr-3">
      <app-top-search></app-top-search>
      <app-translation></app-translation>
      <app-notifications></app-notifications>
      <app-messages></app-messages>
      <app-user></app-user>
    </div>
  </div>
</template>

<script>
export default {
  name: "appTop",
  methods: {
    toggleFull() {
      var el = document.documentElement,
        rfs =
          el.requestFullscreen ||
          el.webkitRequestFullScreen ||
          el.mozRequestFullScreen ||
          el.msRequestFullscreen;
      if (el.fullscreenEnabled) {
        el.webkitCancelFullScreen();
      }
      rfs.call(el);
    },
    nextImage() {
      let vm = this;
      vm.appConfig.bgIndex++;
      vm.appConfig.bgIndex = vm.appConfig.bgs[vm.appConfig.bgIndex]
        ? vm.appConfig.bgIndex
        : 1;
      vm.$vuetify.theme.primary = vm.appConfig.primary[vm.appConfig.bgIndex];
      vm.appConfig.bg = vm.appConfig.bgs[vm.appConfig.bgIndex];
    }
  },
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      items: [
        {
          title: "Profile"
        },
        {
          title: "Login"
        },
        {
          title: "Messages"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.fade2-enter-active,
.fade2-leave-active {
  transition: margin-top 150ms;
}

.fade2-enter,
  .fade2-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  margin-top: 320px;
}

.appTop {
  min-height: 50px;
  overflow: hidden;
  width: calc(100vw);
  background: transparent;
  background-size: cover;
  z-index: 88;
  max-height: 50px;
  display: flex;
  position: fixed;
  background-position-x: -220px;
  padding: 10px;
  padding-left: 20px;
  align-items: center;
  margin-left: 220px;
  position: fixed;
  top: 0px;

  left: 0px;
}

.appTop__title {
  margin-left: 10px;
  height: 48px;
  vertical-align: middle;
  line-height: 50px;
  font-weight: 700;
  text-transform: capitalize;
}

.appTop--small {
  margin-left: 50px;
  padding: 10px;
  background-position-x: -50px;
}

.appTop__leftIcons {
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
}

.appTop__leftIcons .v-btn,
.appTop__rightIcons .v-btn {
  z-index: 999;
}

.appTop__rightIcons {
  right: 0px;
  display: flex !important;
  align-items: center;
  z-index: 9999;
  position: fixed;
}

@media (max-width: 950px) {
  .appTop {
    min-height: 50px;
    overflow: hidden;
    width: calc(100vw);
    background-size: inherit;
    z-index: 88;
    max-height: 50px;
    display: flex;
    position: fixed;
    background-position-x: 0;
    padding: 10px;
    padding-left: 20px;
    align-items: center;
    margin-left: 0;
    position: fixed;
    top: 0px;

    left: 0px;
  }
}
</style>


<!--====  End of APPTOP  ====-->
