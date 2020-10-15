<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text-center jumbotron mt-5">
                <div class="form-group check-icon">
                    <b-icon icon="check2-circle" variant="success"></b-icon>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
    import {BIcon} from 'bootstrap-vue';
    export default {
        name: "shippingsuccess",
        component: {BIcon},
    }
</script>

<style scoped>
.jumbotron {
    background: #fff;
}
.check-icon {
    font-size: 100px;
}
</style>
