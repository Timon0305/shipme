<template>
  <div class="container">
    <div class="container-form mx-auto">
      <!-- Atas nya belum -->
      <!-- Pengiriman -->
      <h2 class="text-gold font-weight-bold text-center">Penerima</h2>
      <hr />

      <!-- Form -->
      <b-form @submit.stop.prevent="onReceiverSubmit" id="receiver">
        <b-form-group id="example-input-group-1" label="Nama Lengkap" label-for="example-input-1">
          <b-form-input
                  id="example-input-1"
                  name="example-input-1"
                  v-model="$v.form.fullName.$model"
                  :state="validateState('fullName')"
                  aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
                  id="input-1-live-feedback"
          >Full Name is required.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="example-input-group-2" label="Asal Negara" label-for="example-input-2">
          <b-form-input
                  id="example-input-2"
                  name="example-input-2"
                  v-model="$v.form.country.$model"
                  :state="validateState('country')"
                  aria-describedby="input-2-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
                  id="input-2-live-feedback"
          >Country is required.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="example-input-group-3" label="Alamat 1" label-for="example-input-3">
          <b-form-input
                  id="example-input-3"
                  name="example-input-3"
                  v-model="$v.form.addressOne.$model"
                  :state="validateState('addressOne')"
                  aria-describedby="input-3-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
                  id="input-3-live-feedback"
          >Address 1 is required.</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="example-input-group-4" label="Alamat 2" label-for="example-input-4">
          <b-form-input
                  id="example-input-4"
                  name="example-input-4"
                  v-model="$v.form.addressTwo.$model"
                  :state="validateState('addressTwo')"
          ></b-form-input>

        </b-form-group>

        <b-form-group id="example-input-group-5" label="Alamat 3 " label-for="example-input-5">
          <b-form-input
                  id="example-input-5"
                  name="example-input-5"
                  v-model="$v.form.addressThree.$model"
                  :state="validateState('addressThree')"
          ></b-form-input>

        </b-form-group>

        <div class="row">
          <div class="col-md-6">
            <b-form-group id="example-input-group-5" label="Nama Lengkap" label-for="example-input-5">
              <b-form-input
                      id="example-input-5"
                      name="example-input-5"
                      v-model="$v.form.city.$model"
                      :state="validateState('city')"
                      aria-describedby="input-5  -live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                      id="input-2-live-feedback"
              >City is required.</b-form-invalid-feedback>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group id="example-input-group-5" label="Nama Lengkap" label-for="example-input-5">
              <b-form-input
                      id="example-input-5"
                      name="example-input-5"
                      v-model="$v.form.postCode.$model"
                      :state="validateState('postCode')"
                      aria-describedby="input-5  -live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                      id="input-2-live-feedback"
              >PostCode is required.</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <b-form-group id="example-input-group-5" label="Nama Lengkap" label-for="example-input-5">
              <b-form-input
                      id="example-input-5"
                      name="example-input-5"
                      v-model="$v.form.phone.$model"
                      :state="validateState('phone')"
                      aria-describedby="input-5  -live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                      id="input-2-live-feedback"
              >Phone Number is required.</b-form-invalid-feedback>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group id="example-input-group-5" label="Email" label-for="example-input-5">
              <b-form-input
                      id="example-input-5"
                      name="example-input-5"
                      v-model="$v.form.email.$model"
                      :state="validateState('email')"
                      aria-describedby="input-5  -live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback
                      id="input-2-live-feedback"
              >email is required and valid email is required.</b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>


        <b-button type="submit" variant="primary" id="submit-button">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, numeric } from "vuelidate/lib/validators";
import axios from 'axios';
import {webUrl} from "../../config";
const url = webUrl + '/v2/api/client/receiver';
export default {
  name: "ReceiverForm",
  components: {},
    mixins: [validationMixin],
    data() {
        const origin = JSON.parse(localStorage.getItem('aim'));
        return {
            form: {
                fullName: null,
                country: origin.country,
                addressOne: origin.administrative_area_level_1,
                addressTwo: origin.administrative_area_level_2 ? origin.administrative_area_level_2: null,
                addressThree: null,
                city: origin.locality,
                postCode: origin.postal_code,
                phone: null,
                email: null
            }
        };
    },
    validations: {
        form: {
            fullName: {
                required,
            },
            country: {
                required
            },
            addressOne: {
                required
            },
            addressTwo: {

            },
            addressThree: {

            },
            city: {
                required
            },
            postCode: {
                required
            },
            phone: {
                required,
                numeric
            },
            email: {
                required,
                email
            }
        }
    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        onReceiverSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }
            this.form.sender_id = localStorage.getItem('id');
            axios.post(url, this.form).then(res => {
                if(res.statusText === 'OK') {
                    this.$emit('can-continue', {value: true})
                } else {
                    this.$emit('can-continue', {value: false})
                }
            })
        }
    }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-form {
  width: 50%;
}

.text-gold {
  color: #ceb16c;
  font-size: 1.5rem;
  font-weight: normal;
}

hr {
  border-top: 2px solid #ceb16c !important;
  width: 50%;
}

.btn-primary {
  background-color: #011f48 !important;
}
#submit-button {
  width: 100%;
}
</style>
