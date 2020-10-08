<!--================================
=            PLAYGROUND            =
=================================-->
<template >

<v-container fluid="fluid">
  <v-layout row="row">
    <v-flex xs4="xs4">
      <v-slider prepend-icon="fas fa-arrows-alt-h" v-model="selected" min="0" max="24" thumb-label="thumb-label"></v-slider>
    </v-flex>
    <v-flex xs6="xs6" offset-xs1="offset-xs1">
      <v-card v-bind:class="{ [`elevation-${selected}`]: true }">
        <v-card-text>
          <p class="text-xs-center ma-0">Elevation {{ selected }}</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        selected: 0
      }
    }
  }
</script>



<!--====  End of PLAYGROUND  ====-->
