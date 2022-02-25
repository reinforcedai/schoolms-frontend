<template>
  <v-row justify="center" align="center">

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1645778519/pexel/math-gf90ece4ba_640_tpft9h.jpg"
        class="career-bg"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12">
            <h1 class="primary--text text-center">{{ title }}</h1>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title: 'Vacancy',
    description: '',
    image: '',
    
  }),

}
</script>
<style scoped>
.career-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
