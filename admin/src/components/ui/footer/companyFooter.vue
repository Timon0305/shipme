<!--============================
=            FOOTER            =
=============================-->

<template>
  <v-footer height="auto" :color="appConfig.dark?'#303030':'#ffffff'" class="companyFooter">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" dark flat round>{{ link }}</v-btn>
      <v-flex py-3 text-xs-center white--text xs12>
        &copy;2019
        <strong>Dondocas Admin</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>
<style scoped>
.companyFooter {
  background-attachment: fixed;
  border-top: solid 1px #ddd !important;
}
</style>


<!--====  End of FOOTER  ====-->
