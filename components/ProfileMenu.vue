<template>
  <div class="text-center mx-2 mt-2">
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex align-center mt-5">
          <v-icon
            dark
            size="20"
            v-bind="attrs"
            v-on="on"
          >mdi-account</v-icon>
          <div
            v-if="$auth.loggedIn"
            class="primary--text ml-1"
          >
          {{ $auth.user.email }}
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
