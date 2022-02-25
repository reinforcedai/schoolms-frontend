<template>
  <v-row justify="center" align="center">
    <v-col
        v-for='post in posts'
        :key='post.id'
        cols="12"
        md="4"
    >
      <v-lazy>
        <v-card
          :to="{ name: 'news-slug', params: { slug: post.slug } }"
          link
          flat
          class="success"
        >
          <v-img v-if="post.image" :src="getMedia(post.image)" height="200" />
          <v-card-title class="accent--text text-capitalize" v-if="post.title">{{ post.title }}</v-card-title>
          <v-card-text class="accent--text" v-if="post.description">{{ post.description }}</v-card-text>
          <v-card-actions>
            <v-btn
              :to="{ name: 'news-slug', params: { slug: post.slug } }"
              text
              class="accent--text text-capitalize"
            >
              <i>Read More<v-icon size="15">mdi-chevron-right</v-icon></i>
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
