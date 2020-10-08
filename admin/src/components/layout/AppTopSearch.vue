<!--==================================
=            APPTOPSEARCH            =
===================================-->
<template>
        <div>
    <v-icon class="position-absolute mt-2 ml-2" color="#444" small>search</v-icon>    
        <div contenteditable class="appTopSearch pl-4 d-flex"  ></div>
    </div>
   </template>

<script>
    export default {
        name: 'app-top-search',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="css" scoped>
    .appTopSearch:focus{
            outline: none
    }
    .position-absolute{
        position:absolute
    }
    .appTopSearch{
        height: 30px;
        padding-top:2px;
        font-family: Roboto;
          font-weight: 400;
        padding-left:10px;
         background: rgba(255,255,255,.2);
        min-width: 0px;
        border:solid 1px transparent;
        border-radius:30px;
        transition: all .2s;
    }
    .appTopSearch:hover{
         height: 30px;
         font-weight: 600;
        padding-top:2px;
        padding-left:10px;
        width: 180px;
        background: transparent;
        min-width: 150px;
        border:solid 3px #444;
        border-radius:30px;
    }
    .appTopSearch:focus{
         height: 30px;
         font-weight: 600;
        padding-top:2px;
        padding-left:10px;
        width: 180px;
        background: transparent;
        min-width: 150px;
        border:solid 3px #444;
        border-radius:30px;
    }
</style>


<!--====  End of APPTOPSEARCH  ====-->
