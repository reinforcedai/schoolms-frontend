<template>
  <v-footer padless>
    <v-card flat tile width="100%" :color="color" class="text-center">
      <v-row v-if="footer" class="primary--text warning pt-10">
        <v-col cols="12" md="4" class="pb-10">
          <h3>Quick Links</h3>
          <v-btn
            v-for="link in footerLinks"
            :key="link.text"
            :to="link.to"
            tile
            text
            block
            class="success--text text-capitalize"
          >
            {{ link.text }}
          </v-btn>
        </v-col>
         
        <v-col cols="12" md="4" class="pb-10">
          <h3>Follow Us</h3>
          <socialLinks />
        </v-col>
        
        <v-col cols="12" md="4" class="success--text pb-10">
          <h3>Contact Us</h3>
          <contactInfo />
        </v-col>
      </v-row>

      <v-container class="py-16">
        <v-col cols="12">
          <v-card-text class="success--text">
            &copy; {{ new Date().getFullYear() }} - {{ site }}
          </v-card-text>
        </v-col>
      </v-container>

    </v-card>
  </v-footer>
</template>

<script>

export default {
  props: {
    color: {
      type: String,
      default: 'secondary',
    },
    footerLinks: {
      type: Array,
      default: () => ([]),
    },
    site: {
      type: String,
      default: '',
    },
    footer: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
