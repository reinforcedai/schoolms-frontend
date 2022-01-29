<template>
  <v-row justify="center" align="center" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1643474756/pexel/pexels-run-ffwpu-2402734_qzncjf.jpg"
        class="events-bg"
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
    title: 'News and Events',
    description: '',
    image: '',
    
  }),

}
</script>
<style scoped>
.events-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
