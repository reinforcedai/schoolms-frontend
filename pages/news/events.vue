<template>
  <v-row justify="center" class="mt-6 mb-16">

    <v-col cols="12" class="accent--text text-center success py-16">
      <h1>{{ title }}</h1>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title: 'Events',
    description: '',
    image: '',
  }),

}
</script>
