<template>
    <b-form @submit.stop.prevent="onPackageSubmit" id="package" class="mt-4">
        <b-form-group label="Tujuan Pengiriman">
            <b-form-select
                    v-model="$v.form.selected.$model"
                    :state="validateState('selected')"
                    aria-describedby="input-1-live-feedback">
                <b-form-select-option value="commercial">Commercial</b-form-select-option>
                <b-form-select-option value="gift">Gift</b-form-select-option>
                <b-form-select-option value="personal">Personal Use</b-form-select-option>
                <b-form-select-option value="sample">Sample</b-form-select-option>
            </b-form-select>
            <b-form-invalid-feedback
                    id="input-1-live-feedback"
            >Please select an option.</b-form-invalid-feedback>
        </b-form-group>

        <div class="form-row">
            <div class="form-group col-md-2">
                <b-form-group id="example-input-group-4" label="Lebar" label-for="example-input-4">
                    <b-input-group  append="cm">
                        <b-form-input
                                id="example-input-4"
                                name="example-input-4"
                                v-model="$v.form.width.$model"
                                :state="validateState('width')"
                                aria-describedby="input-4-live-feedback"
                        ></b-form-input>
                    </b-input-group>

                    <b-form-invalid-feedback
                            id="input-4-live-feedback"
                    >Width is required.</b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class="form-group col-md-2">
                <b-form-group id="example-input-group-5" label="Tinggi" label-for="example-input-5">
                    <b-input-group  append="cm">
                        <b-form-input
                                id="example-input-5"
                                name="example-input-5"
                                v-model="$v.form.height.$model"
                                :state="validateState('height')"
                                aria-describedby="input-5-live-feedback"
                        ></b-form-input>
                    </b-input-group>

                    <b-form-invalid-feedback
                            id="input-5-live-feedback"
                    >Height is required.</b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class="form-group col-md-2">
                <b-form-group id="example-input-group-6" label="Bobot" label-for="example-input-6">
                    <b-input-group  append="cm">
                        <b-form-input
                                id="example-input-6"
                                name="example-input-6"
                                v-model="$v.form.weight.$model"
                                :state="validateState('weight')"
                                aria-describedby="input-6-live-feedback"
                        ></b-form-input>
                    </b-input-group>

                    <b-form-invalid-feedback
                            id="input-6-live-feedback"
                    >Weight is required.</b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class=" col-md-3">
                <b-form-group label="kuantitas">
                    <b-form-select
                            v-model="$v.form.quantity.$model" class="mb-3"
                            :state="validateState('quantity')"
                            aria-describedby="input-2-live-feedback"
                    >
                        <b-form-select-option value="1">1</b-form-select-option>
                        <b-form-select-option value="2">2</b-form-select-option>
                        <b-form-select-option value="3">3</b-form-select-option>
                        <b-form-select-option value="4">4</b-form-select-option>
                        <b-form-select-option value="5">5</b-form-select-option>
                    </b-form-select>
                    <b-form-invalid-feedback
                            id="input-2-live-feedback"
                    >Please select quantity.</b-form-invalid-feedback>
                </b-form-group>

            </div>
            <div class="col-md-3">
                <b-form-group id="example-input-group-2" label="Berat" label-for="example-input-2">
                    <b-input-group  append="kg">
                        <b-form-input
                                id="example-input-2"
                                name="example-input-2"
                                v-model="$v.form.weight.$model"
                                :state="validateState('weight')"
                                aria-describedby="input-2-live-feedback"
                        ></b-form-input>
                    </b-input-group>

                    <b-form-invalid-feedback
                            id="input-2-live-feedback"
                    >Total Weight is required.</b-form-invalid-feedback>
                </b-form-group>
            </div>
        </div>
        <div class="form-row">
            <div class=" col-md-6">
                <b-form-group label="kuantitas">
                    <b-form-select
                            v-model="$v.form.quantity.$model" class="mb-3"
                            :state="validateState('quantity')"
                            aria-describedby="input-2-live-feedback"
                    >
                        <b-form-select-option value="1">1</b-form-select-option>
                        <b-form-select-option value="2">2</b-form-select-option>
                        <b-form-select-option value="3">3</b-form-select-option>
                        <b-form-select-option value="4">4</b-form-select-option>
                        <b-form-select-option value="5">5</b-form-select-option>
                    </b-form-select>
                    <b-form-invalid-feedback
                            id="input-2-live-feedback"
                    >Please select quantity.</b-form-invalid-feedback>
                </b-form-group>

            </div>
            <div class="col-md-6">
                <b-form-group id="example-input-group-2" label="Berat keseluruhan" label-for="example-input-2">
                    <b-input-group  append="kg">
                        <b-form-input
                                id="example-input-2"
                                name="example-input-2"
                                v-model="$v.form.weight.$model"
                                :state="validateState('weight')"
                                aria-describedby="input-2-live-feedback"
                        ></b-form-input>
                    </b-input-group>

                    <b-form-invalid-feedback
                            id="input-2-live-feedback"
                    >Total Weight is required.</b-form-invalid-feedback>
                </b-form-group>
            </div>
        </div>

        <div class="form-row" >
            <div class="form-group col-md-6 h5">
                <b-icon icon="trash" variant="secondary" class="mt-2"></b-icon>
            </div>
            <template>
                <div class="form-group col-md-6 text-right">
                    <b-button class="btn btn-default">+Another Package</b-button>
                </div>
            </template>
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <b-form-group label="Layanan">
                    <b-form-select
                            v-model="$v.form.service.$model"
                            :state="validateState('service')"
                            aria-describedby="input-9-live-feedback"
                            @change="getPackagePrice"
                    >
                        <b-form-select-option value="express">Express</b-form-select-option>
                        <b-form-select-option value="economy">Economy</b-form-select-option>
                    </b-form-select>
                    <b-form-invalid-feedback
                            id="input-9-live-feedback"
                    >Please select service.</b-form-invalid-feedback>
                </b-form-group>

            </div>
        </div>
        <div class="form-row mt-3">
            <div class=" col-md-4">
                <div class="form-row">
                    <div class="form-group col-md-3 h3">
                        <b-icon icon="hash" variant="secondary"></b-icon>
                    </div>
                    <div class="form-group col-md-9">
                        <p class="paramBottom">Total quantity:</p>
                        <p>2 items</p>
                    </div>
                </div>
            </div>

            <div class=" col-md-4">
                <div class="form-row">
                    <div class="form-group col-md-3 h3">
                        <b-icon icon="box" variant="secondary"></b-icon>
                    </div>
                    <div class="form-group col-md-9">
                        <p class="paramBottom">Total volume:</p>
                        <p>2 m3</p>
                    </div>
                </div>
            </div>

            <div class=" col-md-4">
                <div class="form-row">
                    <div class="form-group col-md-3 h3">
                        <b-icon icon="download" variant="secondary"></b-icon>
                    </div>
                    <div class="form-group col-md-9">
                        <p class="paramBottom">Total weight:</p>
                        <p>2 kg</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <b-form-group id="example-input-group-10" label="Total Harga" label-for="example-input-10">
                    <b-form-input
                            id="example-input-10"
                            name="example-input-10"
                    ></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class="form-row justify-content-center">
            <div class="form-group col-md-6">
                <button type="reset" class="btn-lg btn-block btn btn-secondary mr-2">Kembali</button>
            </div>
            <div class="form-group col-md-6">
                <button type="submit" class="btn-lg btn-block btn btn-primary ml-2">Kirim</button>
            </div>
        </div>
    </b-form>
</template>

<script>
    import { BIcon } from 'bootstrap-vue';
    import { validationMixin } from "vuelidate";
    import { required, numeric } from "vuelidate/lib/validators";

    import axios from 'axios';
    import {webUrl} from "../../config";
    const url = webUrl + '/v2/api/client/';
    export default {
        name: "PackageComponent",
        component: {BIcon},
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    selected: null,
                    quantity: null,
                    length: null,
                    width: null,
                    height: null,
                    weight: null,
                    service: null,
                },
            }
        },
        validations: {
            form: {
                selected: {
                    required
                },
                quantity: {
                    required,
                    numeric
                },
                length: {
                    required,
                    numeric
                },
                width: {
                    required,
                    numeric
                },
                height: {
                    required,
                    numeric
                },
                weight: {
                    required,
                },
                service: {
                    required
                }
            }
        },

        methods: {
            validateState(name) {
                const {$dirty, $error} = this.$v.form[name];
                return $dirty ? !$error : null;
            },
            maxWeight: function (event) {
                if (parseFloat(event).toFixed(1) > 2.5) {
                    this.$v.form.weight.$model = 2.5
                } else if (event < 0 || Number.isNaN(event)) {
                    this.$v.form.weight.$model = 0;
                } else {
                    this.$v.form.weight.$model = event
                }
            },
            onPackageSubmit() {
                this.$v.form.$touch();
                if (this.$v.form.$anyError) {
                    return;
                }
                this.form.export = localStorage.getItem('origin').country;
                this.form.import = localStorage.getItem('aim').country;
                this.form.type = 'document';
                console.log(document.getElementsByClassName('totalQuantity'))
            },

            getPackagePrice() {
                this.form.exportCountry = JSON.parse(localStorage.getItem('origin')).country;
                this.form.importCountry = JSON.parse(localStorage.getItem('aim')).country;
                this.form.type = 'document';
                axios.post(url + 'getPackagePrice', this.form)
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>

<style scoped>
    .btn-primary {
        background-color: #011f48 !important;
    }
    .paramBottom {
        margin-bottom: 0px!important;
    }
    .btn-secondary {
        background-color: white !important;
        border-color: #011f48 !important;
        color: #011f48 !important;
    }

</style>
