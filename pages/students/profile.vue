<template>
  <v-row justify="center" class="info py-10">
    <v-col cols="11" md="3" class="accent--text">
      <h3>Profile Page</h3>
      <p v-if="$auth.loggedIn">{{ $auth.user.first_name }}</p>
      <v-btn v-if="$auth.loggedIn" @click="userLogout">logout</v-btn>
      <profile-menu />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'students',
  // middleware: 'auth',
  data: () => ({
  }),

methods: {
    async userLogout() {
      this.$auth.logout()
    }
}

}
</script>
