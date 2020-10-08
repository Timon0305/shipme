<!--==============================
=            profile
            =
===============================-->
<template>
  <div id="profile">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12 sm12 xs12>
          <section>
            <v-parallax  height="300">
              <v-layout column align-center justify-center class="white--text">
                <v-avatar size="86" color="grey lighten-4">
                  <img src="/static/images/users/avatar-1.jpg" alt="Vuetify.js" height="200">
                </v-avatar>
                <h1 class="white--text mb-2 display-1 text-xs-center">Sr. Pug</h1>
              </v-layout>
            </v-parallax>
          </section>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <app-card title="Information" color="white">
            <div slot="body">
              <p class="text-muted font-13">
                I’m Sr. Pug residing in this beautiful world. I create websites and mobile apps with great
                UX
                and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me
                for any queries. One Extra line for filling space. Fill as many you want.
              </p>
            </div>
          </app-card>
        </v-flex>
        <v-flex lg8 sm12 xs12>
          <v-card flat>
            <v-card-text>
              <v-layout align-center mb-3>
                <v-avatar color="grey" class="mr-3">
                  <img src="../../../static/images/users/avatar-1.jpg">
                </v-avatar>
                <strong class="title">Title {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-layout>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <v-card>
            <v-container grid-list-sm fluid>
              <v-layout row wrap>
                <v-flex v-for="n in 9" :key="n" xs4 d-flex>
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
             <v-flex lg8 sm12 xs12>
          <v-card flat>
            <v-card-text>
              <v-layout align-center mb-3>
                <v-avatar color="grey" class="mr-3">
                  <img src="../../../static/images/users/avatar-1.jpg">
                </v-avatar>
                <strong class="title">Title {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-layout>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>

export default {
  components: {

  },
  data() {
    return {
      user: [
        {
            src: "../../../static/imagem/bg/01.jpg",
        }
      ],
      length: 3,
      window: 0,
      cards: [
        {
          title: "Pre-fab homes",
          src: "../../../static/imagem/bg/01.jpg",
          flex: 8
        },
        {
          title: "Favorite road trips",
           src: "../../../../static/imagem/bg/01.jpg",
          flex: 6
        },
        {
          title: "Best airlines",
          src: "../../../static/imagem/bg/01.jpg",
          flex: 6
        }
      ]
    };
  }
};
</script>
<!--====  End ofprofilet  ====-->
