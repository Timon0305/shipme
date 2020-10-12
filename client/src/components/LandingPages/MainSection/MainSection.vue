<template>
  <div class="base">
    <div class="container">
      <!-- Navbar Section -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src="../../../assets/img/logo-shipme.svg" alt="logo shipme" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Kenapa Shipme?
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cara Memesan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Section -->
      <div class="row">
        <div class="col-12 col-lg-6">
          <img src="../../../assets/img/world-landing-page.svg" alt />
        </div>
        <div class="col-12 col-lg-6 form-shipme">
          <h1 class="d-none d-lg-block">SHIPME.NOW!</h1>
          <b-form @submit.stop.prevent="onSubmit">
            <b-form-group id="origin" label-for="origin">
              <vue-google-autocomplete
                  ref="from_address"
                  id="from_address"
                  name="from_address"
                  aria-describedby="starter-feedback"
                  classname="form-control"
                  placeholder="Asal"
                  v-on:placechanged="getFromAddressData"
                  types=""
              >
              </vue-google-autocomplete>
              <p class="text-right text-primary pointer-hand" v-on:click="clearFromAddressData">clear exporting country</p>
              <b-form-invalid-feedback id="starter-feedback">
                Please enter Origin
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="aim" label-for="aim">
              <vue-google-autocomplete
                      ref="to_address"
                      id="to_address"
                      name="to_address"
                      aria-describedby="end_feedback"
                      classname="form-control"
                      placeholder="Tujuan"
                      v-on:placechanged="getToAddressData"
                      types=""
              >
              </vue-google-autocomplete>
              <p class="text-right text-primary pointer-hand" v-on:click="clearToAddressData">clear importing country</p>
              <b-form-invalid-feedback id="end-feedback">
                Please enter Aim
              </b-form-invalid-feedback>
            </b-form-group>

            <b-button
              type="submit"
              class="form-control btn btn-light"
            >Kirim Sekarang!</b-button>
          </b-form>
        </div>
      </div>

      <!-- Bottom of Main Section -->
      <div class="row">
        <div class="col-12 col-lg-6">
          <h2>Mulai lah perjalanan kirim barangmu</h2>
          <p class="text-gold">
            Seberapapun banyak paket yang akan kamu kirimkan,
            <b>SHIPME.NOW</b> siap untuk menemanin kiriman paket mu. Kembangkan lah usaha expor dan impor mu bersama
            <b>SHIPME.NOW</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {validationMixin} from 'vuelidate';
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  name: "MainSection",
    components: {VueGoogleAutocomplete},
    mixins: [validationMixin],

    data: function () {
        return {
            from_address: '',
            to_address: ''
        }
    },

    mounted() {
        this.$refs.from_address.focus();
        this.$refs.to_address.focus();
    },

    methods: {

        getFromAddressData(from_address) {
            this.from_address = from_address;
        },
        getToAddressData(to_address) {
            this.to_address = to_address
        },

        onSubmit() {
            const fromCounty = this.from_address.country;
            const toCountry = this.to_address.country;
            const myLocation = 'Indonesia';
            if (!fromCounty || !toCountry) {
                alert('You have to input all fields')
            }
            else {
                if (fromCounty === myLocation && toCountry === myLocation) {
                    alert("One of both is Indonesia");
                    this.$refs.to_address.clear()
                }

                else if (fromCounty !== myLocation && toCountry !== myLocation) {
                    alert("If the exporting country is not Indonesia, the importing country has to be Indonesia");
                    this.$refs.to_address.clear();
                }

                else {
                    localStorage.setItem('origin', JSON.stringify(this.from_address));
                    localStorage.setItem('aim', JSON.stringify(this.to_address));
                    this.$router.push('/form-shipping')
                }
            }

        },
        clearFromAddressData() {
            this.$refs.from_address.clear();
        },
        clearToAddressData() {
            this.$refs.to_address.clear();
        }
    }
};
</script>

<style scoped>
.base {
  background: url("../../../assets/img/bg-landing-page.png");
  height: 120%;
  width: 100%;
  object-fit: cover;
}
.container nav {
  background-color: transparent;
}
.nav-item a {
  color: #ceb16c !important;
}

.col-lg-6 h2 {
  color: white;
}

.pointer-hand {
  cursor: pointer;
}

.col-lg-6 p {
  color: white;
}

.col-lg-6 h1 {
  color: #ceb16c;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.col-lg-6 button {
  color: #011f48;
  background-color: #ceb16c;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
}
.row .col-lg-6 {
  padding: 2rem 0;
}
.form-group input {
  font-size: 1.5rem;
  color: #4e5a6d;
}

.row .form-shipme {
  padding: 3rem;
}
.text-gold b {
  color: #ceb16c;
}

@media (max-width: 768px) {
  .row .col-12 {
    text-align: center;
    padding: 0.5rem;
  }
  .col-12 img {
    width: 80%;
  }

  .col-12 h1 {
    color: #ceb16c;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .form-group input {
    font-size: 1rem;
    color: #4e5a6d;
  }

  .col-lg-6 h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .col-12 button {
    font-size: 1rem;
  }

  .col-12 h2 {
    font-size: 1.5rem;
  }

  .col-12 p {
    font-size: 0.875rem;
  }
}
</style>
