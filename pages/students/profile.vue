<template>
  <v-row justify="center" class="info py-10">
    <v-col cols="11" md="3" class="accent--text text-capitalize">
      <h3>Profile Page</h3>
      <p v-if="$auth.loggedIn">Hey {{ $auth.user.username }}! You have successfully logged in.</p>
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
