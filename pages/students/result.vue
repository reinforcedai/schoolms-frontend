<template>
  <v-row justify="center" class="info py-10">
    <v-col cols="11" md="3" class="accent--text">
      <h3>Result Page</h3>
      <p v-if="$auth.loggedIn">{{ $auth.user.first_name }} {{ $auth.user.last_name }}</p>
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
}

}
</script>
