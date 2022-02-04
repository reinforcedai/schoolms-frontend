<template>
  <v-row justify="center" align="center" class="fill-height">

    <v-col cols="12" class="text-center">
      <v-card>
        <h1>Community</h1>
      </v-card>
    </v-col>


    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    transition: '',
    title: 'Community Forum',
    description: '',
    image: '',
    
  }),

}
</script>
