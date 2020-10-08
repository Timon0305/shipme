<!--===================================
=            APPDRAWERLIST            =
====================================-->
<template>
    <div class="appDrawerList">
        <div v-for="level1 in obj.list" :key="level1.id">
            <div @click="setLevel1(level1.id)"  :style="{'border-color':$vuetify.theme.primary}" :class="{'appDrawerList__level1--selected':appConfig.level1==level1.id}" class="appDrawerList__level1  body-2 flex flex-row">
                <v-icon :style="{'color':appConfig.level1==level1.id?'white':true?'#fafafa':'#fafafa'}" class="appDrawerList__level1Icon">{{level1.icon}}</v-icon>
                <span :style="{'color':appConfig.level1==level1.id?'white':true?'#fafafa':'#fafafa'}"  class="appDrawerList__level1Text">{{level1.name}}</span>
                <span class="appDrawerList__navigationArrow">
                   <v-icon dark v-if="appConfig.level1==level1.id">keyboard_arrow_up</v-icon>
                   <v-icon dark v-else>keyboard_arrow_down</v-icon>
                   </span>
            </div>
            <transition-group tag="div" name="fade" mode="in-out">
                <template v-for="level2 in level1.list">
                <div v-if="appConfig.level1==level1.id" :key="level2.id"  @click="setLevel2(level2)" class="appDrawerList__level2" >
                    <span class="appDrawerList__level2Text" :style="{'color':(appConfig.level1==level1.id&&appConfig.level2==level2.id)?'white':appConfig.dark?'white':'#ddd'}"  :class="{'font-weight-black':appConfig.level1==level1.id&&appConfig.level2==level2.id}">{{_.startCase(level2.name)}}</span>
                </div>
                </template>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-drawer-list',
        data() {
            return {}
        },
        created() {
            let vm = this;
        },
        methods: {
            setLevel1(id) {
                let vm = this
                vm.appConfig.level1 = vm.appConfig.level1 == id ? '' : id;
               
            },
            setLevel2(obj) {
                let vm = this
                if(obj.url){
                  window.location.assign(obj.url)
                  return false
                }
                let id=obj.id
                vm.appConfig.level2 = vm.appConfig.level2 == id ? '' : id
                vm.$router.push('/' + vm.appConfig.level1 + '/' + vm.appConfig.level2)
            }
        }
    }
</script>

<style lang="css" scoped>
  .appDrawerList {
    margin-top: 15px
  }

  .appDrawerList__level1Text {
    font-size: 14px;
    width: 100%;
    margin-left: 5px;
    height: 18px;
  }

  .appDrawerList__level1Icon {
    width: 50px;
  }

  .appDrawerList__level1 {
    height: 40px;
    display: flex;
    margin-right: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: start;
    text-transform: capitalize;
    padding-left: 24px;
    padding-right: 10px;
    border-radius: 0 24px 24px 0;
    transition: all .1s ease-out;
  }


  .appDrawerList__level1--selected {
    background: rgba(255, 255, 255, .3);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important
  }

  .appDrawer--dark .appDrawerList__level1--selected {
    background: rgba(71, 71, 71, 0.563);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important
  }
.appDrawerList__navigationArrow{
  color:white;
}
  .appDrawerList__level1--selected::before {
    left: 0;
    width: 5px;
    height: 40px;
    content: "";
    position: absolute;
   border-left:solid 5px;
   border-color: inherit;
  }

  .appDrawerList__level2Text {
    font-size: 14px;
    width: 100%;
    margin-left: 5px;
    height: 14px;
    text-transform: capitalize;
  }

  .appDrawerList__level2 {
    height: 20px;
    margin-top: 10px;
    cursor: pointer;
    margin-left: 60px
  }
    
</style>



<!--====  End of APPDRAWERLIST  ====-->
