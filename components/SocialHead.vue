<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: require('../static/frontend.png')
    }
  },
  head() {
    return {
      titleTemplate: '%s | FRONTEND SAMPLE',
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },

      // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
        },
        { hid: 'twitter:site', name: 'twitter:site', content: 'FRONTEND SAMPLE' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://sample.com'
        },

        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        { hid: 'og:site_name', property: 'og:site_name', content: 'FRONTEND SAMPLE' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://sample.com'
        },
      ]
    }
  }
}
</script>
