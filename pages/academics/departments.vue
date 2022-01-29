<template>
  <v-row justify="center" align="center" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1643472584/pexel/pexels-pixabay-267507_ubmxn8.jpg"
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
    title: 'Departments',
    description: '',
    image: '',
    admins: [
      {'title': 'Management', 'icon': 'mdi-home'},
      {'title': 'Settings', 'icon': 'mdi-account'},
    ],
  }),
}
</script>

<style scoped>
.department-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
