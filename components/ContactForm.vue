<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-alert outlined v-if="error" type="error" class="my-3">{{ error }}</v-alert>
      <v-form v-model="valid" ref="form" @submit.prevent="">          
          <v-row justify="center" align="center">
            <v-col cols="10">
              <h3 class="secondary--text text-center text-capitalize mb-10">Leave A Message</h3>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  class="secondary--text py-0"
                >
                  <v-text-field
                    v-model="firstName"
                    label="First Name"
                    required
                    outlined
                    placeholder="first name"
                    :rules="nameRules"
                    class="secondary--text"
                    color="secondary"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-0"
                >
                  <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    required
                    outlined
                    placeholder="last name"
                    :rules="nameRules"
                    class="secondary--text"
                    color="secondary"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pt-0"
                >
                  <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    outlined
                    placeholder="email address"
                    :rules="emailRules"
                    class="secondary--text"
                    color="secondary"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pt-0"
                >
                <v-text-field
                  v-model="phoneNumber"
                  label="Phone Number"
                  required
                  outlined
                  placeholder="phone number"
                  :rules="phoneNumberRules"
                  class="secondary--text"
                  color="secondary"
                ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                v-model="country"
                label="Country"
                required
                outlined
                placeholder="country"
                :rules="countryRules"
                class="secondary--text"
                color="secondary"
              ></v-text-field>

              <v-textarea
                v-model="message"
                label="Message"
                required
                outlined
                placeholder="message"
                :rules="messageRules"
                class="secondary--text"
                color="secondary"
              ></v-textarea>
              <v-btn
                block
                elevation="10"
                class="secondary text-uppercase font-weight-bold"
                @click="handleContactForm"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>

export default {
  data: () => ({
    error: null,
    valid: false,
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null,
    country: '',
    message: '',

    nameRules: [
      v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],
    phoneNumberRules: [
        v => !!v || 'Phone number is required',
    ],
    countryRules: [
      v => !!v || 'Country is required',
    ],
    messageRules: [
      v => !!v || 'Message is required',
    ],
  }),

  methods: {
    async handleContactForm() {
      if (this.$refs.form.validate()) {
        try {
          // await this.create('contacts', {
          //   firstName: this.firstName,
          //   lastName: this.lastName,
          //   email: this.email,
          //   phoneNumber: this.phoneNumber,
          //   country: this.country,
          //   message: this.message,
          // }),
  
          this.$swal({
            title: 'Successful!',
            text: 'Thanks For Contacting Us',
            icon: 'success',
            button: 'Ok',
          }),
          this.$refs.form.reset()
  
        } catch (e) {
          this.$swal({
            title: e,
            icon: 'error',
            button: 'Ok',
          })
        }
      }
      
    }
  },

}
</script>