<!--=================================
=            APPPARALLAX            =
==================================-->
<template>
    <div class="appParallax" :style="{'background-image': 'url('+appConfig.bg+')'}" >
        <svg class="appParallax__svg"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 47.1">
    <path class="appParallax__path" :class="{'appParallax__svg--dark':appConfig.dark}" d="M300,46.9L0,47.1V8.9c0,0,21.1,14.3,65.2,14.1c40.6-0.2,76.4-23,128-23C243.3,0,300,16.4,300,16.4V46.9z"/>
    </svg>
    </div>
</template>

<script>
    export default {
        name: 'appParallax',
        data() {
            return {
            }
        }
    }
</script>

<style lang="css" scoped>
    .appParallax {
        max-height: 350px;
        width: 100%;
        background-size: cover;
        
        position: fixed;
        left: 0px;
        top: 0px;
       
        z-index: 0
    }
    .appParallax__svg{
        z-index:999;margin-top:200px
    }
    .appParallax__path {
        z-index: 0;
        fill: #fafafa;
    }
    .appParallax__svg--dark{
        fill: #303030
    }
    @media(max-width:1200px){
      .appParallax {
        max-height: 300px;
        width: 100%;
        background-size: cover;
        
        position: fixed;
        left: 0px;
        top: 0px;
       
        z-index: 0
    }
       .appParallax__svg{
        z-index:999;margin-top:400px
    }
    }
</style>


<!--====  End of APPPARALLAX  ====-->
