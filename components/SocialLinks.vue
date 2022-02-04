<template>
  <div class="text-center">
    <v-btn
      v-for="(link, i) in socialMediaLinks"
      :key="i"
      icon
      :href="link.url"
      target="_blank"
      class="success--text"
    >
      <v-icon :color="color" :size="size">
        {{ link.icon }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '20',
    },
    socials: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
      ...mapGetters(['socialMediaLinks']),
    },
}
</script>
