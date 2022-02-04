<template>
  <v-row justify="center" class="my-10 mx-5">
    <v-col cols="12" md="6">
      <v-alert outlined v-if="error" type="error" class="my-3">{{ error }}</v-alert>
      <v-card class="info">
        <v-card-text class="success">
          <h3 class="secondary--text text-center">Log Into Your Account</h3>
        </v-card-text>
        <v-form v-model="valid" ref="form" @submit.prevent="">          
            <v-row justify="center" align="center" class="pa-5">
              <v-col cols="12" class="pt-0 mt-5">
                <v-text-field
                  v-model="credentials.email"
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

              <v-col cols="12" class="pt-0 mt-5">
                <v-text-field
                  v-model="credentials.username"
                  label="Username"
                  dark
                  required
                  outlined
                  placeholder="username"
                  :rules="usernameRules"
                  class="accent--text"
                  color="accent"
                ></v-text-field>
              </v-col>

              <v-col  cols="12" class="pt-0">
                <v-text-field
                  v-model="credentials.password"
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
                  @click="userLogin"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
        </v-form>
        <!-- <v-card-text class="success text-center">
          You don't have an account?
          <nuxt-link to="/auth/signup" class="text-decoration-none">
            <i class="light-blue--text">
              Create Account
            </i>
          </nuxt-link>
        </v-card-text> -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    error: null,
    valid: false,
    title: '',
    showPassword: false,
    credentials: {
        username: 'admin@gmail.com',
        email: 'admin@gmail.com',
        password: 'test11111'
      },

    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],

    usernameRules: [
      v => !!v || 'Username is required',
      v => /.+@.+/.test(v) || 'Username must be valid',
    ],
    passwordRules: [
        v => !!v || 'Password is required',
    ],
  }),
  methods: {
  
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.credentials })
        // this.$router.push('/students/profile')
        // console.log(response.data)
        console.log(this.$auth.loggedIn)
      } catch (err) {
        console.log( this.error = err.response.data)
      }
    }
  }

}
</script>