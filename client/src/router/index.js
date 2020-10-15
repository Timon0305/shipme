import Vue from "vue";
import VueRouter from "vue-router";
import FormShipping from "../pages/FormShipping/FormShipping.view.vue"
import LandingPage from "../pages/LandingPage/LandingPage.view.vue"
import ShippingSuccess from '../pages/ShippingSuccess/ShippingSuccess.view'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/form-shipping",
        name: "FormShipping",
        component: FormShipping
    },
    {
        path: '/shipping-success',
        name: "ShippingSuccess",
        component: ShippingSuccess
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
