<template>
  <v-app dark>
    <Navbar :site="siteName" :navLinks="studentsNavLinks" :color="color" :profile="profile" />
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt keep-alive />
      </v-container>
    </v-main>
    <Footer :footer="footer" :site="siteName" :color="color" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      color: 'error',
      footer: false,
      profile: true,
    }
  },
  computed: {
    ...mapGetters(['studentsNavLinks', 'siteName']),
  },
}
</script>
