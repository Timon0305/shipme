<template>
  <v-content id="login" color="transparent">
    <v-container fluid fill-height>
      <v-layout align-center>
        <v-flex xs12 sm8 md4 lg4>
          <v-card class="elevation-1 pa-3">
            <v-card-text>
              <div class="layout column align-center">
                <h1 class="flex primary--text">DONDOCA ADMIN</h1>
              </div>
              <v-form>
                <v-text-field
                  append-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                  v-model="userEmail"
                  :error="error"
                  :rules="[rules.required]"
                />
                <v-text-field
                  :type="hidePassword ? 'password' : 'text'"
                  :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                  name="password"
                  label="Password"
                  id="password"
                  :rules="[rules.required]"
                  v-model="password"
                  :error="error"
                  @click:append="hidePassword = !hidePassword"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                block
                color="primary"
                class="text-white"
                @click="$router.push(`/dashboards/dashboard1`)"
                :loading="loading"
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar v-model="showResult" :timeout="2000" top>{{ result }}</v-snackbar>
  </v-content>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      userEmail: "admin@yopmail.com",
      password: "123456",
      hidePassword: true,
      error: false,
      showResult: false,
      result: "",
      rules: {
        required: value => !!value || "Required."
      }
    };
  },

  methods: {
    login() {
      const vm = this;

      if (!vm.userEmail || !vm.password) {
        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

      if (
        vm.userEmail === vm.$root.userEmail &&
        vm.password === vm.$root.userPassword
      ) {
        vm.$router.push({ name: "/dashboard/dashboard1" });
      } else {
        vm.error = true;
        vm.result = "Email or Password is incorrect.";
        vm.showResult = true;
      }
    }
  }
};
</script>

<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 10%;
  content: "";
  z-index: 0;
}
.text-white {
  color: white;
}
</style>
