
<!--===============================
=            APPDRAWER            =
================================-->

<template>
  <div>
    <div
      :style="{'background-image': 'url('+appConfig.bg+')'}"
      class="appDrawer elevation-5"
      :class="{'appDrawer--small':($vuetify.breakpoint.width>960?appConfig.small:0),'appDrawer--mobile':appConfig.showDrawer,'appDrawer--dark':false}"
    >
      <div class="flex">
        <div class="appDrawer__logo text-center">DONDOCA</div>
      </div>
      <div class="d-flex flex-column justify-center align-center mt-2">
        <div class="appDrawer__avatar elevation-2 mb-2"></div>
        <div class="appDrawer__name">Alex</div>
        <div class="d-flex">
          <v-icon class="appDrawer__status mr-1" size="12">brightness_1</v-icon>
          <div class="appDrawer__online">online</div>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
    <div class="appDrawer__btn">
      <v-btn fab small @click="changeSize()" :color="$vuetify.theme.primary" dark>
        <v-icon>menu</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "appDrawer",
  data() {
    return {
      hover: false
    };
  },
  methods: {
    changeSize() {
      let vm = this;
      if (vm.$vuetify.breakpoint.width > 960) {
        vm.appConfig.small = !vm.appConfig.small;
      } else {
        vm.appConfig.showDrawer = !vm.appConfig.showDrawer;
      }
    }
  }
};
</script>


<style lang="css" scoped>
.appDrawer {
  width: 220px;
  overflow: auto;
  min-width: 50px;
  z-index: 100;
  top: 0;
  position: fixed;
  height: 100vh;
}

.appDrawer__logoImg {
  width: 30px;
}
.logo-img {
  height: 40px;
  width: 40px;
}

.appDrawer::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.appDrawer::-webkit-scrollbar {
  width: 5px;
}

.appDrawer--dark {
  background: #303030;
}

.appDrawer--small:not(:hover) {
  width: 50px !important;
}

.appDrawer--small:not(:hover) .appDrawer__logo {
  display: none;
}

.appDrawer__logo {
  font-size: 30px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  vertical-align: middle !important;
  text-align: center;
  font-weight: 900;
  margin-top: 5px;
}

.appDrawer__btn {
  position: fixed;
  z-index: 100;
  top: 0px;
  margin-left: 192.5px;
}

.appDrawer__avatar {
  background-image: url(../../../static/images/users/avatar-1.jpg);
  background-size: contain;
  height: 70px;
  width: 70px;
  border-radius: 50%;
}

.appDrawer--small:not(:hover) .appDrawer__avatar {
  height: 40px;
  margin-top: 50px;
  max-width: 40px;
}

.appDrawer__name {
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.appDrawer__online {
  font-size: 14px;
  color: #ddd;
  font-weight: 500;
}

.appDrawer__status {
  color: #00c853;
}

.appDrawer--small:not(:hover) .appDrawer__status,
.appDrawer--small:not(:hover) .appDrawer__name,
.appDrawer--small:not(:hover) .appDrawer__online {
  display: none;
}

.appDrawer--small:not(:hover) ~ .appDrawer__btn {
  margin-left: 0px;
}

@media (max-width: 950px) {
  .appDrawer {
    transform: translate3d(-220px, 0, 0);
    background: white;
  }

  .theme--dark .appDrawer {
    transform: translate3d(-220px, 0, 0);
    background: #444;
  }

  .appDrawer__btn {
    transform: translate3d(-180px, 0, 0);
  }

  .appDrawer--mobile.appDrawer {
    transform: translate3d(0, 0, 0);
  }
}
</style>

<style lang="css">
.appDrawer--small.appDrawer:not(:hover) .appDrawerList__navigationArrow {
  display: none;
}
.appDrawer--small.appDrawer:not(:hover) .appDrawerList__level1Text {
  display: none;
}
.appDrawer--small.appDrawer:not(:hover) .appDrawerList__level2 {
  display: none;
}
.appDrawer--small.appDrawer:not(:hover) .appDrawerList__level1--selected {
  padding-right: 10px;
}
.appDrawer--small.appDrawer:not(:hover) .appDrawerList__level1 {
  margin-right: 0;
  padding-left: 7px;
}
</style>
<!--====  End of APPDRAWER  ====-->
