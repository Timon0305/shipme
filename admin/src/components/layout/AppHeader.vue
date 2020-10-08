<!--===============================
=            APPHEADER            =
================================-->

<template>
    <div class="appHeader">
      <div class="d-flex flex-column justify-start align-start">
            <h1 class=" font-weight-bolder  appHeader__title text-capitalize">{{_.startCase(appConfig.title2.name)}}</h1>

      </div>
        <v-breadcrumbs :items="appConfig.breadcrumb"  class="mr-3">

        </v-breadcrumbs>
    </div>
</template>

<script>
    export default {
        name: 'appHeader',
        data() {
            return {
            }
        }
    }
</script>

<style lang="css">
    .appHeader {
        display: flex;
        justify-content: space-between;
        margin-top: 70px;
    }
    .appHeader__title{
        z-index: 9;
    }
    .app__router--small .appHeader {
        display: flex;
       /* margin-left:20px;*/
        justify-content: space-between;
        margin-top: 80px;
    }

   .appHeader .v-breadcrumbs__item {
        font-weight: 600;
       
    }
    @media(max-width:960px){
          .appHeader__title{
        font-size:20px;
        margin-top:10px
    }
     .app__router--small .appHeader {
        display: flex;

        justify-content: space-between;
        margin-top:0px;
    }
    }
</style>

<!--====  End of APPHEADER  ====-->
