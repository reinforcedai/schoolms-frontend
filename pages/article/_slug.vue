<template>
  <v-row justify="center">

    <v-col cols="12" class="blog-hero-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="10" md="6">
          <v-card-title class="primary--text text-h4">title</v-card-title>
        </v-col>
      </v-row>
    </v-col>
<!-- 
    <v-col cols="10"
      v-if="post.image"
      :data-src="getMedia(post.image.url)"
    >
      <h1 class="secondary--text text-capitalize">{{ post.title }}</h1>
      <p class="secondary--text" v-if="post.published_at">
        {{ $moment(post.published_at).format("MMM Do YYYY") }}
      </p>
      <p class="secondary--text">{{ readingTime(post.content).text }}</p>
    </v-col>

    <v-col cols="10">
      <div
        v-if="post.content"
        v-html="$md.render(post.content)"
        class="secondary--text"
      >
      </div>
    </v-col> -->


  </v-row>
</template>


<style scoped>
.article-hero-bg {
  background: #3b1518;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}
</style>
