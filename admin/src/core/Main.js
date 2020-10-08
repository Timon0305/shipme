/**
 *
 * The core folder is responsible
 for all site configuration, to change the theme from dark to light and the image of the header, and now also the colors of the icons change as selected.If you want to change you need to change this file.
 */

import routes from './routes'
class Main {
    constructor(o) {
        let vm = this;
        vm.routes = o.routes
        window.onscroll = function(params) {
            vm.appConfig.scroll = document.querySelector('html').scrollTop
        }
        vm.appConfig = {
            dark: false,
            showDrawer: false,
            container: false,
            small: false,
            scroll: 0,
            hide: true,
            title1: {},
            breadcrumb: [],
            title2: {},
            bgs: ['/static/images/bg/03.jpg', '/static/images/bg/02.jpg', '/static/images/bg/03.jpg',
                '/static/images/bg/04.jpg', '/static/images/bg/05.jpg'
            ],
            primary: ['#5729d8', '#6b9dda', '#5729d8', '#e8927b', '#dc2e2e', '#edcc61'],
            bgIndex: 0,
            bg: '/static/images/bg/03.jpg',
            level1: 'home',
            level2: 'dashv1'
        }
    }


    install(Vue, opt) {
        let vm = this;

        Vue.prototype._ = _
        Vue.mixin({
            props: {
                obj: {
                    type: Object,
                    default () {
                        return {}
                    }
                }
            },
            data() {
                return {
                    appConfig: vm.appConfig,
                    routes: vm.routes,


                }
            },



        })
    }
}


let r = new Main({
    routes
})

export default r