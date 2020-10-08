<!--====================================
=            HIDEDELIMETERS            =
=====================================-->

<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/images/bg/04.jpg'
          },
          {
            src: '/static/images/bg/03.jpg'
          },
          {
            src: '/static/images/bg/02.jpg'
          },
          {
            src: '/static/images/bg/01.jpg'
          }
        ]
      }
    }
  }
</script>


<!--====  End of HIDEDELIMETERS  ====-->
