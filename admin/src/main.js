// The Vue build version to load with the <code>import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
// APp
import App from './App'
//router
import router from './router'

// material
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// roboto
import 'roboto-fontface/css/roboto/roboto-fontface.css';
// vuetify
import 'vuetify/dist/vuetify.css'
//lodash
import _ from 'lodash';
//vuetify
import vuetify from 'vuetify'
//trend
import Trend from 'vuetrend';
//vue-echarts
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack
/*  color*/
import colors from "vuetify/es5/util/colors";
// import ECharts modules manually to reduce bundle size
//echarts
import 'echarts'
import 'echarts/map/js/china'
import 'echarts/map/js/world'
// If you want to use ECharts extensions, just import the extension package and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows
import 'echarts-gl'
import core from './core/Main'
// register component to use
Vue.component('vue-chart', ECharts);
Vue.use(Trend);
import * as components from './components/index'
window._ = _;
window.Vue = Vue;
Vue.use(vuetify, {
    theme: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
});
Vue.use(colors);
Vue.config.productionTip = false;
Vue.mixin({
        components
    });
    //Here you put the name in the header of the pages
Vue.use(core);
let routes = core.routes;
router.afterEach((to, from) => {
    let [n, a, b] = to.path.split('/');
    let r = core;
    r.appConfig.level1 = a || '';
    r.appConfig.level2 = b || '';
    r.appConfig.title1 = routes.find(x => x.id === r.appConfig.level1);
    r.appConfig.title1 = r.appConfig.title1 || {};
    r.appConfig.title1.name = r.appConfig.title1.name || 'Dashboard1';
    r.appConfig.title2 = r.appConfig.title1.list ? r.appConfig.title1.list.find(x => x.id === r.appConfig.level2) : r.appConfig.title1;
    r.appConfig.title2 = r.appConfig.title2 || r.appConfig.title1;
    r.appConfig.breadcrumb = [];
    r.appConfig.breadcrumb.push({
        text: _.startCase(r.appConfig.title1.name),
        disabled: false,
        href: `/${r.appConfig.title1.id}`
    });
    if (r.appConfig.title2.name !== r.appConfig.title1.name) {
        r.appConfig.breadcrumb.push({
            text: _.startCase(r.appConfig.title2.name),
            disabled: false,
            href: `/${r.appConfig.title1.id}/${r.appConfig.title2.id}`
        })
    }

});
let a = new Vue({
    el: '#app',
    router,
    mounted() {

    },
    data() {
        return {}
    },
    template: '<App/>',
    components: {
        App
    }
});
