<template>
  <v-app dark>
    <Navbar :systemBarLinks="systemBarLinks" :systemBar="systemBar" :site="siteName" :navLinks="navLinks" />
    <v-main>
      <v-container fluid fill-height class="pa-0">
        <nuxt keep-alive />
      </v-container>
    </v-main>
    <Footer :footerLinks="quickLinks" :site="siteName" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data() {
    return {
      systemBar: true,
    }
  },
  computed: {
    ...mapGetters([ 'systemBarLinks', 'siteName', 'navLinks', 'quickLinks']),
  },
}
</script>
