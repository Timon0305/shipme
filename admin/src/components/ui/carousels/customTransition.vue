<!--================================
=            TRANSITION            =
=================================-->

<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
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

<style scoped>
#example-custom-transition .fade-enter-active,
#example-custom-transition .fade-leave-active,
#example-custom-transition .fade-leave-to {
  transition: 0.3s ease-out;
  position: absolute;
  top: 0;
  left: 0;
}
#example-custom-transition .fade-enter,
#example-custom-transition .fade-leave,
#example-custom-transition .fade-leave-to {
  opacity: 0;
}

</style>


<!--====  End of TRANSITION  ====-->
