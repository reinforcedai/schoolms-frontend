<template>
  <v-row justify="center" class="py-10">

    <v-col cols="11" md="5" class="accent--text">
      <h3>{{ title }}</h3>
      <contactInfo />
    </v-col>

    <v-col cols="11" md="5">
      <contactForm />
    </v-col>

    <v-col cols="12">
      <GoogleMap />
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {

  data: () => ({
    title: 'Contact Us',
    description: '',
    image: '',
  }),

}
</script>
