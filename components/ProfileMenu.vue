<template>
  <div class="text-center mx-2 mt-2">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex align-center mr-16">
          <v-btn
            color="success"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            block
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
            <div
              v-if="$auth.loggedIn"
              class="primary--text"
            >
            {{ $auth.user.first_name }}
          </div>
        </div>
      </template>
      <div>
        <v-btn
          block
          text
          tile
          x-large
          class="font-weight-light info"
          to="/students/profile/"
        >
          Profile
        </v-btn>
        <v-btn
          block
          text
          tile
          x-large
          class="font-weight-light info"
          @click="userLogout"
        >
          Logout
        </v-btn>
      </div>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
    }),
    methods: {
      userLogout() {
        this.$auth.logout()
      }
    },

  }
</script>
