<template>
  <v-row justify="center" align="center">

    <v-col cols="12" class="success py-16">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h1 class="accent--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="10" class="my-16">
      <!-- <h1 class="secondary--text text-center text-h6 mb-5">{{ category.name }} Category</h1> -->
      <!-- <BlogCard :posts="posts" /> -->
    </v-col>

  </v-row>
</template>

<script>
export default {
  title: 'News And Events',
  description: '',
  image: '',
}
</script>