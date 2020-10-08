<!--===========================
=            FORMS            =
============================-->

<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use [Vee-validate](https://github.com/baianat/Vee-validate) and [vuelidate](https://github.com/monterail/vuelidate).</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('rules')),subTitle:'Rules allow you to apply custom validation on all form components. These are validated sequentially and will display a **maximum** of 1 error at a time, so make sure you order your rules accordingly.'}">
                <div slot="body">
                    <formsRules></formsRules>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('validationWithSubmitAndClear')),subTitle:'The <code> v-form</code> comp onent has **three** functions that can be accessed by setting a _ref_ on the component. A ref allows us to access internal methods on a component, for example, `&lt;v-form ref=&quot;form&quot;&gt;</code>. **this.$refs.form.validate()** will validate all inputs and return if they are all valid or not. **this.$refs.form.reset()** will clear validation errors from all inputs. **this.$refs.form.resetValidation()** will only reset input validation and not alter their state.'}">
                <div slot="body">
                    <formsValidationWithSubmitAndClear></formsValidationWithSubmitAndClear>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('vuelidate')),subTitle:'**vuelidate** is a simple, lightweight model-based validation for Vue.js. [Documentation](https://monterail.github.io/vuelidate/#getting-started)'}">
                <div slot="body">
                    <formsVuelidate></formsVuelidate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('veeValidate')),subTitle:'**vee-validate** is a template Based Validation Framework for Vue.js. [Documentation](https://baianat.github.io/vee-validate/)'}">
                <div slot="body">
                    <formsVeeValidate></formsVeeValidate>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Forms',
        mounted() {},
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style>
    .appDashboard {
        z-index: 9;
    }

    .appDashboard__bigChart {
        width: 100%;
    }
</style>

<!--====  End of FORMS  ====-->
