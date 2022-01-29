<template>
  <v-row justify="center">

    <v-col cols="12" class="blog-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="10" md="6">
          <v-card-title class="primary--text text-h4">title</v-card-title>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="10" class="my-16">
      <h1 class="secondary--text text-center text-h6 mb-5">{{ category.name }} Category</h1>
      <ArticleCard :posts="posts" />
    </v-col>

  </v-row>
</template>

<style scoped>
.blog-bg {
  background: #3b1518;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}
</style>
