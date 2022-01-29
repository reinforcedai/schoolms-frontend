<template>
  <v-row justify="center" class="my-16 mx-5">
    <v-col cols="12" md="6">
      <v-card class="info pa-5">
        <v-form v-model="valid" ref="form" @submit.prevent="">          
            <v-row justify="center" align="center">
              <v-col cols="12" class="pt-0">
                <h3 class="primary--text text-center mb-10">Create An Account</h3>
              </v-col>
              <v-col cols="12" class="pt-0">
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
                  :rules="passwordRules"
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
                  @click="handleSignup"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
        </v-form>
        <v-card-text class="primary">
          <nuxt-link to="/auth/login" class="text-decoration-none grey--text">
            You have an account already?
            <span class="light-blue--text text--lighten-2">
              login
            </span>
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

    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],
    passwordRules: [
        v => !!v || 'Password is required',
    ],
  }),

  methods: {
    async handleSignup() {
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