<template>
    <b-form @submit.stop.prevent="onPackageSubmit" id="package" class="mt-4">
        <b-form-group label="Tujuan Pengiriman">
            <b-form-select
                    v-model="$v.form.purpose.$model"
                    :state="validateState('purpose')"
                    aria-describedby="input-1-live-feedback">
                <b-form-select-option value="commercial">Commercial</b-form-select-option>
                <b-form-select-option value="gift">Gift</b-form-select-option>
                <b-form-select-option value="personal">Personal Use</b-form-select-option>
                <b-form-select-option value="sample">Sample</b-form-select-option>
            </b-form-select>
            <b-form-invalid-feedback
                    id="input-1-live-feedback"
            >Please select an option.
            </b-form-invalid-feedback>
        </b-form-group>

        <div class="form-row">
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group label="kuantitas" description="max = 5 items">
                            <b-form-select
                                    v-model="$v.form.quantity.$model"
                                    :state="validateState('quantity')"
                                    aria-describedby="input-2-live-feedback"
                                    @change="calculateItem"
                            >
                                <b-form-select-option value="1">1</b-form-select-option>
                                <b-form-select-option value="2">2</b-form-select-option>
                                <b-form-select-option value="3">3</b-form-select-option>
                                <b-form-select-option value="4">4</b-form-select-option>
                                <b-form-select-option value="5">5</b-form-select-option>
                            </b-form-select>
                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Please select quantity.
                            </b-form-invalid-feedback>
                        </b-form-group>

                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="form-row">
                    <div class="col-md-4">
                        <b-form-group id="example-input-group-4" label="Lebar" label-for="example-input-4">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-4"
                                        name="example-input-4"
                                        v-model="$v.form.length.$model"
                                        :state="validateState('length')"
                                        aria-describedby="input-4-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-4-live-feedback"
                            >Width is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-5" label="Tinggi" label-for="example-input-5">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-5"
                                        name="example-input-5"
                                        v-model="$v.form.width.$model"
                                        :state="validateState('width')"
                                        aria-describedby="input-5-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-5-live-feedback"
                            >Height is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-6" label="Bobot" label-for="example-input-6">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-6"
                                        name="example-input-6"
                                        v-model="$v.form.height.$model"
                                        :state="validateState('height')"
                                        aria-describedby="input-6-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-6-live-feedback"
                            >Weight is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group id="example-input-group-2" label="Berat"
                                      label-for="example-input-2">
                            <b-input-group append="kg">
                                <b-form-input
                                        id="example-input-2"
                                        name="example-input-2"

                                        v-model="$v.form.weight.$model"
                                        :state="validateState('weight')"
                                        v-bind:value="$v.form.weight.$model"
                                        aria-describedby="input-2-live-feedback"
                                        @change="calculateWeight"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Total Weight is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-1 h5 text-right">
                <b-icon icon="trash" variant="secondary" class="mt-2" style="height: 83%;"></b-icon>
            </div>
        </div>
        <div class="form-row" v-show="addMore >= 1 ">
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group>
                            <b-form-select
                                    v-model="$v.form.quantity1.$model"
                                    :state="validateState('quantity1')"
                                    aria-describedby="input-2-live-feedback"
                                    @change="calculateItem"
                            >
                                <b-form-select-option value="1">1</b-form-select-option>
                                <b-form-select-option value="2">2</b-form-select-option>
                                <b-form-select-option value="3">3</b-form-select-option>
                                <b-form-select-option value="4">4</b-form-select-option>
                                <b-form-select-option value="5">5</b-form-select-option>
                            </b-form-select>
                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Please select quantity.
                            </b-form-invalid-feedback>
                        </b-form-group>

                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="form-row">
                    <div class="col-md-4">
                        <b-form-group id="example-input-group-4" label-for="example-input-4">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-4"
                                        name="example-input-4"
                                        v-model="$v.form.length1.$model"
                                        :state="validateState('length1')"
                                        aria-describedby="input-4-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-4-live-feedback"
                            >Width is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-5" label-for="example-input-5">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-5"
                                        name="example-input-5"
                                        v-model="$v.form.width1.$model"
                                        :state="validateState('width1')"
                                        aria-describedby="input-5-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-5-live-feedback"
                            >Width is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-6" label-for="example-input-6">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-6"
                                        name="example-input-6"
                                        v-model="$v.form.height1.$model"
                                        :state="validateState('height1')"
                                        aria-describedby="input-6-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-6-live-feedback"
                            >Height is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group id="example-input-group-2" label-for="example-input-2">
                            <b-input-group append="kg">
                                <b-form-input
                                        id="example-input-2"
                                        name="example-input-2"

                                        v-model="$v.form.weight1.$model"
                                        :state="validateState('weight1')"
                                        v-bind:value="$v.form.weight1.$model"
                                        aria-describedby="input-2-live-feedback"
                                        @change="calculateWeight"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Total Weight is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-1 h5 text-right">
                <b-icon icon="trash" variant="secondary" class="mt-2" style="height: 43%;"
                        @click="removeDocument"></b-icon>
            </div>
        </div>
        <div class="form-row" v-show="addMore >= 2">
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group>
                            <b-form-select
                                    v-model="$v.form.quantity2.$model"
                                    :state="validateState('quantity2')"
                                    aria-describedby="input-2-live-feedback"
                                    @change="calculateItem"
                            >
                                <b-form-select-option value="1">1</b-form-select-option>
                                <b-form-select-option value="2">2</b-form-select-option>
                                <b-form-select-option value="3">3</b-form-select-option>
                                <b-form-select-option value="4">4</b-form-select-option>
                                <b-form-select-option value="5">5</b-form-select-option>
                            </b-form-select>
                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Please select quantity.
                            </b-form-invalid-feedback>
                        </b-form-group>

                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="form-row">
                    <div class="col-md-4">
                        <b-form-group id="example-input-group-4" label-for="example-input-4">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-4"
                                        name="example-input-4"
                                        v-model="$v.form.length2.$model"
                                        :state="validateState('length2')"
                                        aria-describedby="input-4-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-4-live-feedback"
                            >Width is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-5" label-for="example-input-5">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-5"
                                        name="example-input-5"
                                        v-model="$v.form.width2.$model"
                                        :state="validateState('width2')"
                                        aria-describedby="input-5-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-5-live-feedback"
                            >Height is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-6" label-for="example-input-6">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-6"
                                        name="example-input-6"
                                        v-model="$v.form.height2.$model"
                                        :state="validateState('height2')"
                                        aria-describedby="input-6-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-6-live-feedback"
                            >Weight is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group id="example-input-group-2" label-for="example-input-2">
                            <b-input-group append="kg">
                                <b-form-input
                                        id="example-input-2"
                                        name="example-input-2"

                                        v-model="$v.form.weight2.$model"
                                        :state="validateState('weight2')"
                                        v-bind:value="$v.form.weight2.$model"
                                        aria-describedby="input-2-live-feedback"
                                        @change="calculateWeight"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Total Weight is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-1 h5 text-right">
                <b-icon icon="trash" variant="secondary" class="mt-2" style="height: 43%;"
                        @click="removeDocument"></b-icon>
            </div>
        </div>
        <div class="form-row" v-show="addMore >= 3">
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group>
                            <b-form-select
                                    v-model="$v.form.quantity3.$model"
                                    :state="validateState('quantity3')"
                                    aria-describedby="input-2-live-feedback"
                                    @change="calculateItem"
                            >
                                <b-form-select-option value="1">1</b-form-select-option>
                                <b-form-select-option value="2">2</b-form-select-option>
                                <b-form-select-option value="3">3</b-form-select-option>
                                <b-form-select-option value="4">4</b-form-select-option>
                                <b-form-select-option value="5">5</b-form-select-option>
                            </b-form-select>
                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Please select quantity.
                            </b-form-invalid-feedback>
                        </b-form-group>

                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="form-row">
                    <div class="col-md-4">
                        <b-form-group id="example-input-group-4" label-for="example-input-4">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-4"
                                        name="example-input-4"
                                        v-model="$v.form.length3.$model"
                                        :state="validateState('length3')"
                                        aria-describedby="input-4-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-4-live-feedback"
                            >Width is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-5" label-for="example-input-5">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-5"
                                        name="example-input-5"
                                        v-model="$v.form.width3.$model"
                                        :state="validateState('width3')"
                                        aria-describedby="input-5-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-5-live-feedback"
                            >Height is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="form-group col-md-4">
                        <b-form-group id="example-input-group-6" label-for="example-input-6">
                            <b-input-group append="cm">
                                <b-form-input
                                        id="example-input-6"
                                        name="example-input-6"
                                        v-model="$v.form.height3.$model"
                                        :state="validateState('height3')"
                                        aria-describedby="input-6-live-feedback"
                                        @change="calculateVolume"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-6-live-feedback"
                            >Weight is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-row">
                    <div class=" col-md-12">
                        <b-form-group id="example-input-group-2" label-for="example-input-2">
                            <b-input-group append="kg">
                                <b-form-input
                                        id="example-input-2"
                                        name="example-input-2"
                                        v-model="$v.form.weight3.$model"
                                        :state="validateState('weight3')"
                                        v-bind:value="$v.form.weight3.$model"
                                        aria-describedby="input-2-live-feedback"
                                        @change="calculateWeight"
                                ></b-form-input>
                            </b-input-group>

                            <b-form-invalid-feedback
                                    id="input-2-live-feedback"
                            >Total Weight is required.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="col-md-1 h5 text-right">
                <b-icon icon="trash" variant="secondary" class="mt-2" style="height: 43%;"
                        @click="removeDocument"></b-icon>
            </div>
        </div>

        <div class="form-row messageInfo" v-if="errMsg === true">
            <div class="col-md-1 mt-3">
                <b-icon icon="chat-left-dots" variant="info" class="mt-2 h3 text-center text-info"
                        style="width: 100%;"></b-icon>
            </div>
            <div class="col-md-11 mt-3">
                <h6 class="pt-3"><b>Maximun number of package lines reached</b></h6>
                <p>For shipments collected in this country/location, the maximun number of package lines is 4. To send
                    more packages, just divide your shipment into multiple bookings.</p>
            </div>
        </div>
        <div class="form-row mt-3">
            <div class="col-md-8">
                <div class="form-row">
                    <div class=" col-md-4">
                        <div class="form-row">
                            <div class="form-group col-md-3 h3">
                                <b-icon icon="hash" variant="secondary"></b-icon>
                            </div>
                            <div class="form-group col-md-9">
                                <p class="paramBottom">Total quantity:</p>
                                <p class="totalQuantity">{{totalQuantity}} items</p>
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
                                <p class="totalVolume">{{totalVolume}} m3</p>
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
                                <p class="totalPrice">{{isNaN(totalWeight) ? 0 : totalWeight}} kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <template>
                    <div class="form-group text-right">
                        <b-button class="btn btn-default" @click="addDocument" :disabled="buttonDisable === true">+
                            Another Package
                        </b-button>
                    </div>
                </template>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <b-form-group label="Layanan">
                    <b-form-select
                            v-model="$v.form.service.$model"
                            :state="validateState('service')"
                            aria-describedby="input-9-live-feedback"
                            @change="changeService"
                    >
                        <b-form-select-option value="express">Express</b-form-select-option>
                        <b-form-select-option value="economy">Economy Express</b-form-select-option>
                    </b-form-select>
                    <b-form-invalid-feedback
                            id="input-9-live-feedback"
                    >Please select service.
                    </b-form-invalid-feedback>
                </b-form-group>

            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <b-form-group id="example-input-group-10" label="Total Harga" label-for="example-input-10">
                    <b-input-group append="Rp">
                        <b-form-input
                                id="example-input-10"
                                name="example-input-10"
                                :value="totalPrice"
                                disabled
                        ></b-form-input>
                    </b-input-group>

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
    import {BIcon} from 'bootstrap-vue';
    import {validationMixin} from "vuelidate";
    import {required, numeric} from "vuelidate/lib/validators";

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
                    purpose: null,
                    quantity: null,
                    length: null,
                    width: null,
                    height: null,
                    weight: null,
                    quantity1: 0,
                    length1: null,
                    width1: null,
                    height1: null,
                    weight1: 0,
                    quantity2: 0,
                    length2: null,
                    width2: null,
                    height2: null,
                    weight2: 0,
                    quantity3: 0,
                    length3: null,
                    width3: null,
                    height3: null,
                    weight3: 0,
                    service: 'express',
                },
                addMore: 0,
                errMsg: false,
                totalQuantity: 0,
                totalVolume: 0,
                totalWeight: 0,
                buttonDisable: false,
                totalPrice: 0
            }
        },
        validations: {
            form: {
                purpose: {
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
                quantity1: {
                    numeric
                },
                length1: {
                    numeric
                },
                width1: {
                    numeric
                },
                height1: {
                    numeric
                },
                weight1: {},
                quantity2: {
                    numeric
                },
                length2: {
                    numeric
                },
                width2: {
                    numeric
                },
                height2: {
                    numeric
                },
                weight2: {},
                quantity3: {
                    numeric
                },
                length3: {
                    numeric
                },
                width3: {
                    numeric
                },
                height3: {
                    numeric
                },
                weight3: {},
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
            onPackageSubmit() {
                this.$v.form.$touch();
                if (this.$v.form.$anyError) {
                    return;
                }
                this.form.sender_id = localStorage.getItem('id');
                this.form.type = 'package';

                this.form.items = this.totalQuantity;
                this.form.volume = this.totalVolume;
                this.form.weights = this.totalWeight;
                this.form.price = this.totalPrice;
                axios.post(url + 'saveShip', this.form)
                    .then(res => {
                        if  (res.statusText === 'OK') {
                            localStorage.setItem('payment', JSON.stringify(res.data));
                            this.$router.push('/shipping-success')
                        }
                    })
            },

            addDocument() {
                if (this.addMore >= 3) {
                    this.errMsg = true;
                    this.buttonDisable = true;
                    return false
                } else {
                    this.addMore++;
                    if (this.addMore > 2) {
                        this.errMsg = true;
                        this.buttonDisable = true;
                        return false
                    }
                }
            },
            removeDocument() {
                this.addMore--;
                this.errMsg = false;
                this.buttonDisable = false;

            },
            calculateItem() {
                this.totalQuantity = parseInt(this.$v.form.quantity.$model) +
                    parseInt(this.$v.form.quantity1.$model) +
                    parseInt(this.$v.form.quantity2.$model) +
                    parseInt(this.$v.form.quantity3.$model);
                this.calculateVolume();
                this.calculateWeight();
            },
            calculateVolume() {
                const firstVolume = parseInt(this.$v.form.length.$model) * parseInt(this.$v.form.width.$model) * parseInt(this.$v.form.height.$model)
                const v1 = isNaN(firstVolume) ? 0 : firstVolume;
                const secondVolume = parseInt(this.$v.form.length1.$model) * parseInt(this.$v.form.width1.$model) * parseInt(this.$v.form.height1.$model)
                const v2 = isNaN(secondVolume) ? 0 : secondVolume;
                const thirdVolume = parseInt(this.$v.form.length2.$model) * parseInt(this.$v.form.width2.$model) * parseInt(this.$v.form.height2.$model)
                const v3 = isNaN(thirdVolume) ? 0 : thirdVolume;
                const forthVolume = parseInt(this.$v.form.length3.$model) * parseInt(this.$v.form.width3.$model) * parseInt(this.$v.form.height3.$model)
                const v4 = isNaN(forthVolume) ? 0 : forthVolume;
                this.totalVolume = v1 * this.$v.form.quantity.$model +
                    v2 * this.$v.form.quantity1.$model +
                    v3 * this.$v.form.quantity2.$model +
                    v4 * this.$v.form.quantity3.$model;
                this.totalVolume = Math.round(this.totalVolume * 0.000001 * 100000)/100000;
            },
            calculateWeight() {
                this.totalWeight = parseFloat(this.$v.form.weight.$model) * this.$v.form.quantity.$model +
                    parseFloat(this.$v.form.weight1.$model) * this.$v.form.quantity1.$model +
                    parseFloat(this.$v.form.weight2.$model) * this.$v.form.quantity2.$model +
                    parseFloat(this.$v.form.weight3.$model) * this.$v.form.quantity3.$model;
                this.form.exportCountry = JSON.parse(localStorage.getItem('origin')).country;
                this.form.importCountry = JSON.parse(localStorage.getItem('aim')).country;
                this.form.type = 'package';
                if (this.totalWeight > 0) {
                    axios.post(url + 'getPackagePrice', this.form)
                        .then(res => {
                            this.totalPrice = res['data']
                        })
                }
            },
            changeService() {
                this.calculateWeight();
            }
        }
    }
</script>

<style scoped>
    .messageInfo {
        border: 1px solid #00d7fa;
    }

    .btn-primary {
        background-color: #011f48 !important;
    }

    .paramBottom {
        margin-bottom: 0 !important;
    }

    .btn-secondary {
        background-color: white !important;
        border-color: #011f48 !important;
        color: #011f48 !important;
    }

</style>
