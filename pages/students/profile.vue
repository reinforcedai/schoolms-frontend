<template>
  <v-row justify="center" class="info py-10">
    <v-col cols="11" md="3" class="accent--text">
      <h3>Profile Page</h3>
      <i>You have successfully logged in!</i>
      <p v-if="$auth.loggedIn">{{ $auth.user.username }}</p>
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
