<template>
  <v-row justify="center" align="center" fill-height>
    <v-col
        v-for='post in posts'
        :key='post.id'
        cols="12"
        md="6"
    >
      <v-lazy>
        <v-card
          :to="{ name: 'news-slug', params: { slug: post.slug } }"
          link
          flat
          min-height="500"
          class="success"
        >
          <v-img v-if="post.image" :src="getMedia(post.image)" height="300" />
          <v-card-title class="accent--text text-capitalize" v-if="post.title">{{ post.title }}</v-card-title>
          <v-card-subtitle class="accent--text" v-if="post.description">{{ post.description }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              :to="{ name: 'news-slug', params: { slug: post.slug } }"
              text
              class="accent--text text-capitalize"
            >
              <i>Read More</i>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-lazy>
    </v-col>
  </v-row>
</template>

<script>
import { getMedia } from "../utils/medias";

export default {
  props: {
    posts: {
      type: Array,
      default: () => ([]),
    },
  },
  methods: {
    getMedia,
  },
};
</script>
