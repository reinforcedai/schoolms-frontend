<template>
  <v-row justify="center" align="center" class="my-6">

    <v-col cols="12" class="success py-16">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1 class="accent--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>

    <v-col v-if="posts[0]" cols="11" class="mt-16">
      <BlogCard :posts="posts" />
    </v-col>

    <v-col v-else cols="12" class="accent--text text-center">
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
    // console.log(response.results)
    const posts = response.results
    return { posts }
  }

}
</script>
