<!--==============================
=            ERROR404            =
===============================-->


<template>
  <v-content :class="{container:appConfig.small}">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm6 md6>

    <article>
      <h1 class="header">404</h1>

    </article>

                <v-btn color="primary" @click="$router.push(`/dashboards/dashboard1`)">
                      Dashboard
                </v-btn>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
  export default {
    name: 'error404',

    props: {
      lang: {
        type: String,
        default: 'en'
      }
    },

    created () {

    }
  }
</script>
<style>
.display-3{
      transform: translateZ(1000px);
  z-index: 999999999
}
.page-error {
  background-color: #0A7189;
  color: #fff;
  font: 100% "Roboto", sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  width: 400px;
}

.srchFld:focus {
  outline-color: rgba(255, 255, 255, 0);
}

/* 404 Styling */
.header {
  font-size: 13rem;
  font-weight: 700;
  margin: 2% 0 2% 0;
 text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px,
    rgba(61, 61, 61, 0.3) 3px 3px;
}

/* Error Styling */
.error {
  margin: -70px 0 2% 0;
  font-size: 7.4rem;
  text-shadow: 0px 3px 0px #7f8c8d;
  font-weight: 100;
}

</style>

<!--====  End of 404  ====-->

