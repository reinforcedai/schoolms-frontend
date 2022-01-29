<template>
  <v-row justify="center" class="secondary">
<!-- 
    <v-col cols="12">
      <v-img
        :src="getMedia(featured.article.image.url)"
        class="article-bg"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" md="6">
            <v-card-title class="primary--text font-weight-black text-h2">{{ homepage.hero.title }}</v-card-title>
            <v-card-title class="primary--text text-capitalize">{{ featured.article.title }}</v-card-title>
            <v-btn
              :to="{ name: 'article-slug', params: { slug: featured.article.slug } }"
              tile
              text
              x-large
              color="success"
            >
              ...Read More
            </v-btn>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col v-if="posts" cols="12" class="pa-10">
      <ArticleCard :posts="posts" />
    </v-col>

    <v-col v-else cols="12"> -->
      <p>Unavailable</p>
    <!-- </v-col> -->

  </v-row>
</template>


<style scoped>
.article-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
