<!--=================================
=            DATAPICKERS            =
==================================-->
<template>
    <div class="appDashboard">
        <div class="flex flex-column mb-5" :class="{container:appConfig.container}">
            <app-header></app-header>
            <div class="body-2  mr-4">The <code> v-date-picker </code> is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting date/month.</div>
            <v-layout if="if" user.description:class="{container:appConfig.container}" row="" wrap="" flex=""></v-layout>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateColorable')),subTitle:'Date picker colors can be set using the <code>color</code> and  `header-color</code> props. If `header-color</code> prop is not provided header will use the <code>color</code> prop value.'}">
                <div slot="body">
                    <datePickersDateColorable></datePickersDateColorable>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateDialogAndMenu')),subTitle:'When integrating a picker into a <code> v-text-field`, it is recommended to use the **readonly** prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.      Pickers expose a scoped slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.'}">
                <div slot="body">
                    <datePickersDateDialogAndMenu></datePickersDateDialogAndMenu>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateFormatting')),subTitle:'If you need to display date in the custom format (different than YYYY-MM-DD) you need to use the formatting function.'}">
                <div slot="body">
                    <datePickersDateFormatting></datePickersDateFormatting>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateFormattingMomentDatefns')),subTitle:'Formatting dates is possible also with external libs such as Moment.js or date-fns'}">
                <div slot="body">
                    <datePickersDateFormattingMomentDatefns></datePickersDateFormattingMomentDatefns>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateAllowedDates')),subTitle:'You can specify allowed dates using arrays, objects, and functions.'}">
                <div slot="body">
                    <datePickersDateAllowedDates></datePickersDateAllowedDates>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateMultiple')),subTitle:'Date picker can now select multiple dates with the <code>multiple</code> prop. If using `multiple` then date picker expects its model to be an array.'}">
                <div slot="body">
                    <datePickersDateMultiple></datePickersDateMultiple>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateWidth')),subTitle:'You can specify allowed the pickers width or make it full width.'}">
                <div slot="body">
                    <datePickersDateWidth></datePickersDateWidth>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateBirthday')),subTitle:'Starting with year picker by default, resticting dates range and closing the picker menu after selecting the day make the perfect birthday picker.'}">
                <div slot="body">
                    <datePickersDateBirthday></datePickersDateBirthday>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('datePickerDate')),subTitle:'You can watch the <code>pickerDate` which is the displayed month/year (depending on the picker type and active view) to perform some action when it changes.'}">
                <div slot="body">
                    <datePickersDatePickerDate></datePickersDatePickerDate>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateEvents')),subTitle:'You can specify events using arrays, objects or functions. To change the default color of the event use **event-color** prop. Your **events** function or object can return an array of colors (material or css) in case you want to display multiple event indicators.'}">
                <div slot="body">
                    <datePickersDateEvents></datePickersDateEvents>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateInternationalization')),subTitle:'The date picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the <code>locale</code> prop, and then set the first day of the week with the <code>first-day-of-week</code> prop.'}">
                <div slot="body">
                    <datePickersDateInternationalization></datePickersDateInternationalization>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateIcons')),subTitle:'You can override the default icons used in the picker.'}">
                <div slot="body">
                    <datePickersDateIcons></datePickersDateIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateReadonly')),subTitle:'Selecting new date could be disabled by adding **readonly** prop.'}">
                <div slot="body">
                    <datePickersDateReadonly></datePickersDateReadonly>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('dateCurrent')),subTitle:'By default the current date is displayed using outline button - **show-current** prop allows you to remove the border or select different date to be displayed as the current one.'}">
                <div slot="body">
                    <datePickersDateCurrent></datePickersDateCurrent>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthLight')),subTitle:'Month pickers come in two orientation variations, portrait **(default)** and landscape.'}">
                <div slot="body">
                    <datePickersMonthLight></datePickersMonthLight>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthColorable')),subTitle:'Month picker colors can be set using the <code>color</code> and  `header-color</code> props. If `header-color</code> prop is not provided header will use the <code>color</code> prop value.'}">
                <div slot="body">
                    <datePickersMonthColorable></datePickersMonthColorable>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthDialogAndMenu')),subTitle:'When integrating a picker into a <code> v-text-field`, it is recommended to use the **readonly** prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.    Pickers expose a scoped slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.'}">
                <div slot="body">
                    <datePickersMonthDialogAndMenu></datePickersMonthDialogAndMenu>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthAllowedMonths')),subTitle:'You can specify allowed months using arrays, objects or functions.'}">
                <div slot="body">
                    <datePickersMonthAllowedMonths></datePickersMonthAllowedMonths>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthMultiple')),subTitle:'Month pickers can now select multiple months with the <code>multiple</code> prop. If using `multiple` then the month picker expects its model to be an array.'}">
                <div slot="body">
                    <datePickersMonthMultiple></datePickersMonthMultiple>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthWidth')),subTitle:'You can specify allowed the pickers width or make it full width.'}">
                <div slot="body">
                    <datePickersMonthWidth></datePickersMonthWidth>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthInternationalization')),subTitle:'The month picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the <code>locale</code> prop, and then set the first day of the week with the <code>first-day-of-week</code> prop.'}">
                <div slot="body">
                    <datePickersMonthInternationalization></datePickersMonthInternationalization>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthIcons')),subTitle:'You can override the default icons used in the picker.'}">
                <div slot="body">
                    <datePickersMonthIcons></datePickersMonthIcons>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthReadonly')),subTitle:'Selecting new date could be disabled by adding **readonly** prop.'}">
                <div slot="body">
                    <datePickersMonthReadonly></datePickersMonthReadonly>
                </div>
            </app-card>
            <app-card class="xs12 md12 d-flex" :obj="{title:_.capitalize(_.startCase('monthCurrent')),subTitle:'By default the current month is displayed using outline button - **show-current** prop allows you to remove the border or select different month to be displayed as the current one.'}">
                <div slot="body">
                    <datePickersMonthCurrent></datePickersMonthCurrent>
                </div>
            </app-card>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'Date-pickers',
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


<!--====  End of DATAPICKERS  ====-->
