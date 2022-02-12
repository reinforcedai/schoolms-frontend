<template>
  <v-row justify="center" align="center" class="my-16 mx-5">

    <v-col cols="12" class="accent--text">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="10" md="6">
          <h1>{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md="6" class="secondary--text">
      <h3 class="text-capitalize title">{{ post.title }}</h3>
      <v-img v-if="post.image" :src="getMedia(post.image)" height="300" />
      <p
        v-if="post.description"
        v-text="post.description"
        class="headline"
      >
      </p>
      <div
        v-if="post.content"
        v-html="$md.render(post.content)"
      >
      </div>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>


<script>
import { getMedia } from "../../utils/medias";

export default {
  async asyncData({ $axios, params }) {
    const slug = params.slug
    const post = await $axios.$get(`/news/${slug}/`)
    return {
      post,
      title: 'My Post',
      description: '',
      image: '',
    }
  },

  methods: {
    getMedia,
  },

}
</script>
