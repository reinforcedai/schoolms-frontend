<template>
  <v-row justify="center" align="center" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1643474744/pexel/pexels-pixabay-207692_riefkk.jpg"
        class="news-bg"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h1 class="primary--text text-center">{{ title }}</h1>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col v-if="posts" cols="12" class="pa-10">
      <BlogCard :posts="posts" />
    </v-col>

    <v-col v-else cols="12" class="text-center">
      <p>Unavailable</p>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title: 'News And Events',
    description: '',
    image: '',
    
  }),
  async asyncData({ $axios, $config }) {
    const response = await $axios.$get(`/news`)
    const posts = response.results
    return { posts }
  }

}
</script>

<style scoped>
.news-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}
</style>
