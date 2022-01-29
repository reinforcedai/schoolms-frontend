<template>
  <v-row justify="center" class="my-16 mx-5">
    <v-col cols="12" md="6">
      <v-card class="info">
        <v-card-text class="success">
          <h3 class="secondary--text text-center">Log Into Your Account</h3>
        </v-card-text>
        <v-form v-model="valid" ref="form" @submit.prevent="">          
            <v-row justify="center" align="center" class="pa-5">
              <v-col cols="12" class="pt-0 mt-5">
                <v-text-field
                  v-model="email"
                  label="Email"
                  dark
                  required
                  outlined
                  placeholder="email address"
                  :rules="emailRules"
                  class="accent--text"
                  color="accent"
                ></v-text-field>
              </v-col>

              <v-col  cols="12" class="pt-0">
                <v-text-field
                  v-model="password"
                  label="Password"
                  dark
                  required
                  outlined
                  placeholder="Enter Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  @click:append="showPassword = !showPassword"
                  class="accent--text"
                  color="accent"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pt-0">
                <v-btn
                  block
                  large
                  elevation="10"
                  class="accent text-uppercase font-weight-bold"
                  @click="handleLogin"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
        </v-form>
        <v-card-text class="success">
          You don't have an account?
          <nuxt-link to="/auth/signup" class="text-decoration-none">
            <i class="light-blue--text">
              Create Account
            </i>
          </nuxt-link>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    error: null,
    valid: false,
    title: '',
    email: '',
    password: null,
    showPassword: false,

    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],
    passwordRules: [
        v => !!v || 'Password is required',
    ],
  }),

  methods: {
    async handleLogin() {
      // if (this.$refs.form.validate()) {
      //   try {
      //     await this.$strapi.create('contacts', {
      //       email: this.email,
      //       password: this.pasword,
      //     }),
  
      //     this.$swal({
      //       title: 'Successful!',
      //       text: 'Logged in',
      //       icon: 'success',
      //       button: 'Ok',
      //     }),
      //     this.$refs.form.reset()
  
      //   } catch (e) {
      //     this.$swal({
      //       title: e,
      //       icon: 'error',
      //       button: 'Ok',
      //     })
      //   }
      // }
    }
  },

}
</script>